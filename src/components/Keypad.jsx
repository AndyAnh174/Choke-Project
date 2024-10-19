import React from 'react';

const Keypad = ({ handleButtonClick }) => {
  const keys = [
    ['C', '7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {keys.flat().map((key) => (
        <button
          key={key}
          className={`${
            key === '='
              ? 'bg-orange-500 hover:bg-orange-400'
              : 'bg-gray-600 hover:bg-gray-500'
          } text-white py-4 rounded-lg transition`}
          onClick={() => handleButtonClick(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
