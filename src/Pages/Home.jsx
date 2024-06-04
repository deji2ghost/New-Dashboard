import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SideNav } from '../Components/SideNav';
import { Header } from '../Components/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Auth/firebase-config';

export const Home = ({ currentUser, setUserLoggedIn, userLoggedIn }) => {

  const [ showModal, setShowModal ] = useState(false)
  const navigate = useNavigate()

  const handleModal = () => {
    console.log('clicked')
    setShowModal(!showModal)
  }

  const logOutUser = async() => {
    await signOut(auth)
        // setUserLoggedIn(!userLoggedIn)
    console.log('clicked')
    navigate('/')
  }

  const [collapsed, setCollapsed] = useState(false)
  const handleCollapse = () => {
    console.log('clicked')
    setCollapsed(!collapsed)
  }

  return (
    <div className='app text-stone-100 flex h-[100%] gap-2'>
        {/* sideNav */}
        <div className={`bg-black ${collapsed ? 'transform w-[23%]' : 'transform w-[7%]'} transition-all ease-in-out duration-300 p-2 flex flex-col gap-5 sticky h-screen top-0 drop-shadow-lg`}>
            <button onClick={handleCollapse} className='pt-3 transition-all ease-in-out'>{collapsed ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} /> }</button>
            <SideNav collapsed={collapsed} setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn} handleModal={handleModal}/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <Header userEmail={currentUser?.email}/>
            <Outlet />
      </div>

      <div onClick={() => setShowModal(!showModal)} className={`fixed ${ showModal ? 'visible' : 'hidden' } top-0 w-full h-screen bg-gray-300 bg-opacity-10`}>
        <div className={`${showModal ? 'visible' : 'hidden' } absolute bg-gray-900 p-4 right-0 left-0 mx-auto w-[40%] top-[250px]`}>
          <div className='flex items-center justify-center'>
            <h1 className='bg-blue-900 rounded-sm text-xl font-medium px-1 mr-1'>A</h1>
            <p className='text-base'>ACCATEX</p>
          </div>
          <p className='text-center'>Are you sure you want to log out</p>
          <div className='flex items-center justify-center gap-10'>
            <button onClick={() => setShowModal(!showModal)} className='bg-red-800 w-[20%] p-2'>No</button>
            <button onClick={logOutUser} className='bg-green-800 w-[20%] p-2'>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}