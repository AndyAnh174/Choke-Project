import React from 'react';

const Display = ({ value, message, fadeIn }) => {
  return (
    <div className="text-right text-white text-3xl mb-4 h-20 flex items-center justify-end pr-4 bg-gray-800 rounded-lg">
      <div className="text-right w-full">
        <div>{value}</div>
        {message && (
          <div
            className={`text-lg text-pink-500 transition-opacity duration-1000 ${
              fadeIn ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Display;
