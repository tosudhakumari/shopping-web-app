import React from 'react'
import "./spinner.css"

function Spinner() {
  return (
    <div className='flex items-center justify-center h-[60vh]'>
      <div className="custom-loader "></div>
    </div>
  )
}

export default Spinner
