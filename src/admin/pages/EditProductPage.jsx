// src/admin/pages/EditProductPage.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProducts, updateProduct } from '../../redux/actions';
import FormInput from '../components/common/FormInput';
import FormTextarea from '../components/common/FormTextarea';

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: products, pending } = useSelector((state) => state.products);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);

  // Load product from store (or fetch if missing)
  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    } else {
      const product = products.find((p) => p._id === id);
      if (product) {
        setFormData({
          title: product.title || '',
          description: product.description || '',
          category: Array.isArray(product.category) ? product.category.join(', ') : (product.category || ''),
          price: product.price || '',
          image: null,
        });
      }
    }
  }, [products, id, dispatch]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files && files[0] ? files[0] : null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('category', formData.category);
      if (formData.price) data.append('price', formData.price);
      if (formData.image) data.append('image', formData.image);

      await dispatch(updateProduct(id, data));
      navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (pending) {
    return <p className="text-center mt-6">Loading product...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow text-rugero-gray1 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput label="Title" name="title" value={formData.title} onChange={handleChange} required />

        <FormTextarea label="Description" name="description" value={formData.description} onChange={handleChange} required />

        {/* Category (simple text or comma-separated) */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded bg-white text-rugero-gray1"
            placeholder="e.g. CSSD, Neurosurgery"
          />
        </div>

        <FormInput label="Price" name="price" type="number" value={formData.price} onChange={handleChange} />

        <div>
          <label className="block mb-1 font-semibold">Image</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <p className="text-sm text-gray-500 mt-1">Leave empty to keep current image</p>
        </div>

        <button type="submit" disabled={loading} className="bg-rugero-primary text-white px-6 py-2 rounded hover:bg-rugero-green3 transition duration-300 disabled:opacity-50">
          {loading ? 'Updating...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
