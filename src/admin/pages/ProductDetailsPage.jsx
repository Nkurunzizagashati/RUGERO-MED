// src/admin/pages/ProductDetailsPage.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/actions';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: products, pending, error } = useSelector((state) => state.products);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // fetch products if store is empty
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  useEffect(() => {
    if (products && products.length > 0) {
      const found = products.find((p) => p._id === id);
      setProduct(found);
    }
  }, [id, products]);

  // Normalize categories into an array of strings
  const getProductCategories = (category) => {
    if (!category) return [];
    const parseStringCats = (val) => {
      if (typeof val !== 'string') return [String(val)];
      let s = val.trim();
      if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
        s = s.slice(1, -1).trim();
      }
      if (s.startsWith('[') && s.endsWith(']')) {
        try {
          const parsed = JSON.parse(s);
          if (Array.isArray(parsed)) return parsed.map((x) => String(x).trim());
        } catch {}
      }
      if (s.includes(',')) return s.split(',').map((x) => x.trim()).filter(Boolean);
      return [s];
    };
    if (Array.isArray(category)) return category.flatMap(parseStringCats).filter(Boolean);
    if (typeof category === 'string') return parseStringCats(category).filter(Boolean);
    return [];
  };

  if (pending) {
    return <div className="p-8 text-center text-gray-500">Loading product...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  if (!product) {
    return (
      <div className="p-8 text-center text-gray-500">
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-rugero-primary text-white rounded hover:bg-rugero-accent">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Image */}
      <img src={product.imageUrl} alt={product.title} className="w-full h-96 object-cover rounded-lg shadow mb-6" />

      {/* Title + Categories */}
      <h1 className="text-3xl font-bold text-rugero-gray1 mb-2">Name: {product.title}</h1>
      <div className="mb-6">
        <p className="text-rugero-gray3 text-xs font-semibold mb-2">Categories:</p>
        <div className="flex flex-wrap gap-2">
          {getProductCategories(product.category).map((cat, idx) => (
            <span key={`pdet-cat-${idx}`} className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">
              {cat}
            </span>
          ))}
          {getProductCategories(product.category).length === 0 && (
            <span className="text-gray-500 text-sm italic">No categories</span>
          )}
        </div>
      </div>

      {/* Description (HTML) */}
      <div className="rich-text text-rugero-gray1/80 mb-6">
        <div dangerouslySetInnerHTML={{ __html: product.description || '' }} />
      </div>

      {/* Price */}
      {product.price && (
        <p className="text-xl font-semibold text-rugero-accent mb-6">Price: ${product.price}</p>
      )}

      {/* Back Button */}
      <Link to="/admin/products" className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300">
        ← Back
      </Link>
    </div>
  );
};

export default ProductDetailsPage;
