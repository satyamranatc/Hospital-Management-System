import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='py-16 px-4 sm:px-[10%] bg-gradient-to-b from-white to-blue-50'>
            {/* Header */}
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold text-gray-800 mb-3'>Top Doctors to Book</h1>
                <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                    Simply browse through our extensive list of trusted doctors.
                </p>
            </div>

            {/* Doctors Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div 
                        key={index}
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                        className='bg-white border-2 border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-teal-300'
                    >
                        <img 
                            className='w-full h-48 object-cover bg-gradient-to-br from-blue-50 to-teal-50' 
                            src={item.image} 
                            alt={item.name} 
                        />
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm mb-2 ${item.available ? 'text-green-600' : 'text-gray-500'}`}>
                                <div className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-400'} rounded-full`}></div>
                                <span className='font-medium'>{item.available ? 'Available' : 'Not Available'}</span>
                            </div>
                            <h3 className='text-gray-900 text-lg font-semibold mb-1'>{item.name}</h3>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className='text-center'>
                <button 
                    onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
                    className='bg-gradient-to-r from-blue-600 to-teal-600 text-white px-12 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                    View More Doctors
                </button>
            </div>
        </div>
    )
}

export default TopDoctors