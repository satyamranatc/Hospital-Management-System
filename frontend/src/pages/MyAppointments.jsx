import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyAppointments = () => {

    const { backendUrl, token, getDoctorsData } = useContext(AppContext)

    const [appointments, setAppointments] = useState([])

    const getUserAppointments = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

            if (data.success) {
                setAppointments(data.appointments.reverse())
                console.log(data.appointments)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
                getDoctorsData()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            getUserAppointments()
        }
    }, [token])

    return (
        <div className='mx-4 sm:mx-[10%]'>
            <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
            <div>
                {appointments.map((item, index) => (
                    <div className='group grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b border-zinc-200' key={index}>
                        <div>
                            <img className='w-32 bg-indigo-50 rounded-lg object-cover group-hover:scale-105 transition-all duration-300' src={item.docData.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-zinc-600'>
                            <p className='text-neutral-800 font-semibold text-lg'>{item.docData.name}</p>
                            <p className='text-zinc-600'>{item.docData.speciality}</p>
                            <p className='text-zinc-700 font-medium mt-2'>Address:</p>
                            <p className='text-xs text-zinc-500'>{item.docData.address.line1}</p>
                            <p className='text-xs text-zinc-500'>{item.docData.address.line2}</p>
                            <p className='text-xs mt-2'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> <span className='text-zinc-800'>{item.slotDate} |  {item.slotTime}</span></p>
                        </div>
                        <div></div>
                        <div className='flex flex-col gap-2 justify-end'>
                            {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2.5 border border-indigo-100 rounded-lg text-indigo-600 bg-indigo-50 font-medium shadow-sm'>Paid</button>}
                            {!item.cancelled && !item.payment && !item.isCompleted && <button disabled className='text-sm text-stone-500 text-center sm:min-w-48 py-2.5 border rounded-lg hover:bg-gray-100 hover:text-gray-600 transition-all duration-300'>Pay Online</button>}
                            {!item.cancelled && !item.isCompleted && <button onClick={() => cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2.5 border rounded-lg hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md'>Cancel appointment</button>}
                            {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2.5 border border-red-500 rounded-lg text-red-500 font-medium bg-red-50'>Appointment cancelled</button>}
                            {item.isCompleted && <button className='sm:min-w-48 py-2.5 border border-green-500 rounded-lg text-green-600 bg-green-50 font-medium'>Completed</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments
