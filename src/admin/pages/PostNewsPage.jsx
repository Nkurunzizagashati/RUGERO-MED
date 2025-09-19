// src/admin/pages/PostNewsPage.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNews } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/common/FormInput';
import FileUpload from '../components/common/FileUpload';
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

const PostNewsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
    reporter: '',
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleTagsChange = (selectedOptions) => {
    setFormData((prev) => ({ ...prev, tags: selectedOptions || [] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('tags', JSON.stringify(formData.tags.map((tag) => tag.value)));
      data.append('reporter', formData.reporter);
      if (formData.image) data.append('image', formData.image);

      await dispatch(postNews(data));
      navigate('/admin/news');
    } catch (error) {
      console.error('Error posting news:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-lg shadow text-rugero-gray1 max-w-3xl mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-6 text-rugero-primary">Post News</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <FormInput label="Title" name="title" value={formData.title} onChange={handleChange} required />

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

        {/* Reporter Name */}
        <FormInput label="Reporter Name" name="reporter" value={formData.reporter} onChange={handleChange} required />

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

        {/* Image upload */}
        <div>
          <FileUpload label="News Image" name="image" onChange={handleChange} accept="image/*" note="PNG, JPG up to 10MB" />
        </div>

        {/* Submit */}
        <div className="flex justify-end w-full">
          <button type="submit" disabled={loading} className="bg-rugero-primary text-white px-6 py-2 rounded-lg hover:bg-rugero-green3 transition duration-300 disabled:opacity-50">
            {loading ? 'Saving...' : 'Post News'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostNewsPage;
