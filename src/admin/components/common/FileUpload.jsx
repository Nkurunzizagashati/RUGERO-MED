import React, { useState } from 'react';

const FileUpload = ({ label, name, onChange, accept = 'image/*', note = 'PNG, JPG up to 10MB' }) => {
  const [fileInfo, setFileInfo] = useState({ name: '', size: 0 });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileInfo({ name: file.name, size: file.size });
    } else {
      setFileInfo({ name: '', size: 0 });
    }
    onChange(e);
  };

  const formatFileSize = (size) => {
    if (size >= 1024 * 1024) {
      return (size / (1024 * 1024)).toFixed(2) + ' MB';
    } else if (size >= 1024) {
      return (size / 1024).toFixed(1) + ' KB';
    } else {
      return size + ' B';
    }
  };

  return (
    <div className="sm:col-span-2 space-y-2">
      <label className="block text-sm font-medium text-rugero-gray1">{label}</label>

      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-rugero-gray3 rounded-md hover:border-rugero-primary transition-colors">
        <div className="space-y-1 text-center">
          <svg className="mx-auto h-12 w-12 text-rugero-gray1" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="flex text-sm text-rugero-gray1 justify-center">
            <label htmlFor={name} className="relative cursor-pointer bg-white rounded-md font-medium text-rugero-primary hover:text-rugero-green3 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rugero-primary px-2 py-1">
              <span>Upload a file</span>
              <input id={name} name={name} type="file" accept={accept} className="sr-only" onChange={handleFileChange} />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>

          {fileInfo.name && (
            <p className="text-xs text-rugero-gray1 mt-1">
              Selected file: {fileInfo.name} ({formatFileSize(fileInfo.size)})
            </p>
          )}

          <p className="text-xs text-rugero-gray1">{note}</p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
