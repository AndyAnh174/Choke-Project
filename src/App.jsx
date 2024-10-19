import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';
import MusicPlayer from './components/MusicPlayer';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [input, setInput] = useState('0');
  const [showCelebration, setShowCelebration] = useState(false); // Trạng thái để hiển thị hiệu ứng sân khấu
  const [showEasterEgg, setShowEasterEgg] = useState(false); // Trạng thái để hiển thị easter egg
  const [playMusic, setPlayMusic] = useState(false);

  // Tính năng easter egg: Kiểm tra nếu nhập 12042005, 1204 hoặc 12+04
  const checkEasterEgg = (input) => {
    if (input === '4122005' || input === '412' || input === '4+12' || input === '12042005' || input === '1204' || input === '12+04') {
      setShowEasterEgg(true);  // Hiển thị thông điệp bí mật
      setShowCelebration(false);
      return true;
    }
    return false;
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      if (!checkEasterEgg(input)) {
        setShowCelebration(true);  // Hiển thị hiệu ứng sân khấu
        setShowEasterEgg(false);
        setPlayMusic(true);
      }
    } else if (value === 'C') {
      setInput('0');
      setShowCelebration(false);  // Tắt hiệu ứng sân khấu khi xóa
      setShowEasterEgg(false);
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
      setShowCelebration(false);  // Tắt hiệu ứng khi có thao tác khác
      setShowEasterEgg(false);
      setPlayMusic(false);
    }
  };

  return (
    <div className={`min-h-screen ${showCelebration ? 'bg-black' : 'bg-gray-900'} flex items-center justify-center transition-all duration-1000`}>
            <MusicPlayer play={playMusic}/>

    {showCelebration ? (
        <div className="celebration-screen">
          <TypeAnimation
            sequence={[
              "Chúc Mừng 20/10! 🎉",
              1500,
              "You are beautiful 🌸",
              1500,
              "You are brave 💪",
              1500,
              "You are good at study 📚",
              1500,
              "You'll do what you want 🚀",
              1500
            ]}
            wrapper="h1"
            speed={50}
            style={{ fontSize: '4em', color: '#f8b400', fontFamily: 'Pacifico, cursive' }}
            repeat={Infinity}
          />
          <div className="flower-animation">
            <div className="flower">🌸</div>
            <div className="flower">🌼</div>
            <div className="flower">🌷</div>
          </div>
        </div>
      ) : showEasterEgg ? (
        <div className="celebration-screen">
          <h1 className="celebration-text">Việt Anh Yêu Hồng Nhung ❤️</h1>
          <div className="flower-animation">
            <div className="flower">🌸</div>
            <div className="flower">🌼</div>
            <div className="flower">🌷</div>
          </div>
        </div>
      ) : (
        <div className="bg-black rounded-lg shadow-lg p-4 w-80">
          {/* Màn hình hiển thị */}
          <Display value={input} />

          {/* Bàn phím */}
          <Keypad handleButtonClick={handleButtonClick} />
        </div>
      )}
    </div>
  );
}

export default App;
