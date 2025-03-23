import React, { useState, useRef } from 'react';
import Box from './Box';

function SetTimer({setShowSetTimer}) {
  const [time, setTime] = useState(0); // Store as a number
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null); // Store the interval ID
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [second, setSecond] = useState(0)

  // const handleTime = (e) => {
  //   setTime(Number(e.target.value)); // Convert input to number

  // };
  const getTotalSeconds = () => hours * 3600 + minutes * 60 + second
  const startTimer = () => {
    let totalTime = getTotalSeconds()
    if (!running && totalTime > 0) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        totalTime -= 1
        if (totalTime <= 0) {
          clearInterval(timerRef.current)
          setHours(0)
          setMinutes(0)
          setSecond(0)
        } else {
          setHours(Math.floor(totalTime / 3600))
          setMinutes(Math.floor((totalTime%3600)/ 60 ) )
          setSecond(Math.floor(totalTime % 60))
        }

      }, 1000);
    }
  };


  const stopTimer = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  return (
    <div className='startTimer h-screen flex flex-col justify-center items-center'>
      <button className='cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2'
      onClick={()=>setShowSetTimer(false)}>
      Back </button>
     <h1 className="text-3xl font-semibold hours flex">
        <Box text={hours} />  <span className='text-9xl'>:</span> <Box text={minutes} />  <span className='text-9xl'>:</span> <Box text={second} />
      </h1>
      {!running ?
        (
          <div className=''>
            
            <input type="text"
            className=' font-semibold  outline-none border-none p-2'
            value={hours} onChange={(e) => setHours(Number(e.target.value))} disabled={running} placeholder='HH' />:
            <input type="text" 
            className=' font-semibold  outline-none border-none p-2'
            value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} disabled={running} placeholder='MM' />:
            <input type="text"
            className=' font-semibold  outline-none border-none p-2'
            value={second} onChange={(e) => setSecond(Number(e.target.value))} disabled={running} placeholder='SS' />

          </div>

        ) : ""}
      <div className="flex">
        <button
          className='cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2'
          onClick={startTimer}
          disabled={running || getTotalSeconds <= 0}
        >
          Start
        </button>
        <button
          className='cursor-pointer bg-red-600 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2'
          onClick={stopTimer}
          disabled={!running}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default SetTimer;
