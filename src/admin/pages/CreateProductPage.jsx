import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProduct } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/common/FormInput';
import FileUpload from '../components/common/FileUpload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CreatableSelect from 'react-select/creatable';

const categories = [
  'CSSD',
  'Hospital Design',
  'Plastic Surgery',
  'Neurosurgery',
  'Theatre',
  'Home Care',
];

const CATEGORY_OPTIONS = categories.map((c) => ({ value: c, label: c }));

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '42px',
    borderColor: state.isFocused ? '#0d9488' : '#d1d5db',
    boxShadow: state.isFocused ? '0 0 0 1px #0d9488' : 'none',
    '&:hover': { borderColor: state.isFocused ? '#0d9488' : '#9ca3af' },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#e0f2fe',
    borderRadius: '9999px',
    padding: '0 0.5rem',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#0369a1',
    fontSize: '0.75rem',
    fontWeight: 500,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#0369a1',
    ':hover': { backgroundColor: '#bae6fd', color: '#075985' },
  }),
};

const CreateProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    category: [],
    description: '',
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCategoryChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      category: selectedOptions || [],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('category', JSON.stringify((formData.category || []).map((c) => c.value)));
      data.append('description', formData.description);
      if (formData.image) data.append('image', formData.image);

      await dispatch(postProduct(data));
      navigate('/admin/products');
    } catch (error) {
      console.error('Error creating product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-lg shadow text-rugero-gray1 max-w-3xl mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-6 text-rugero-primary">Create Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <FormInput label="Title" name="title" value={formData.title} onChange={handleChange} required />

        {/* Category as tags (creatable, multi) */}
        <div className="space-y-2">
          <label className="block font-semibold text-rugero-gray1 mb-1">Category</label>
          <CreatableSelect
            isMulti
            isClearable
            name="category"
            options={CATEGORY_OPTIONS}
            className="basic-multi-select"
            classNamePrefix="select"
            value={formData.category}
            onChange={handleCategoryChange}
            placeholder="Type to add categories..."
            noOptionsMessage={() => 'Type to create a new category'}
            formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
            styles={customStyles}
          />
          <p className="text-xs text-rugero-gray2 mt-1">Type to create a new category or select from suggestions</p>
        </div>

        {/* Description - Rich Text */}
        <div className="space-y-1">
          <label className="block mb-1 font-semibold text-rugero-gray1">Description</label>
          <ReactQuill
            theme="snow"
            value={formData.description}
            onChange={(value) => setFormData((prev) => ({ ...prev, description: value }))}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            formats={['header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image']}
            className="min-h-[200px] bg-white border border-rugero-gray3 rounded"
          />
        </div>

        {/* Image full width */}
        <div>
          <FileUpload label="Product Image" name="image" onChange={handleChange} accept="image/*" note="PNG, JPG up to 10MB" />
        </div>

        {/* Submit button */}
        <div className="flex justify-end w-full">
          <button type="submit" disabled={loading} className="bg-rugero-primary text-white px-6 py-2 rounded-lg hover:bg-rugero-green3 transition duration-300 disabled:opacity-50">
            {loading ? 'Saving...' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductPage;
