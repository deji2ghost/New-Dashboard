import React from 'react'
import { Overview } from '../Components/Overview'

export const Customers = () => {
  return (
    <div>
        <div className='grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(17,1fr)] bg-inherit gap-2 h-[1000px]'>
            {/* second header */}
            <div className='bg-black col-[1/17] row-[1/3] flex justify-between items-center px-4 rounded-md drop-shadow-lg'>
                <Overview title='customerOverview' />
            </div>

            {/* four grid beneath the second header */}
            <div className='col-[1/17] row-[3/9] grid grid-cols-2 gap-2'>
                <div className='bg-black rounded-md drop-shadow-lg'></div>
                <div className='bg-black rounded-md drop-shadow-lg'></div>
            </div>
            
            {/* rest of the layout */}
            <div className='bg-black col-[1/17] row-[9/18] rounded-t-md shadow-lg'></div>
        </div>
    </div>
  )
}
