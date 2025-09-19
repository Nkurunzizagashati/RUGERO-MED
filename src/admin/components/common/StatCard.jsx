import React from 'react';

const StatCard = ({ icon, bgColor, iconColor, label, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center">
      <div className={`p-3 rounded-full ${bgColor}`}>
        {React.cloneElement(icon, { className: iconColor, size: 24 })}
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
