// src/admin/pages/EditNewsPage.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchNews, updateNews } from '../../redux/actions';
import FormInput from '../components/common/FormInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CreatableSelect from 'react-select/creatable';

const TAGS = [
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Medical', label: 'Medical' },
  { value: 'Surgery', label: 'Surgery' },
  { value: 'Research', label: 'Research' },
  { value: 'Innovation', label: 'Innovation' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Patient Care', label: 'Patient Care' },
  { value: 'Wellness', label: 'Wellness' },
  { value: 'Treatment', label: 'Treatment' },
  { value: 'Hospital', label: 'Hospital' },
  { value: 'Doctor', label: 'Doctor' },
  { value: 'Nurse', label: 'Nurse' },
  { value: 'Therapy', label: 'Therapy' },
  { value: 'Rehabilitation', label: 'Rehabilitation' },
  { value: 'Diagnosis', label: 'Diagnosis' },
];

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

const EditNewsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: news, pending } = useSelector((state) => state.news);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    reporter: '',
    tags: [],
    citation: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);

  // Load news from store (or fetch if missing)
  useEffect(() => {
    if (!news || news.length === 0) {
      dispatch(fetchNews());
    } else {
      const item = news.find((n) => n._id === id);
      if (item) {
        setFormData({
          title: item.title || '',
          description: item.description || '',
          reporter: item.reporter || '',
          tags: Array.isArray(item.tags) ? item.tags.map((t) => ({ value: t, label: t })) : [],
          citation: item.citation || '',
          image: null,
        });
      }
    }
  }, [news, id, dispatch]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files && files[0] ? files[0] : null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTagsChange = (selectedOptions) => {
    setFormData((prev) => ({ ...prev, tags: selectedOptions || [] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new FormData();
      payload.append('title', formData.title);
      payload.append('description', formData.description);
      payload.append('reporter', formData.reporter);
      payload.append('tags', JSON.stringify((formData.tags || []).map((t) => t.value)));
      if (formData.citation) payload.append('citation', formData.citation);
      if (formData.image) payload.append('image', formData.image);

      await dispatch(updateNews(id, payload));
      navigate('/admin/news');
    } catch (error) {
      console.error('Error updating news:', error);
    } finally {
      setLoading(false);
    }
  };

  if (pending) {
    return <p className="text-center mt-6">Loading news...</p>;
  }

  return (
    <div className="p-8 rounded-lg shadow text-rugero-gray1 max-w-3xl mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-6 text-rugero-primary">Edit News</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput label="Title" name="title" value={formData.title} onChange={handleChange} required />

        {/* Reporter Name */}
        <FormInput label="Reporter Name" name="reporter" value={formData.reporter} onChange={handleChange} required />

        {/* Description - Rich Text */}
        <div className="space-y-1">
          <label className="block mb-1 font-semibold">Description</label>
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

        {/* Tags */}
        <div className="space-y-2">
          <label className="block font-semibold text-rugero-gray1 mb-1">Tags</label>
          <CreatableSelect
            isMulti
            isClearable
            name="tags"
            options={TAGS}
            className="basic-multi-select"
            classNamePrefix="select"
            value={formData.tags}
            onChange={handleTagsChange}
            placeholder="Type to add tags..."
            noOptionsMessage={() => 'Type to create a new tag'}
            formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
            styles={customStyles}
          />
          <p className="text-xs text-rugero-gray2 mt-1">Type to create a new tag or select from suggestions</p>
        </div>

        <FormInput label="Citation" name="citation" type="text" value={formData.citation} onChange={handleChange} />

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

export default EditNewsPage;
