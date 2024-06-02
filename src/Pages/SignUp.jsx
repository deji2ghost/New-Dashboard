import React from 'react'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// import * as yup from 'yup'

export const SignUp = ({ registerUser }) => {

    const form = useForm()

    const { register, handleSubmit, formState } = form

    const onSubmit = (data) => {
        console.log('clicked', data)
        registerUser(data)
        console.log('the data is', data)
    }

    const { errors } = formState

    // const schema = yup.object().shape({
    //     email: yup.string().required(),
    //     password: yup.string().min(7).max(20).required(),
    //     confirmPassword: yup.string().oneOf([yup.ref('password')]).required(),
    // })

    // const form = useForm({
    //     resolver: yupResolver(schema),
    //     mode: 'onChange'
    // })

    // const {register, handleSubmit} = form

    // const onSubmit = (data) => {
    //     console.log('clicked')
    //     registerUser(data)
    //     console.log('the data is', data)
    // }

    // const onError = (errors) => {
    //     console.log('the error is', errors)
    // }

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
        <div className='form-div flex w-[40%] rounded-r-lg bg-white p-[35px]'>
            {/* main form tag starts here */}
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                noValidate 
                className='w-[100%] mx-auto bg-white flex justify-center'
            >
                {/* input fields container */}
                <div className='w-[100%]'>
                    {/* create your account heading atop form (on mobile view only, hidden on desktop) */}
                    <p className='welcome-2 hidden'>Create your account</p>

                    {/* sign up heading atop form */}
                    <h1 className='sign-in font-light text-3xl mb-[20px] mt-[40px]'>Sign Up</h1>

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
                            placeholder='email'
                            className='border-b border-gray-400 outline-none text-sm mb-[15px]  py-2'
                        /> 
                        <p className='errors text-red-800 text-xs rounded'>{errors.email?.message}</p>
                    </div>

                    {/* password input field container */}
                    <div className='flex flex-col'>
                        <input 
                            type='password'
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
                            placeholder='password'
                            className='border-b border-gray-400 outline-none text-sm mb-[15px]  py-2'
                        /> 
                        <p className='errors text-red-800 text-xs rounded'>{errors.password?.message}</p>
                    </div>

                    {/* confirm password input field container */}
                    <div className='flex flex-col'>
                        <input 
                            type='password'
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
                            placeholder='confirm password'
                            className='border-b border-gray-400 outline-none text-sm mb-[15px]  py-2'
                        /> 
                        <p className='errors text-red-800 text-xs rounded'>{errors.password?.message}</p>
                    </div>

                    {/* sign up button container */}
                    <div className='flex flex-col mt-[15px]'>
                        <button type='submit' className='bg-black text-white text-sm rounded-full mb-[20px] pt-[5px] pb-[5px] pr-[7px] pl-[7px] hover:bg-slate-700 duration-300 transition-all ease-in-out'>sign up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
