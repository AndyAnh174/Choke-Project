import React from 'react';

const Display = ({ value, message }) => {
  return (
    <div className="text-right text-white text-3xl mb-4 h-20 flex items-center justify-end pr-4 bg-gray-800 rounded-lg">
      <div className="text-right w-full">
        <div>{value}</div>
        {message && (
          <div className="text-lg text-orange-500 animate-bounce">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Display;
