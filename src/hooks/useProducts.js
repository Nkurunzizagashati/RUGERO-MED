import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { backendUrl } from '../config';

const fetchProducts = async () => {
  const res = await axios.get(`${backendUrl}/products`);
  return res.data?.products || [];
};

const fetchProductById = async (id) => {
  const res = await axios.get(`${backendUrl}/products/${id}`);
  // Support either { product } or object payloads
  return res.data?.product ?? res.data;
};

export function useProducts(options = {}) {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
    ...options,
  });
}

export function useProduct(id, options = {}) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: Boolean(id),
    staleTime: 5 * 60 * 1000,
    ...options,
  });
}
