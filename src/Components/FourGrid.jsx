import React from 'react'

export const FourGrid = (props) => {
  return (
    <>
        <div className='col-[1/17] row-[3/6] grid grid-cols-4 gap-2'>
            {/* grid1 */}
            <div className='dark:bg-black bg-stone-100 px-8 py-5 rounded-md drop-shadow-lg'>
              <div className='flex items-center mb-5'>
                {props.grid1icon}
                <p className=''>{props.grid1title}</p>
              </div>
              <h1 className='font-bold text-3xl mb-5'>{props.grid1figure}</h1>
              <p className='text-xs'>{props.grid1desc}</p>
            </div>

            {/* grid2 */}
            <div className='dark:bg-black bg-stone-100 px-8 py-5 rounded-md drop-shadow-lg'>
              <div className='flex items-center mb-5'>
                {props.grid2icon}
                <p className=''>{props.grid2title}</p>
              </div>
              <h1 className='font-bold text-3xl mb-5'>{props.grid2figure}</h1>
              <p className='text-xs'>{props.grid2desc}</p>
            </div>

            {/* grid3 */}
            <div className='dark:bg-black bg-stone-100 px-8 py-5 rounded-md drop-shadow-lg'>
              <div className='flex items-center mb-5'>
                {props.grid3icon}
                <p className=''>{props.grid3title}</p>
              </div>
              <h1 className='font-bold text-3xl mb-5'>{props.grid3figure}</h1>
              <p className='text-xs'>{props.grid3desc}</p>
            </div>

            {/* grid4 */}
            <div className='dark:bg-black bg-stone-100 px-8 py-5 rounded-md drop-shadow-lg'>
              <div className='flex items-center mb-5'>
                {props.grid4icon}
                <p className=''>{props.grid4title}</p>
              </div>
              <h1 className='font-bold text-3xl mb-5'>{props.grid4figure}</h1>
              <p className='text-xs'>{props.grid4desc}</p>
            </div>
        </div>
    </>
  )
}
