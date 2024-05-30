import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../Auth/firebase-config'

export const SignIn = ({ signinUser, message }) => {

    // const [ message, setMessage ] = useState(false)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()

    const googleSignIn = async() => {
        try{
            const res = await signInWithPopup(auth, googleProvider)
            if(res){
                navigate('/Home')
            }
            console.log(res)
            console.log('clicked')
        } catch (error) {
            console.log(error)
            // setMessage(true)
        }
        // const pop =  await signInWithPopup(auth, GoogleAuthProvider)
        // console.log(pop)
        console.log('clicked')
    }

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(7).max(20).required(),
    })

    const form = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const {register, handleSubmit, formState: { errors }} = form

    const onSubmit = (data) => {
        console.log('clicked')
        signinUser(data)
        console.log('the data is', data)
    }

    const onError = (errors) => {
        console.log('the error is', errors)
    }

  return (
    <div className='main flex justify-center align-auto h-[100vh] pt-20 pb-20 pr-20 pl-20'>
        <div className='welcome-div flex justify-center align-center w-[60%] border border-black rounded-l-lg bg-black p-[30px]'>
            <div className='logo px-6'>
                <div className='flex justify-center items-center font-bold mt-40'>
                    <h1 className='bg-blue-900 rounded-md text-5xl font-medium px-1 mr-2'>A</h1>
                    <p className='transition-all ease-in-out duration-500 font-medium text-white text-5xl'>ACCATEX</p>
                </div>
            </div>
        </div>
        <div className='form-div w-[40%] rounded-r-lg bg-white p-[35px]'>
            {/* error text for invalid email and password */}
            <p className='text-red-800'>{message && 'Invalid Email or Username'}</p>
            <form
                onSubmit={handleSubmit(onSubmit, onError)} 
                className='w-[100%] mx-auto bg-white flex justify-center'
            >
                <div className='w-[100%]'>
                    <p className='welcome-2 hidden'>Welcome back!</p>
                    <h1 className='sign-in font-light text-3xl mb-[20px] mt-[80px]'>Sign In</h1>
                    <div className='flex flex-col'>
                        {/* <label>Email</label> */}
                        <input 
                            type='text'
                            placeholder='email'
                            {...register('email')}
                            className='border-b border-gray-400 outline-none text-sm mb-[15px] py-2'
                        /> 
                        {/* error text on empty input fields when you click */}
                        <p className='text-red-800 text-[12px] bg-black rounded'>{errors?.email?.message}</p>
                    </div>
                    <div className='flex flex-col'>
                        {/* <label>Password</label> */}
                        <input 
                            type='password'
                            placeholder='password'
                            {...register('password')}
                            className='border-b border-gray-400 outline-none text-sm mb-[30px] py-2'
                        /> 
                        {/* error text on empty input fields when you click */}
                        <p className='text-red-800 text-[12px] bg-black rounded'>{errors?.password?.message}</p>
                    </div>
                    <div className='flex flex-col'>
                        <button type='submit' className='bg-black text-white text-sm rounded-full mb-[20px] pt-[5px] pb-[5px] pr-[7px] pl-[7px] hover:bg-slate-700 duration-300 transition-all ease-in-out'>sign in</button>
                        <button><Link to='/forgotPassword'>Forgot Password</Link></button>
                        <button><Link to='/SignUp' className='text-sm text-slate-500 hover:underline'>Dont have an account</Link></button>
                        <button 
                            onClick={googleSignIn}
                            className='bg-black w-full text-white text-sm rounded-full mb-[20px] pt-[5px] pb-[5px] pr-[7px] pl-[7px] hover:bg-slate-700 duration-300 transition-all ease-in-out'><FontAwesomeIcon icon={faGoogle}/> Sign In With Google
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
