#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import axios from 'axios';

const SITE = process.env.SITE_ORIGIN || 'https://rugeromed.com';
const API_BASE_URL = process.env.API_BASE_URL || 'https://api.rugeromed.com/api';

const outFile = path.join(process.cwd(), 'public', 'sitemap.xml');

function today() {
  return new Date().toISOString().split('T')[0];
}

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function idOrSlug(item) {
  return item?.slug || item?.id || item?._id || item?.uuid || item?.code;
}

async function fetchAll(endpoint) {
  try {
    const res = await axios.get(`${API_BASE_URL}${endpoint}`, {
      timeout: 15000,
      headers: { 'Accept': 'application/json' }
    });
    const data = res?.data;
    // Support { products: [...] }, { news: [...] }, or raw arrays
    if (Array.isArray(data)) return data;
    if (data?.products) return data.products;
    if (data?.news) return data.news;
    if (data?.items) return data.items;
    return [];
  } catch (err) {
    console.error(`Failed to fetch ${endpoint}:`, err?.response?.status, err?.message);
    return [];
  }
}

function urlXml(loc, changefreq = 'weekly', priority = '0.5', lastmod = today()) {
  const safeLoc = escapeXml(loc);
  return `  <url>\n    <loc>${safeLoc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

async function main() {
  const urls = [];

  // Static public routes
  urls.push(urlXml(`${SITE}/`, 'weekly', '1.0'));
  urls.push(urlXml(`${SITE}/products`, 'weekly', '0.8'));
  urls.push(urlXml(`${SITE}/about`, 'monthly', '0.6'));
  urls.push(urlXml(`${SITE}/projects`, 'monthly', '0.6'));
  urls.push(urlXml(`${SITE}/news`, 'daily', '0.7'));
  urls.push(urlXml(`${SITE}/contact`, 'yearly', '0.5'));

  // Dynamic product detail pages
  const products = await fetchAll('/products');
  for (const p of products) {
    const id = idOrSlug(p);
    if (!id) continue;
    urls.push(urlXml(`${SITE}/products/${encodeURIComponent(String(id))}`, 'weekly', '0.7'));
  }

  // Dynamic news detail pages
  const news = await fetchAll('/news');
  for (const n of news) {
    const id = idOrSlug(n);
    if (!id) continue;
    urls.push(urlXml(`${SITE}/news/${encodeURIComponent(String(id))}`, 'weekly', '0.6'));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

  await fs.writeFile(outFile, xml, 'utf8');
  console.log(`Sitemap written to ${outFile} with ${urls.length} URLs.`);
}

main().catch((err) => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
