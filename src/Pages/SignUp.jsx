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
    <form 
        onSubmit={handleSubmit(onSubmit, onError)} 
        className='w-[20%] mx-auto bg-white flex flex-col gap-3 p-3 justify-center items-center'
    >
        <h1>Sign Up</h1>
        <div className='flex flex-col w-[50%]'>
            <label>Email</label>
            <input 
                type='text'
                placeholder='enter your email here'
                {...register('email')}
                className='border-b outline-none px-5 py-1'
            /> 
        </div>
        <div className='flex flex-col w-[50%]'>
            <label>Password</label>
            <input 
                type='text'
                placeholder='enter your password here'
                {...register('password')}
                className='border-b outline-none px-5 py-1'
            /> 
        </div>
        <div className='flex flex-col w-[50%]'>
            <label>Confirm Password</label>
            <input 
                type='text'
                placeholder='confirm your password here'
                {...register('confirmPassword')}
                className='border-b outline-none px-5 py-1'
            /> 
        </div>
        <button type='submit' className='bg-purple-600 rounded-md p-3 w-[20%]'>Sign Up</button>
    </form>
  )
}
