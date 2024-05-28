import { faBell, faGear, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Header = ({ userEmail }) => {
  return (
    <div className='bg-black h-[80px] w-full sticky top-0 z-50 col[2/3] row-[1/2] flex items-center justify-between p-7 rounded-b-md drop-shadow-lg'>
        {/* searchbar */}
        <div className='relative w-[50%] text-white'>
            <input
                placeholder='Search'
                className='bg-indigo-950 outline-none px-12 py-1 w-full rounded-md'
            />
            <FontAwesomeIcon icon={faSearch} className='absolute top-1/2 -translate-y-1/2 left-6 text-gray-300'/>
        </div>
        {/* account settings bar */}
        <div className='flex items-center gap-6'>
            {/* <img src={england} className='w-7'/> */}
            <select name='language' id='language' className='outline-none bg-inherit cursor-pointer font-normal text-sm ml-0'>
                <option value='English' className='bg-gray-800 cursor-pointer'>Eng/Uk</option>
                <option value='French' className='bg-gray-800 cursor-pointer'>French</option>
                <option value='Spanish' className='bg-gray-800 cursor-pointer'>Spanish</option>
            </select>
            <div className='relative ml-2 mr-3'>
                <FontAwesomeIcon icon={faBell} />
                <h1 className='bg-red-800 text-center rounded-full w-[18px] absolute -top-1 -right-2 text-[10px]'>3</h1>
            </div>
            <div>
                <FontAwesomeIcon icon={faGear} />
            </div>
            <div className='flex items-center gap-3 ml-3'>
                <div className='bg-indigo-950 border-white px-3 py-2 rounded-3xl'>
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className='ml-0'>
                    <h1 className='font-normal'>Ladies-Closet</h1>
                    <p className='font-light text-xs'>{userEmail}</p>
                </div>
            </div>
        </div>   
    </div>
  )
}
