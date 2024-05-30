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

function App() {

  const [ currentUser, setCurrentUser ] = useState(null)
  const [ userLoggedIn, setUserLoggedIn ] = useState(false)
  const [ message, setMessage ] = useState(false)
  const navigate = useNavigate()
  console.log(userLoggedIn)

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
        navigate('/Home')
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
        <Route path='Home' element={<Home currentUser={currentUser} setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn}/>}>
          <Route index element={<Dashboard />}></Route>
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='OrderHistory' element={<OrderHistory />}/>
          <Route path='Customers' element={<Customers />}/>
          <Route path='ExpenseStatement' element={<ExpenseStatement />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
