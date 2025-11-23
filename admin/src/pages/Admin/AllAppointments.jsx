import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { X } from 'lucide-react'

const AllAppointments = () => {

    const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

    useEffect(() => {
        if (aToken) {
            getAllAppointments()
        }
    }, [aToken])

    return (
        <div className='w-full max-w-6xl m-5'>
            <p className='mb-3 text-lg font-medium'>All Appointments</p>
            <div className='bg-white border border-gray-100 rounded-2xl shadow-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
                <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-4 px-6 border-b border-gray-200 bg-gray-50/50 text-gray-700 font-semibold'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Doctor</p>
                    <p>Fees</p>
                    <p>Actions</p>
                </div>
                {
                    appointments.map((item, index) => (
                        <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors' key={index}>
                            <p className='max-sm:hidden'>{index + 1}</p>
                            <div className='flex items-center gap-2'>
                                <img className='w-10 h-10 rounded-full object-cover bg-gray-100' src={item.userData.image} alt="" /> <p className='font-medium text-gray-800'>{item.userData.name}</p>
                            </div>
                            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
                            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
                            <div className='flex items-center gap-2'>
                                <img className='w-10 h-10 rounded-full object-cover bg-gray-100' src={item.docData.image} alt="" /> <p className='font-medium text-gray-800'>{item.docData.name}</p>
                            </div>
                            <p>{currency}{item.amount}</p>
                            {
                                item.cancelled
                                    ? <p className='text-red-500 text-xs font-semibold bg-red-50 px-3 py-1 rounded-full w-fit'>Cancelled</p>
                                    : item.isCompleted
                                        ? <p className='text-green-600 text-xs font-semibold bg-green-50 px-3 py-1 rounded-full w-fit'>Completed</p>
                                        : <X onClick={() => cancelAppointment(item._id)} className='w-8 h-8 cursor-pointer text-red-500 hover:text-red-600 transition-colors bg-red-50 rounded-full p-1' />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllAppointments
