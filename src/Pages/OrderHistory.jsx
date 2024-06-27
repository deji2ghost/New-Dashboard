import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Overview } from '../Components/Overview'
import { FourGrid } from '../Components/FourGrid'

export const OrderHistory = ({ weekly, setWeekly, currentDate}) => {
  const icon1 = <FontAwesomeIcon icon={faShoppingCart} className='text-violet-500 text-2xl py-1 mr-2 rounded-full' />
  const icon2 = <FontAwesomeIcon icon={faShoppingCart} className='text-violet-500 text-2xl py-1 mr-2 rounded-full' />
  const icon3 = <FontAwesomeIcon icon={faShoppingCart} className='text-violet-500 text-2xl py-1 mr-2 rounded-full' />
  const icon4 = <FontAwesomeIcon icon={faShoppingCart} className='text-violet-500 text-2xl py-1 mr-2 rounded-full' />

  return (
    <div>
        <div className='grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(17,1fr)] bg-inherit gap-2 h-[1000px]'>
            {/* second header */}
            <div className='dark:bg-black bg-stone-100 col-[1/17] row-[1/3] flex justify-between items-center px-4 rounded-md drop-shadow-lg'>
                <Overview title='expenseStatement' currentDate={currentDate}/>
            </div>

            {/* four grid beneath the second header */}
            <FourGrid
              grid1icon={icon1} grid1title='Total Order' grid1figure='$5,000' grid1desc='increase from last month'
              grid2icon={icon2} grid2title='Paid Invoice' grid2figure='1200' grid2desc='decrease from last month'
              grid3icon={icon3} grid3title='Pending Order' grid3figure='2146' grid3desc='increase from last month'
              grid4icon={icon4} grid4title='Order Dispatched' grid4figure='$40,000.00' grid4desc='left to reach target'
            />
            
            {/* rest of the layout */}
            <div className='dark:bg-black bg-stone-100 col-[1/12] row-[6/14] rounded-md shadow-lg'></div>
            <div className='dark:bg-black bg-stone-100 col-[12/17] row-[6/14] rounded-md shadow-lg'></div>
            <div className='dark:bg-black bg-stone-100 col-[1/12] row-[14/18] rounded-t-md shadow-lg'></div>
            <div className='dark:bg-black bg-stone-100 col-[12/17] row-[14/18] rounded-t-md shadow-lg'></div>
        </div>
    </div>
  )
}
