import React from 'react'

function Boxes({hrs, mins, secs}) {
  return (
    <div className='flex my-5'>
        <div className='hours text-8xl bg-black h-fit px-11 mx-5 py-16 rounded text-white font-semibold'>
     {hrs}
   </div> <div className='hours text-8xl bg-black h-fit px-11 mx-5 py-16 rounded text-white font-semibold'>
      {mins}
    </div>
    <div className='hours text-8xl bg-black h-fit px-11 mx-5 py-16 rounded text-white font-semibold'>
      {secs}
    </div>
    </div>
  )
}

export default Boxes
