import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Filter, Stethoscope, Award, Clock, MapPin, ChevronRight, User, Heart, Sparkles, Baby, Brain, Activity } from 'lucide-react'

const Doctors = () => {

    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    const specialties = [
        { name: 'General physician', icon: Stethoscope, color: 'from-blue-500 to-cyan-500' },
        { name: 'Gynecologist', icon: Heart, color: 'from-pink-500 to-rose-500' },
        { name: 'Dermatologist', icon: Sparkles, color: 'from-purple-500 to-indigo-500' },
        { name: 'Pediatricians', icon: Baby, color: 'from-yellow-500 to-orange-500' },
        { name: 'Neurologist', icon: Brain, color: 'from-teal-500 to-emerald-500' },
        { name: 'Gastroenterologist', icon: Activity, color: 'from-green-500 to-lime-500' }
    ];

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        } else {
            setFilterDoc(doctors)
        }
    }

    useEffect(() => {
        applyFilter();
    }, [doctors, speciality])

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-3'>Find Your Doctor</h1>
                    <p className='text-gray-600 text-lg flex items-center gap-2'>
                        <Stethoscope className='w-5 h-5 text-teal-600' />
                        Browse through our specialist doctors and book your appointment
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Filters Sidebar */}
                    <div className='lg:w-72 flex-shrink-0'>
                        {/* Mobile Filter Toggle */}
                        <button 
                            className={`w-full lg:hidden flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all mb-4 ${
                                showFilter 
                                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg' 
                                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-300'
                            }`} 
                            onClick={() => setShowFilter(prev => !prev)}
                        >
                            <Filter className='w-5 h-5' />
                            {showFilter ? 'Hide Filters' : 'Show Filters'}
                        </button>

                        {/* Filter Panel */}
                        <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden ${showFilter ? 'block' : 'hidden lg:block'}`}>
                            <div className='bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-4'>
                                <h3 className='text-white font-bold text-lg flex items-center gap-2'>
                                    <Filter className='w-5 h-5' />
                                    Specialties
                                </h3>
                                <p className='text-blue-100 text-sm'>Select a specialty to filter</p>
                            </div>
                            
                            <div className='p-4 space-y-2'>
                                {/* All Doctors Option */}
                                <div
                                    onClick={() => navigate('/doctors')}
                                    className={`group flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
                                        !speciality 
                                            ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md' 
                                            : 'bg-gray-50 hover:bg-blue-50 border border-gray-200'
                                    }`}
                                >
                                    <div className='flex items-center gap-3'>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                            !speciality ? 'bg-white/20' : 'bg-white'
                                        }`}>
                                            <User className={`w-5 h-5 ${!speciality ? 'text-white' : 'text-gray-600'}`} />
                                        </div>
                                        <span className='font-medium'>All Doctors</span>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 ${!speciality ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`} />
                                </div>

                                {/* Specialty Options */}
                                {specialties.map((spec) => {
                                    const IconComponent = spec.icon;
                                    return (
                                        <div
                                            key={spec.name}
                                            onClick={() => speciality === spec.name ? navigate('/doctors') : navigate(`/doctors/${spec.name}`)}
                                            className={`group flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
                                                speciality === spec.name 
                                                    ? `bg-gradient-to-r ${spec.color} text-white shadow-md` 
                                                    : 'bg-gray-50 hover:bg-blue-50 border border-gray-200'
                                            }`}
                                        >
                                            <div className='flex items-center gap-3'>
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                    speciality === spec.name ? 'bg-white/20' : 'bg-white'
                                                }`}>
                                                    <IconComponent className={`w-5 h-5 ${speciality === spec.name ? 'text-white' : 'text-gray-600'}`} />
                                                </div>
                                                <span className='font-medium'>{spec.name}</span>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 ${speciality === spec.name ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Doctors Grid */}
                    <div className='flex-1'>
                        {filterDoc.length === 0 ? (
                            <div className='flex flex-col items-center justify-center py-20 text-gray-500'>
                                <Stethoscope className='w-20 h-20 mb-4 text-gray-300' />
                                <p className='text-xl font-medium'>No doctors found</p>
                                <p className='text-sm'>Try selecting a different specialty</p>
                            </div>
                        ) : (
                            <>
                                {/* Results Count */}
                                <div className='mb-6'>
                                    <p className='text-gray-600'>
                                        Showing <span className='font-semibold text-gray-800'>{filterDoc.length}</span> {filterDoc.length === 1 ? 'doctor' : 'doctors'}
                                        {speciality && <span className='text-blue-600'> in {speciality}</span>}
                                    </p>
                                </div>

                                {/* Doctors Grid */}
                                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                                    {filterDoc.map((item, index) => (
                                        <div 
                                            key={index}
                                            onClick={() => navigate(`/appointment/${item._id}`)} 
                                            className='group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-2xl border-2 border-gray-100 hover:border-teal-200'
                                        >
                                            {/* Doctor Image */}
                                            <div className='relative overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 h-56'>
                                                <img 
                                                    className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500' 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                />
                                                {/* Availability Badge */}
                                                <div className='absolute top-3 right-3'>
                                                    <div className='flex items-center gap-1.5 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg'>
                                                        <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
                                                        Available
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Doctor Info */}
                                            <div className='p-5'>
                                                <h3 className='text-gray-900 text-lg font-bold mb-2 group-hover:text-teal-600 transition-colors'>
                                                    {item.name}
                                                </h3>
                                                
                                                <div className='flex items-center gap-2 text-sm text-gray-600 mb-3'>
                                                    <Award className='w-4 h-4 text-teal-500' />
                                                    <span className='font-medium'>{item.speciality}</span>
                                                </div>

                                                {item.experience && (
                                                    <div className='flex items-center gap-2 text-sm text-gray-600 mb-3'>
                                                        <Clock className='w-4 h-4 text-blue-500' />
                                                        <span>{item.experience}</span>
                                                    </div>
                                                )}

                                                {item.address && (
                                                    <div className='flex items-center gap-2 text-sm text-gray-600 mb-4'>
                                                        <MapPin className='w-4 h-4 text-gray-400' />
                                                        <span className='truncate'>{item.address.line1}</span>
                                                    </div>
                                                )}

                                                {/* Book Button */}
                                                <button className='w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2.5 rounded-xl font-medium hover:from-blue-700 hover:to-teal-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2'>
                                                    Book Appointment
                                                    <ChevronRight className='w-4 h-4' />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctors