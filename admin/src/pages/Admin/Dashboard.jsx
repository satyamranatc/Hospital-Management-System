import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { CheckCircle, XCircle, UserPlus, Calendar } from 'lucide-react'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

    const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
    const { slotDateFormat } = useContext(AppContext)

    useEffect(() => {
        if (aToken) {
            getDashData()
        }
    }, [aToken])

    return dashData && (
        <div className='m-5 w-full'>
            <div className='flex flex-wrap gap-3'>
                <div className='flex items-center gap-2 bg-white p-6 min-w-52 rounded-2xl border border-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm'>
                    <UserPlus className='w-14 h-14 text-primary bg-primary/10 p-3 rounded-full' />
                    <div>
                        <p className='text-2xl font-bold text-gray-700'>{dashData.doctors}</p>
                        <p className='text-gray-500 font-medium'>Doctors</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 bg-white p-6 min-w-52 rounded-2xl border border-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm'>
                    <Calendar className='w-14 h-14 text-primary bg-primary/10 p-3 rounded-full' />
                    <div>
                        <p className='text-2xl font-bold text-gray-700'>{dashData.appointments}</p>
                        <p className='text-gray-500 font-medium'>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 bg-white p-6 min-w-52 rounded-2xl border border-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm'>
                    <UserPlus className='w-14 h-14 text-primary bg-primary/10 p-3 rounded-full' />
                    <div>
                        <p className='text-2xl font-bold text-gray-700'>{dashData.patients}</p>
                        <p className='text-gray-500 font-medium'>Patients</p>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-100 shadow-sm mt-10'>
                <div className='flex items-center gap-2.5 px-6 py-4 rounded-t-2xl border-b border-gray-200 bg-gray-50/50'>
                    <Calendar className='w-6 text-primary' />
                    <p className='font-semibold text-lg text-gray-700'>Latest Bookings</p>
                </div>

                <div className='pt-0'>
                    {
                        dashData.latestAppointments.map((item, index) => (
                            <div className='flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition-colors border-b last:border-0' key={index}>
                                <img className='rounded-full w-12 h-12 object-cover bg-gray-100' src={item.docData.image} alt="" />
                                <div className='flex-1'>
                                    <p className='text-gray-800 font-semibold text-base'>{item.docData.name}</p>
                                    <p className='text-gray-500 text-sm'>{slotDateFormat(item.slotDate)}</p>
                                </div>
                                {
                                    item.cancelled
                                        ? <p className='text-red-500 text-xs font-semibold bg-red-50 px-3 py-1 rounded-full'>Cancelled</p>
                                        : item.isCompleted
                                            ? <p className='text-green-600 text-xs font-semibold bg-green-50 px-3 py-1 rounded-full'>Completed</p>
                                            : <XCircle onClick={() => cancelAppointment(item._id)} className='w-8 h-8 cursor-pointer text-red-500 hover:text-red-600 transition-colors' />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Dashboard
