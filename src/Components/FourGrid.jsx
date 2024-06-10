import React from 'react'

export const FourGrid = () => {
  return (
    <>
        <div className='col-[1/17] row-[3/6] grid grid-cols-4 gap-2'>
            <div className='bg-black rounded-md drop-shadow-lg'></div>
            <div className='bg-black rounded-md drop-shadow-lg'></div>
            <div className='bg-black rounded-md drop-shadow-lg '></div>
            <div className='bg-black rounded-md drop-shadow-lg '></div>
        </div>
    </>
  )
}
