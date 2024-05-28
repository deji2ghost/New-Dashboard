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

function App() {

  const [ user, setUser ] = useState(null)
  const navigate = useNavigate()

  console.log(user)

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
      if(user){
        navigate('/Home')
      }else{
        console.log('you have to login')
      }
    } catch (error) {
      console.log(error.message)
    }
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)
    })
  }
  return (
    <div>
      <Routes>
        <Route index element={<SignIn signinUser={signinUser} />}/>
        <Route path='SignUp' element={<SignUp registerUser={registerUser} />} />
        <Route path='Home' element={<Home user={user}/>}>
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
