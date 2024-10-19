import React, { useState, useEffect } from 'react';

const MusicPlayer = ({ play }) => {
  const [audio] = useState(new Audio('/music.mp3')); // Đường dẫn tới file nhạc trong thư mục public

  useEffect(() => {
    if (play) {
      audio.play();  // Phát nhạc khi `play` là true
    } else {
      audio.pause(); // Tạm dừng nhạc khi `play` là false
      audio.currentTime = 0; // Reset nhạc về đầu nếu cần
    }
  }, [play, audio]);

  return null; // Component này chỉ xử lý phát nhạc, không cần render gì
};

export default MusicPlayer;
