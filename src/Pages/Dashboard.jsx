import React from 'react'
import { Overview } from '../Components/Overview'
import { FourGrid } from '../Components/FourGrid'

export const Dashboard = () => {
  return (
    <div>
        <div className='grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(17,1fr)] bg-inherit gap-2 h-[1000px]'>
            {/* second header */}
            <div className='bg-black col-[1/17] row-[1/3] flex justify-between items-center px-4 rounded-md drop-shadow-lg'>
                <Overview title='salesOverview' />
            </div>

            {/* four grid beneath the second header */}
            {/* <div className='col-[1/17] row-[3/6] grid grid-cols-4 gap-2'>
                <div className='bg-gray-800 rounded-md drop-shadow-lg'></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg'></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg '></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg '></div>
            </div> */}
            <FourGrid />
            
            {/* rest of the layout */}
            <div className='bg-black col-[1/12] row-[6/14] rounded-md shadow-lg'></div>
            <div className='bg-black col-[12/17] row-[6/10] rounded-md shadow-lg'></div>
            <div className='bg-black col-[12/17] row-[10/14] rounded-md shadow-lg'></div>
            <div className='bg-black col-[1/12] row-[14/18] rounded-t-md shadow-lg'></div>
            <div className='bg-black col-[12/17] row-[14/18] rounded-t-md shadow-lg'></div>
        </div>
    </div>
  )
}
