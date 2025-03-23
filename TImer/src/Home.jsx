import React, { useState } from 'react'
import Button from './Button'
import TimerApp from './timer'
import QuickStartTimer from './QuickSetTimer'
import SetTimer from './SetTImer'

function Home() {
      const [start, setStart] = useState(false)
      const [showSetTimer, setShowSetTimer] = useState(false);

  if (showSetTimer) {
    return <SetTimer />; 
  }
if(start){
    return <QuickStartTimer/>
}

  return (
   <div className='h-screen w-screen justify-center align-middle flex items-center  '>
     <div className='flex'>

        <button className='cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2'
        onClick={()=>setStart(true)}
        > Start Timer</button>
   
        <button className={`cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2`}
         onClick={()=>setShowSetTimer(true)}
        >Set Timer</button>
        
    </div>
   </div>
  )
}

export default Home
