import { useState, useEffect } from 'react';
import './Sekundomer.css';

const Sekundomer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setTime(0);
    setIsActive(false);
  };

  // soat:minut:sekund:soniya (hh:mm:ss:xx)
  const formatTime = (time) => {
    const totalSeconds = Math.floor(time / 100);
    const hundredths = time % 100;

    const hrs = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const mins = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    const centiseconds = hundredths.toString().padStart(2, '0');

    return `${hrs}:${mins}:${secs}:${centiseconds}`;
  };

  return (
    <div className='sekundomer-container'>
      <h1 className='sekundomer-title'>Sekundomer</h1>
      <div className='sekundomer-time'>{formatTime(time)}</div>
      <div className='sekundomer-controls'>
        <button onClick={toggle} className='btn'>
          {isActive ? 'To‘xtatish' : 'Boshlash'}
        </button>
        <button onClick={reset} className='btn btn-reset'>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Sekundomer;
