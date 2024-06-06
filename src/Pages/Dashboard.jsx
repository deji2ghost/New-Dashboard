import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faDollarSign, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Overview } from '../Components/Overview'
import { FourGrid } from '../Components/FourGrid'

export const Dashboard = ({ showCalendar, setShowCalendar, currentDate, weekly, setWeekly }) => {
  const icon1 = <FontAwesomeIcon icon={faDollarSign} className='text-black border-violet-500 bg-violet-500 text-2xl px-2 py-1 mr-2 rounded-full' />
  const icon2 = <FontAwesomeIcon icon={faUserGroup} className='text-violet-500 text-2xl py-1 mr-2 rounded-full' />
  const icon3 = <FontAwesomeIcon icon={faBagShopping} className='text-violet-500 text-2xl py-1 mr-2 rounded-full' />
  const icon4 = <image src={bullseye} />
  
  return (
    <div>
        <div className='grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(17,1fr)] bg-inherit gap-2 h-[1000px]'>
            {/* second header */}
            <div className='bg-black col-[1/17] row-[1/3] flex justify-between items-center px-4 rounded-md drop-shadow-lg'>
                <Overview title='salesOverview' showCalendar={showCalendar} setShowCalendar={setShowCalendar} currentDate={currentDate} weekly={weekly} setWeekly={setWeekly}/>
            </div>

            {/* four grid beneath the second header */}
            {/* <div className='col-[1/17] row-[3/6] grid grid-cols-4 gap-2'>
                <div className='bg-gray-800 rounded-md drop-shadow-lg'></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg'></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg '></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg '></div>
            </div> */}
            <<FourGrid
              grid1icon={icon1} grid1title='Net Revenue' grid1figure='$30,000' grid1desc='increase from last month'
              grid2icon={icon2} grid2title='Total Website Visits' grid2figure='1200' grid2desc='decrease from last month'
              grid3icon={icon3} grid3title='Total Order' grid3figure='2146' grid3desc='increase from last month'
              grid4icon={icon4} grid4title='Profit Target' grid4figure='$40,000.00' grid4desc='left to reach target'
            />
            
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
