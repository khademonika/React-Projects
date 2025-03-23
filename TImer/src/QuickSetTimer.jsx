import React, { useState, useRef } from 'react';
import Box from './Box';
import Boxes from './Box@';
import { Link, NavLink } from 'react-router-dom';

function QuickStartTimer({setStart}) {
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(0)



  const stopTimer = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };
  const startTimer = () => {
    if (!running) {
      setRunning(true)
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          return prevTime + 1
        })
      }, 1000)
    }
  }
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return <Boxes hrs={hrs} mins={mins} secs={secs}/>
  };
//  
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <button className='cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2'
      onClick={()=>setStart(false)}>
      Back </button>
      <h1 className="text-3xl font-semibold"></h1>
      <h1 className="text-3xl font-semibold">{formatTime(timeLeft)}</h1>
      <div className="flex">
        <button
          className="cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-4 py-2 rounded-2xl mx-3"
          onClick={startTimer}
          disabled={running} // Disable when already running
        >
          Start Timer
        </button>
        <button
          className="cursor-pointer bg-red-600 text-2xl font-semibold text-white px-4 py-2 rounded-2xl mx-3"
          onClick={stopTimer}
          disabled={!running} // Disable when not running
        >
          Stop Timer
        </button>
      </div>
    </div>
  );
}

export default QuickStartTimer;
