// src/admin/components/common/FormTextarea.jsx
const FormTextarea = ({ label, name, value, onChange, required = false, rows = 6 }) => {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full border px-3 py-2 rounded bg-white text-rugero-gray1"
      />
    </div>
  );
};

export default FormTextarea;
