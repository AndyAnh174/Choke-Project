import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {
  const [input, setInput] = useState('0');
  const [message, setMessage] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      setMessage('20/10 vui vẻ 🎉');
    } else if (value === 'C') {
      setInput('0');
      setMessage('');
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-black rounded-lg shadow-lg p-4 w-80">
        {/* Màn hình hiển thị */}
        <Display value={input} message={message} />

        {/* Bàn phím */}
        <Keypad handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
