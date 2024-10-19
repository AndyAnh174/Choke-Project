import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {
  const [input, setInput] = useState('0');
  const [message, setMessage] = useState('');
  const [showCelebration, setShowCelebration] = useState(false); // Trạng thái để hiển thị hiệu ứng sân khấu
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0); // Quản lý chỉ số thông điệp hiện tại

  // Mảng các thông điệp tuần tự xuất hiện
  const messages = [
    "Chúc Mừng 20/10! 🎉",
    "You are beautiful 🌸",
    "You are brave 💪",
    "You are good at study 📚",
    "You'll do what you want 🚀"
  ];

  // Tính năng easter egg: Kiểm tra nếu nhập 12042005, 1204 hoặc 12+04
  const checkEasterEgg = (input) => {
    if (input === '4122005' || input === '412' || input === '4+12' || input === '12042005' || input === '1204' || input === '12+04') {
      setMessage('Việt Anh Yêu Hồng Nhung ❤️');
      setShowCelebration(true);
      return true;
    }
    return false;
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      if (!checkEasterEgg(input)) {
        setShowCelebration(true);  // Hiển thị hiệu ứng sân khấu
        setMessage(messages[currentMessageIndex]);
      }
    } else if (value === 'C') {
      setInput('0');
      setMessage('');
      setShowCelebration(false);  // Tắt hiệu ứng sân khấu khi xóa
      setCurrentMessageIndex(0); // Reset trạng thái khi bấm 'C'
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
      setShowCelebration(false);  // Tắt hiệu ứng khi có thao tác khác
    }
  };

  // Hiệu ứng hiển thị tuần tự các thông điệp
  useEffect(() => {
    if (showCelebration && currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
        setMessage(messages[currentMessageIndex]);
      }, 5000); // Mỗi thông điệp xuất hiện trong 5 giây

      return () => clearTimeout(timer); // Clear timeout nếu component unmount
    }
  }, [showCelebration, currentMessageIndex, messages]);

  return (
    <div className={`min-h-screen ${showCelebration ? 'bg-black' : 'bg-gray-900'} flex items-center justify-center transition-all duration-1000`}>
      {showCelebration ? (
        <div className="celebration-screen">
          <div className="stage-effect">
            <h1 className="celebration-text">{message}</h1>
            <div className="flower-animation">
              <div className="flower">🌸</div>
              <div className="flower">🌼</div>
              <div className="flower">🌷</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black rounded-lg shadow-lg p-4 w-80">
          {/* Màn hình hiển thị */}
          <Display value={input} message={message} />

          {/* Bàn phím */}
          <Keypad handleButtonClick={handleButtonClick} />
        </div>
      )}
    </div>
  );
}

export default App;
