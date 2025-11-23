import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { Calendar, CheckCircle, XCircle, DollarSign, User, TrendingUp, Clock } from 'lucide-react'

const DoctorDashboard = () => {

    const { dToken, dashData, setDashData, getDashData, completeAppointment, cancelAppointment } = useContext(DoctorContext)
    const { currency, slotDateFormat } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getDashData()
        }
    }, [dToken])

    return dashData && (
        <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-2'>Dashboard</h1>
                    <p className='text-gray-600'>Welcome back! Here's your practice overview</p>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                    {/* Earnings Card */}
                    <div className='bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <div className='flex items-center justify-between mb-4'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-xl p-3'>
                                <DollarSign className='w-8 h-8' />
                            </div>
                            <TrendingUp className='w-6 h-6 opacity-70' />
                        </div>
                        <div>
                            <p className='text-white/80 text-sm font-medium mb-1'>Total Earnings</p>
                            <p className='text-3xl font-bold'>{currency} {dashData.earnings}</p>
                        </div>
                        <div className='mt-4 pt-4 border-t border-white/20'>
                            <p className='text-xs text-white/70'>Revenue generated</p>
                        </div>
                    </div>

                    {/* Appointments Card */}
                    <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <div className='flex items-center justify-between mb-4'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-xl p-3'>
                                <Calendar className='w-8 h-8' />
                            </div>
                            <Clock className='w-6 h-6 opacity-70' />
                        </div>
                        <div>
                            <p className='text-white/80 text-sm font-medium mb-1'>Total Appointments</p>
                            <p className='text-3xl font-bold'>{dashData.appointments}</p>
                        </div>
                        <div className='mt-4 pt-4 border-t border-white/20'>
                            <p className='text-xs text-white/70'>Scheduled consultations</p>
                        </div>
                    </div>

                    {/* Patients Card */}
                    <div className='bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer'>
                        <div className='flex items-center justify-between mb-4'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-xl p-3'>
                                <User className='w-8 h-8' />
                            </div>
                            <TrendingUp className='w-6 h-6 opacity-70' />
                        </div>
                        <div>
                            <p className='text-white/80 text-sm font-medium mb-1'>Total Patients</p>
                            <p className='text-3xl font-bold'>{dashData.patients}</p>
                        </div>
                        <div className='mt-4 pt-4 border-t border-white/20'>
                            <p className='text-xs text-white/70'>Unique patients served</p>
                        </div>
                    </div>
                </div>

                {/* Latest Bookings Section */}
                <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200'>
                    {/* Header */}
                    <div className='bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-lg p-2'>
                                <Calendar className='w-6 h-6 text-white' />
                            </div>
                            <div>
                                <h2 className='text-xl font-bold text-white'>Latest Bookings</h2>
                                <p className='text-blue-100 text-sm'>Recent appointment requests</p>
                            </div>
                        </div>
                    </div>

                    {/* Bookings List */}
                    <div className='divide-y divide-gray-100'>
                        {dashData.latestAppointments.length === 0 ? (
                            <div className='flex flex-col items-center justify-center py-12 text-gray-500'>
                                <Calendar className='w-16 h-16 mb-4 text-gray-300' />
                                <p className='text-lg font-medium'>No appointments yet</p>
                                <p className='text-sm'>New bookings will appear here</p>
                            </div>
                        ) : (
                            dashData.latestAppointments.map((item, index) => (
                                <div 
                                    className='flex items-center px-6 py-4 hover:bg-blue-50 transition-colors duration-200 group' 
                                    key={index}
                                >
                                    {/* Patient Avatar */}
                                    <div className='relative mr-4'>
                                        <img 
                                            className='w-14 h-14 rounded-full object-cover border-2 border-blue-100 shadow-sm' 
                                            src={
                                                item.userData.image
                                                    ? item.userData.image
                                                    : 'https://placehold.co/600x600'
                                            } 
                                            alt={item.userData.name} 
                                        />
                                        <div className='absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white'></div>
                                    </div>

                                    {/* Patient Info */}
                                    <div className='flex-1 min-w-0'>
                                        <p className='text-gray-800 font-semibold text-base mb-1 truncate'>
                                            {item.userData.name}
                                        </p>
                                        <div className='flex items-center gap-2 text-sm text-gray-600'>
                                            <Clock className='w-4 h-4' />
                                            <span>{slotDateFormat(item.slotDate)}</span>
                                        </div>
                                    </div>

                                    {/* Status/Actions */}
                                    <div className='ml-4'>
                                        {item.cancelled ? (
                                            <span className='inline-flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 text-sm font-semibold rounded-xl border border-red-200'>
                                                <XCircle className='w-4 h-4' />
                                                Cancelled
                                            </span>
                                        ) : item.isCompleted ? (
                                            <span className='inline-flex items-center gap-1.5 px-4 py-2 bg-green-50 text-green-600 text-sm font-semibold rounded-xl border border-green-200'>
                                                <CheckCircle className='w-4 h-4' />
                                                Completed
                                            </span>
                                        ) : (
                                            <div className='flex gap-2'>
                                                <button
                                                    onClick={() => cancelAppointment(item._id)}
                                                    className='p-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-all duration-200 border border-red-200 hover:border-red-300 hover:shadow-md'
                                                    title='Cancel Appointment'
                                                >
                                                    <XCircle className='w-5 h-5' />
                                                </button>
                                                <button
                                                    onClick={() => completeAppointment(item._id)}
                                                    className='p-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-600 transition-all duration-200 border border-green-200 hover:border-green-300 hover:shadow-md'
                                                    title='Complete Appointment'
                                                >
                                                    <CheckCircle className='w-5 h-5' />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Quick Stats Footer */}
                {dashData.latestAppointments.length > 0 && (
                    <div className='mt-4 text-center text-sm text-gray-600'>
                        <p>Showing {dashData.latestAppointments.length} most recent appointments</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DoctorDashboard