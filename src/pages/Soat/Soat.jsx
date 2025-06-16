import { useEffect, useState } from 'react';
import './Soat.css';

const Soat = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('uz-UZ', { hour12: false }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('uz-UZ', { hour12: false }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='soat-container'>
      <h1 className='soat-title'>⏰ Hozirgi vaqt</h1>
      <p className='soat-time'>{time}</p>
    </div>
  );
};

export default Soat;
