// src/admin/components/common/ConfirmDialog.jsx
import { motion } from 'framer-motion';

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-rugero-secondary/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center"
      >
        <p className="text-gray-800 mb-6">{message}</p>
        <div className="flex justify-center space-x-4">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmDialog;
