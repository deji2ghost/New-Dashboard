import React, { useState } from 'react'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../Auth/firebase-config'
import './SignIn.css'

export const SignIn = ({ signinUser, message }) => {

    // const [ message, setMessage ] = useState(false)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()

    const googleSignIn = async() => {
        try{
            const res = await signInWithPopup(auth, googleProvider)
            if(res){
                navigate('/Home/Dashboard')
            }
            console.log(res)
            console.log('clicked')
        } catch (error) {
            console.log(error)        }
        console.log('clicked')
    }

    const form = useForm()

    const { register, handleSubmit, formState } = form

    const onSubmit = (data) => {
        console.log("Form has been submitted!", data)
        signinUser(data)
        console.log('the data is', data)
    }

    const { errors } = formState

  return (
    <div className='main flex justify-center align-auto h-[100vh] pt-20 pb-20 pr-20 pl-20'>
        {/* ACCATEX logo, left of landing page */}
        <div className='welcome-div flex justify-center align-center w-[60%] border border-black rounded-l-lg bg-black p-[30px]'>
            <div className='logo px-6'>
                <div className='flex justify-center items-center font-bold mt-40'>
                    <h1 className='bg-blue-900 rounded-md text-5xl font-medium px-1 mr-2'>A</h1>
                    <p className='transition-all ease-in-out duration-500 font-medium text-white text-5xl'>ACCATEX</p>
                </div>
            </div>
        </div>

        {/* form container */}
        <div className='form-div w-[40%] rounded-r-lg bg-white p-[35px]'>
            {/* main form tag starts here */}
            <form
                onSubmit={handleSubmit(onSubmit)} 
                noValidate
                className='w-[100%] mx-auto bg-white flex justify-center'
            >
                {/* input fields container */}
                <div className='w-[100%]'>
                    {/* welcome back! heading atop form (on mobile view only, hidden on desktop) */}
                    <p className='welcome-2 hidden'>Welcome back!</p>

                    {/* sign in heading atop form */}
                    <h1 className='sign-in font-light text-3xl mb-[20px] mt-[40px]'>Sign In</h1>

                    {/* email input field container */}
                    <div className='flex flex-col'>
                        <input 
                            type='email'
                            id='email'
                            {...register('email', {
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "invalid email format*"
                                },
                                required: {
                                    value: "true",
                                    message: "this is a required field*"
                                },
                                validate: (fieldValue) => !fieldValue.endsWith("baddomain.com") || "this domain is not supported"
                            })}
                            className='border-b border-gray-400 outline-none text-sm mb-[15px] py-2'
                            placeholder='email'
                        /> 
                        {/* error messages */}
                        <p className='errors text-red-800 text-xs rounded'>{errors.email?.message}</p>
                    </div>

                    {/* password input field container */}
                    <div className='flex flex-col'>
                        <input 
                            type="password"
                            id="password"
                            {...register("password", {
                                required: {
                                    value: "true",
                                    message: "this is a required field*"
                                },
                                minLength: {
                                    value: 8,
                                    message: "password must be at least 8 characters*"
                                }
                            })}
                            className='border-b border-gray-400 outline-none text-sm mb-[15px] py-2'
                            placeholder='password'
                        /> 
                        {/* error messages */}
                        <p className='errors text-red-800 text-xs rounded'>{errors.password?.message}</p>
                    </div>

                    {/* sign in buttons, reset password & sign up link container */}
                    <div className='flex flex-col mt-[15px]'>
                        <button type='submit' className='bg-black text-white text-sm rounded-full mb-[20px] pt-[5px] pb-[5px] pr-[7px] pl-[7px] hover:bg-slate-700 duration-300 transition-all ease-in-out'>sign in</button>
                        <button 
                            onClick={googleSignIn}
                            className='bg-black w-full text-white text-sm rounded-full mb-[20px] pt-[5px] pb-[5px] pr-[7px] pl-[7px] hover:bg-slate-700 duration-300 transition-all ease-in-out'
                        >
                            <FontAwesomeIcon icon={faGoogle}/>  sign in with Google
                        </button>
                        <button><Link to='/forgotPassword' className='text-sm text-slate-500 hover:underline'>Forgot password?</Link></button>
                        <button><Link to='/SignUp' className='text-sm text-slate-500 hover:underline'>Dont have an account</Link></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
