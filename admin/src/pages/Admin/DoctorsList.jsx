import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

    const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext)

    useEffect(() => {
        if (aToken) {
            getAllDoctors()
        }
    }, [aToken])

    return (
        <div className='m-5 max-h-[90vh] w-full overflow-y-scroll'>
            <h1 className='text-lg font-medium'>All Doctors</h1>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5'>
                {
                    doctors.map((item, index) => (
                        <div className='border border-gray-100 rounded-2xl overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 bg-white shadow-sm' key={index}>
                            <img className='bg-indigo-50 w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500' src={item.image} alt="" />
                            <div className='p-5'>
                                <p className='text-neutral-800 text-xl font-semibold'>{item.name}</p>
                                <p className='text-zinc-600 text-sm mt-1'>{item.speciality}</p>
                                <div className='mt-4 flex items-center gap-2 text-sm'>
                                    <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} className='w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer' />
                                    <p className={`${item.available ? 'text-green-500' : 'text-gray-500'} font-medium`}>Available</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DoctorsList
