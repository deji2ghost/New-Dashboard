import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export const SignUp = ({ registerUser }) => {

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(7).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password')]).required(),
    })

    const form = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const {register, handleSubmit} = form

    const onSubmit = (data) => {
        console.log('clicked')
        registerUser(data)
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
                    <h1 className='bg-blue-900 rounded-lg text-5xl font-medium px-1 mr-2'>A</h1>
                    <p className='transition-all ease-in-out duration-500 font-medium text-white text-5xl'>ACCATEX</p>
                </div>
            </div>
        </div>
        <div className='form-div flex w-[40%] rounded-r-lg bg-white p-[35px]'>
            <form 
                onSubmit={handleSubmit(onSubmit, onError)} 
                className='w-[100%] mx-auto bg-white flex justify-center'
            >
                <div className='w-[100%]'>
                <p className='welcome-2 hidden'>Create your account</p>
                    <h1 className='sign-in font-light text-3xl mb-[20px] mt-[80px]'>Sign Up</h1>
                    <div className='flex flex-col'>
                        <input 
                            type='text'
                            placeholder='email'
                            {...register('email')}
                            className='border-b border-gray-400 outline-none text-sm mb-[15px]  py-2'
                        /> 
                    </div>
                    <div className='flex flex-col'>
                        <input 
                            type='text'
                            placeholder='password'
                            {...register('password')}
                            className='border-b border-gray-400 outline-none text-sm mb-[15px]  py-2'
                        /> 
                    </div>
                    <div className='flex flex-col'>
                        <input 
                            type='text'
                            placeholder='confirm password'
                            {...register('confirmPassword')}
                            className='border-b border-gray-400 outline-none text-sm mb-[30px]  py-2'
                        /> 
                    </div>
                    <div className='flex flex-col'>
                        <button type='submit' className='bg-black text-white text-sm rounded-full mb-[20px] pt-[5px] pb-[5px] pr-[7px] pl-[7px] hover:bg-slate-700 duration-300 transition-all ease-in-out'>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
