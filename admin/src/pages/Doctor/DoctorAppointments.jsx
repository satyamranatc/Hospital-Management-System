import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { CheckCircle, XCircle, Calendar, Clock, User, CreditCard, DollarSign } from 'lucide-react'

const DoctorAppointments = () => {

    const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getAppointments()
        }
    }, [dToken])

    return (
        <div className='w-full max-w-7xl mx-auto p-6'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-800 mb-2'>All Appointments</h1>
                <p className='text-gray-600'>Manage and track your patient appointments</p>
            </div>

            <div className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden'>
                {/* Desktop Header */}
                <div className='hidden md:grid grid-cols-[0.5fr_2.5fr_1fr_1fr_2fr_1fr_1.5fr] gap-4 px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200'>
                    <p className='text-sm font-semibold text-gray-700'>#</p>
                    <p className='text-sm font-semibold text-gray-700'>Patient</p>
                    <p className='text-sm font-semibold text-gray-700'>Payment</p>
                    <p className='text-sm font-semibold text-gray-700'>Age</p>
                    <p className='text-sm font-semibold text-gray-700'>Date & Time</p>
                    <p className='text-sm font-semibold text-gray-700'>Fees</p>
                    <p className='text-sm font-semibold text-gray-700'>Actions</p>
                </div>

                {/* Appointments List */}
                <div className='max-h-[calc(100vh-280px)] overflow-y-auto'>
                    {appointments.length === 0 ? (
                        <div className='flex flex-col items-center justify-center py-16 text-gray-500'>
                            <Calendar className='w-16 h-16 mb-4 text-gray-300' />
                            <p className='text-lg font-medium'>No appointments found</p>
                            <p className='text-sm'>Your appointments will appear here</p>
                        </div>
                    ) : (
                        appointments.reverse().map((item, index) => (
                            <div 
                                className='grid md:grid-cols-[0.5fr_2.5fr_1fr_1fr_2fr_1fr_1.5fr] gap-4 px-6 py-5 border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-200 items-center' 
                                key={index}
                            >
                                {/* Index */}
                                <p className='hidden md:block text-gray-600 font-medium'>{index + 1}</p>

                                {/* Patient Info */}
                                <div className='flex items-center gap-3'>
                                    <div className='relative'>
                                        <img 
                                            className='w-12 h-12 rounded-full object-cover border-2 border-blue-100 shadow-sm' 
                                            src={
                                                item.userData.image
                                                    ? item.userData.image
                                                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                                            } 
                                            alt={item.userData.name} 
                                        />
                                        <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white'></div>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-gray-800'>{item.userData.name}</p>
                                        <p className='text-xs text-gray-500 flex items-center gap-1 md:hidden'>
                                            <User className='w-3 h-3' />
                                            Age: {calculateAge(item.userData.dob)}
                                        </p>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div>
                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                                        item.payment 
                                            ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                                            : 'bg-green-100 text-green-700 border border-green-200'
                                    }`}>
                                        <CreditCard className='w-3 h-3' />
                                        {item.payment ? 'Online' : 'Cash'}
                                    </span>
                                </div>

                                {/* Age */}
                                <p className='hidden md:block text-gray-700 font-medium'>{calculateAge(item.userData.dob)} yrs</p>

                                {/* Date & Time */}
                                <div className='flex flex-col gap-1'>
                                    <p className='text-sm text-gray-800 font-medium flex items-center gap-1'>
                                        <Calendar className='w-3.5 h-3.5 text-gray-500' />
                                        {slotDateFormat(item.slotDate)}
                                    </p>
                                    <p className='text-xs text-gray-600 flex items-center gap-1 ml-4'>
                                        <Clock className='w-3 h-3' />
                                        {item.slotTime}
                                    </p>
                                </div>

                                {/* Fees */}
                                <div className='flex items-center gap-1 text-gray-800 font-semibold'>
                                    <DollarSign className='w-4 h-4 text-gray-600' />
                                    <span>{currency}{item.amount}</span>
                                </div>

                                {/* Actions */}
                                <div className='flex items-center justify-start md:justify-center gap-2'>
                                    {item.cancelled ? (
                                        <span className='inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded-lg border border-red-200'>
                                            <XCircle className='w-4 h-4' />
                                            Cancelled
                                        </span>
                                    ) : item.isCompleted ? (
                                        <span className='inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 text-xs font-semibold rounded-lg border border-green-200'>
                                            <CheckCircle className='w-4 h-4' />
                                            Completed
                                        </span>
                                    ) : (
                                        <div className='flex gap-2'>
                                            <button
                                                onClick={() => cancelAppointment(item._id)}
                                                className='p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors duration-200 border border-red-200 hover:border-red-300'
                                                title='Cancel Appointment'
                                            >
                                                <XCircle className='w-5 h-5' />
                                            </button>
                                            <button
                                                onClick={() => completeAppointment(item._id)}
                                                className='p-2 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-colors duration-200 border border-green-200 hover:border-green-300'
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

            {/* Footer Summary */}
            {appointments.length > 0 && (
                <div className='mt-4 flex justify-between items-center text-sm text-gray-600 px-2'>
                    <p>Showing <span className='font-semibold text-gray-800'>{appointments.length}</span> appointments</p>
                </div>
            )}
        </div>
    )
}

export default DoctorAppointments