import React, { useState, useRef } from 'react';

function SetTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  // Convert hours, minutes, seconds to total seconds
  const getTotalSeconds = () => hours * 3600 + minutes * 60 + seconds;

  const startTimer = () => {
    let totalTime = getTotalSeconds();
    if (!running && totalTime > 0) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        totalTime -= 1;
        if (totalTime <= 0) {
          clearInterval(timerRef.current);
          setRunning(false);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        } else {
          setHours(Math.floor(totalTime / 3600));
          setMinutes(Math.floor((totalTime % 3600) / 60));
          setSeconds(totalTime % 60);
        }
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  return (
    <div className="startTimer h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">
        {String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </h1>
      <div className="flex space-x-2 my-3">
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-16 text-xl text-center border rounded"
          placeholder="HH"
          disabled={running}
        />
        <span className="text-xl">:</span>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="w-16 text-xl text-center border rounded"
          placeholder="MM"
          disabled={running}
        />
        <span className="text-xl">:</span>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          className="w-16 text-xl text-center border rounded"
          placeholder="SS"
          disabled={running}
        />
      </div>
      <div className="flex">
        <button
          className="cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2"
          onClick={startTimer}
          disabled={running || getTotalSeconds() <= 0}
        >
          Start
        </button>
        <button
          className="cursor-pointer bg-red-600 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2"
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
