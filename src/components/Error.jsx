import React from 'react'

const Error = ({msj}) => {
  return (
    <div className='text-center'>
        <p className='bg-red-800 p-2 mb-4 rounded font-bold text-sm text-white uppercase'>{msj}</p>
    </div>

  )
}

export default Error