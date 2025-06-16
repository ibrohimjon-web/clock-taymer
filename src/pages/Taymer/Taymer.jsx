import { useState, useEffect } from 'react';
import './Taymer.css';

const Taymer = () => {
  const [inputHours, setInputHours] = useState('0');
  const [inputMinutes, setInputMinutes] = useState('0');
  const [inputSeconds, setInputSeconds] = useState('0');
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const parseInput = (val) => {
    const num = parseInt(val, 10);
    return isNaN(num) || num < 0 ? 0 : num;
  };

  const handleHoursChange = (e) => setInputHours(e.target.value);
  const handleMinutesChange = (e) => setInputMinutes(e.target.value);
  const handleSecondsChange = (e) => setInputSeconds(e.target.value);

  const startTimer = () => {
    if (isActive) return;

    const hrs = parseInput(inputHours);
    const mins = parseInput(inputMinutes);
    const secs = parseInput(inputSeconds);

    const totalSeconds = hrs * 3600 + mins * 60 + secs;

    if (totalSeconds === 0) return;

    setTime(totalSeconds * 10);
    setIsActive(true);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      if (time <= 0) {
        setIsActive(false);
        setTime(0);
        alert('⏰ Taymer tugadi!');
        return;
      }

      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const reset = () => {
    setIsActive(false);
    setTime(0);
    setInputHours('0');
    setInputMinutes('0');
    setInputSeconds('0');
  };

  const formatTime = (time) => {
    const totalSeconds = Math.floor(time / 10);
    const hundredths = (time % 10).toString().padStart(2, '0');
    const hrs = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const mins = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}:${hundredths}`;
  };

  return (
    <div className='taymer-container'>
      <h1 className='taymer-title'>⏳ Taymer</h1>

      <div className='input-wrapper'>
        <div className='input-group'>
          <label htmlFor='hours'>Soat</label>
          <input
            id='hours'
            type='number'
            min='0'
            value={inputHours}
            onChange={handleHoursChange}
            disabled={isActive}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='minutes'>Minut</label>
          <input
            id='minutes'
            type='number'
            min='0'
            max='59'
            value={inputMinutes}
            onChange={handleMinutesChange}
            disabled={isActive}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='seconds'>Sekund</label>
          <input
            id='seconds'
            type='number'
            min='0'
            max='59'
            value={inputSeconds}
            onChange={handleSecondsChange}
            disabled={isActive}
          />
        </div>
      </div>

      <div className='taymer-time'>{formatTime(time)}</div>

      <div className='taymer-controls'>
        {!isActive ? (
          <button onClick={startTimer} className='btn'>
            Boshlash
          </button>
        ) : (
          <button onClick={() => setIsActive(false)} className='btn'>
            To‘xtatish
          </button>
        )}
        <button onClick={reset} className='btn btn-reset'>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Taymer;
