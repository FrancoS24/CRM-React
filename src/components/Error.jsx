import React from 'react'

const Error = ({children}) => {
  return (
    <>
      <h1 className='text-red-600 text-center font-bold  uppercase'>{children}</h1>
    </>
  )
}

export default Error