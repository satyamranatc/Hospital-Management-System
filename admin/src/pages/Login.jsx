import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'

const Login = () => {

    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendUrl } = useContext(AdminContext)
    const { setDToken } = useContext(DoctorContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {

            if (state === 'Admin') {

                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                } else {
                    toast.error(data.message)
                }

            } else {

                const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
                if (data.success) {
                    localStorage.setItem('dToken', data.token)
                    setDToken(data.token)
                } else {
                    toast.error(data.message)
                }

            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center'>
            <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-100 rounded-2xl bg-white shadow-2xl text-[#5E5E5E] text-sm'>
                <p className='text-3xl font-bold m-auto text-gray-800'><span className='text-primary'>{state}</span> Login</p>
                <div className='w-full'>
                    <p className='font-medium mb-1'>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-300 rounded-lg w-full p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all' type="email" required />
                </div>
                <div className='w-full'>
                    <p className='font-medium mb-1'>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-300 rounded-lg w-full p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all' type="password" required />
                </div>
                <button className='bg-primary text-white w-full py-3 rounded-lg font-semibold text-base hover:bg-primary-hover shadow-md hover:shadow-lg transition-all mt-2'>Login</button>
                {
                    state === 'Admin'
                        ? <p className='text-center w-full mt-2'>Doctor Login? <span className='text-primary underline cursor-pointer font-medium' onClick={() => setState('Doctor')}>Click here</span></p>
                        : <p className='text-center w-full mt-2'>Admin Login? <span className='text-primary underline cursor-pointer font-medium' onClick={() => setState('Admin')}>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login
