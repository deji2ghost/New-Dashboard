import { faCalendarWeek, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Overview = (props) => {
  const { t } = useTranslation()
  console.log(props.title)

  return (
    <div className='flex justify-between w-full'>
        <h1 className='ml-4 text-3xl font-medium tracking-wider'>{t(`${props.title}`)}</h1>
        <div>
            <select className='bg-inherit font-normal border border-slate-400 rounded-md px-1 py-1'>
                <input type='date' id='date' className='bg-red-600'/>
                <FontAwesomeIcon icon={faCalendarWeek} />
                <option>{t(`Monthly`)}</option>
            </select>
            <button className='bg-violet-950 px-3 py-1 mr-2 ml-3 rounded-sm hover:bg-purple-400'>
                <FontAwesomeIcon icon={faDownload}/>
                <span className='ml-2'>{t(`downloadReport`)}</span>
            </button>
        </div>
    </div>
  )
}
