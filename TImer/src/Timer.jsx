import React from 'react'

function timer({timer,stopTimer}) {
  return (
    <div className='timer'>
      {timer}
      <button className='cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2'
    onClick={stopTimer}
    >Stop</button>
    </div>
  )
}

export default timer
