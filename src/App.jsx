import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Auth/firebase-config'
import { SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';
import { OrderHistory } from './Pages/OrderHistory';
import { Customers } from './Pages/Customers';
import { ExpenseStatement } from './Pages/ExpenseStatement';
import { ForgotPassword } from './Pages/ForgotPassword';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {

  const [ currentUser, setCurrentUser ] = useState(null)
  const [ userLoggedIn, setUserLoggedIn ] = useState(false)
  const [ message, setMessage ] = useState(false)
  const [ currentDate, setCurrentDate ] = useState(new Date())
  const [ weekly, setWeekly ] = useState(false)
  const [ showCalendar, setShowCalendar ] = useState(false)

  const navigate = useNavigate()

  // User Auth State Change for Firebase 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe
  }, [])

  const initializeUser = async(user) => {
    if(user){
      console.log(user)
      setCurrentUser({...user})
      setUserLoggedIn(true)
      console.log(currentUser)
    }else{
      setCurrentUser(null)
      setUserLoggedIn(false)
    }
  }

  // Register user Function
  const registerUser = async(data) => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      navigate('/')
      console.log(userData)
    } catch (error) {
      console.log(error.message)
    }
  }

  // Sign in User Function
  const signinUser = async(data) => {
    try {
      const loginData = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      console.log(loginData.user.email)
      setMessage(false)
      
      if(loginData){
        console.log('logged')
        navigate('/Home/Dashboard')
      }else{
        console.log('error')
      }
    } catch (err) {
      console.error(err.message)
      setMessage(true)
    }
  }

  return (
    <div>
      <Routes>
        <Route index element={<SignIn signinUser={signinUser} message={message}/>}/>
        <Route path='SignUp' element={<SignUp registerUser={registerUser} />} />
        <Route path='forgotPassword' element={<ForgotPassword />} />
        <Route path='Home' element={<Home currentUser={currentUser} setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn} currentDate={currentDate}/>}>
          {/* <Route index element={<Dashboard showCalendar={showCalendar} setShowCalendar={setShowCalendar} currentDate={currentDate} weekly={weekly} setWeekly={setWeekly}/>} /> */}
          <Route path='Dashboard' element={<Dashboard showCalendar={showCalendar} setShowCalendar={setShowCalendar} currentDate={currentDate} weekly={weekly} setWeekly={setWeekly}/>} />
          <Route path='OrderHistory' element={<OrderHistory showCalendar={showCalendar} setShowCalendar={setShowCalendar} currentDate={currentDate} weekly={weekly} setWeekly={setWeekly}/>}/>
          <Route path='Customers' element={<Customers showCalendar={showCalendar} setShowCalendar={setShowCalendar} currentDate={currentDate} weekly={weekly} setWeekly={setWeekly}/>} />
          <Route path='ExpenseStatement' element={<ExpenseStatement showCalendar={showCalendar} setShowCalendar={setShowCalendar} currentDate={currentDate} weekly={weekly} setWeekly={setWeekly}/>} />
        </Route>
      </Routes>

      {/* Modal for the Calendar Pop Up */}
      <div className={`fixed ${ showCalendar ? 'visible' : 'hidden'} top-0 w-full h-screen bg-gray-300 bg-opacity-10`}>
        <div className='react-calendar absolute top-[160px] left-0 right-0 mx-auto bg-green-700 border-none'>
          <Calendar value={currentDate} onChange={setCurrentDate} selectRange={weekly} defaultView='month' />
          <button onClick={() => setShowCalendar(false)} className='bg-[#6f48eb] w-full p-3 rounded-b-[8px]'>Set Date</button>
        </div>
      </div>
    </div>
  )
}

export default App
