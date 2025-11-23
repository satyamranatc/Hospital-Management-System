import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [state, setState] = useState('Sign Up')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const { backendUrl, token, setToken } = useContext(AppContext)

    const navigate = useNavigate()

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {

            if (state === 'Sign Up') {

                const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                } else {
                    toast.error(data.message)
                }

            } else {

                const { data } = await axios.post(backendUrl + '/api/user/login', { password, email })
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                } else {
                    toast.error(data.message)
                }

            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center mx-4 sm:mx-[10%] justify-center'>
            <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-100 rounded-2xl text-zinc-600 text-sm shadow-2xl bg-white'>
                <p className='text-3xl font-bold text-gray-800'>{state === 'Sign Up' ? "Create Account" : "Welcome Back"}</p>
                <p className='text-gray-500 mb-4'>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
                {
                    state === "Sign Up" && <div className='w-full'>
                        <p className='font-medium mb-1'>Full Name</p>
                        <input className='border border-gray-300 rounded-lg w-full p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
                    </div>
                }

                <div className='w-full'>
                    <p className='font-medium mb-1'>Email</p>
                    <input className='border border-gray-300 rounded-lg w-full p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className='w-full'>
                    <p className='font-medium mb-1'>Password</p>
                    <input className='border border-gray-300 rounded-lg w-full p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                </div>
                <button type='submit' className='bg-primary text-white w-full py-3 rounded-lg font-semibold text-base hover:bg-primary-hover transition-all shadow-md hover:shadow-lg mt-2'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
                {
                    state === "Sign Up"
                        ? <p className='text-center w-full mt-2'>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer font-medium'>Login here</span></p>
                        : <p className='text-center w-full mt-2'>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer font-medium'>click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login
