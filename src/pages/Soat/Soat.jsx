import { useEffect, useState } from 'react';
import './Soat.css';

const Soat = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const yil = date.getFullYear();
    const oy = (date.getMonth() + 1).toString().padStart(2, '0');
    const kun = date.getDate().toString().padStart(2, '0');
    return `${yil}-${oy}-${kun}`;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('uz-UZ', { hour12: false });
  };

  return (
    <div className='soat-container'>
      <h1 className='soat-title'>⏰ Hozirgi vaqt</h1>
      <div className='soat-output'>
        <p className='soat-date'>{formatDate(dateTime)}</p>
        <p className='soat-time'>{formatTime(dateTime)}</p>
      </div>
    </div>
  );
};

export default Soat;
