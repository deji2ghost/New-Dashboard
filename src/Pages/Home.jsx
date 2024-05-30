import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SideNav } from '../Components/SideNav';
import { Header } from '../Components/Header';
import { Outlet } from 'react-router-dom';

export const Home = ({ currentUser, setUserLoggedIn, userLoggedIn }) => {

    const [collapsed, setCollapsed] = useState(false)
    const handleCollapse = () => {
        console.log('clicked')
        setCollapsed(!collapsed)
    }
  return (
    <div className='app text-stone-100 flex h-[100%] gap-2'>
        {/* sideNav */}
        <div className={`bg-black ${collapsed ? 'transform w-[23%]' : 'transform w-[7%]'} transition-all ease-in-out duration-300 p-2 flex flex-col gap-5 sticky top-0 drop-shadow-lg`}>
            <button onClick={handleCollapse} className='pt-3 transition-all ease-in-out'>{collapsed ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} /> }</button>
            <SideNav collapsed={collapsed} setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn}/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <Header userEmail={currentUser?.email}/>
            <Outlet />
      </div>
    </div>
  )
}
