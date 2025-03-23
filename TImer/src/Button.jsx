import React from 'react'

function Button({text, setStart}) {
  return (
    <div className='cursor-pointer bg-blue-900 text-2xl font-semibold text-white px-3 py-1 rounded-2xl w-fit mx-5 my-2'
    onClick={()=>setStart(true)}
    >
 {text}
    </div>
  )
}

export default Button
