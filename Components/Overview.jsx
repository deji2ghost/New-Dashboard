import { faCalendarWeek, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Overview = (props) => {
  const { t } = useTranslation()
  
  const handleChange = (e) => {
    const { value } = e.target
    console.log('clicked', value)
    props.setShowCalendar(true)
    if( value === 'weekly'){
      console.log('week')
      props.setWeekly(!props.weekly)
    }else if( value === 'monthly'){
      console.log('month')
      // props.setShowCalendar(true)
      props.setWeekly(!props.weekly)
    }
  }
  console.log(props)

  
  console.log(props.title, props.showCalendar)

  return (
    <div className='flex justify-between w-full'>
        <h1 className='ml-4 text-3xl font-medium tracking-wider'>{t(`${props.title}`)}</h1>
        <div className='flex items-center gap-5'>
            {
              props.currentDate.length > 0 
               ?
               (<p>
                <span>Start :</span> {props.currentDate[0]?.toDateString()}
                &nbsp;|&nbsp;
                <span>End :</span> {props.currentDate[1]?.toDateString()}
               </p>)  :
               (
                <p>
                  <span>Selected date :</span> { props.currentDate?.toDateString() }
                </p>
               )
            }
            <select onChange={handleChange} className='bg-inherit font-normal border border-slate-400 rounded-md px-1 py-1'>
                {/* <input type='date' id='date' className='bg-red-600'/> */}
                {/* <FontAwesomeIcon icon={faCalendarWeek} /> */}
                <option value='monthly' name='monthly'>{t(`Monthly`)}</option>
                <option value='weekly' name='weekly'>Weekly</option>
            </select>
            {/* <div className='react-calendar'>
              <Calendar value={currentDate} onChange={setCurrentDate} />
            </div> */}
            <button className='bg-violet-950 px-3 py-1 mr-2 ml-3 rounded-sm hover:bg-violet-500 transition ease-in-out duration-300'>
                <FontAwesomeIcon icon={faDownload}/>
                <span className='ml-2'>{t(`downloadReport`)}</span>
            </button>
        </div>
    </div>
  )
}
