import React from 'react'
import { Calendar, ArrowRight, Users, Shield, Clock } from 'lucide-react'

const Header = () => {
    return (
        <div className='relative overflow-hidden w-full'>
            {/* Animated Background */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500 via-teal-500 to-emerald-500 opacity-95'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.3),transparent_50%)]'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.3),transparent_50%)]'></div>
            
            <div className='relative flex flex-col md:flex-row flex-wrap rounded-2xl px-6 md:px-10 lg:px-20 py-8'>
                {/* Header Left */}
                <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[10vw] md:mb-[-30px] z-10'>
                    {/* Trust Badge */}
                    <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-lg'>
                        <Shield className='w-4 h-4 text-white' />
                        <span className='text-white text-sm font-medium'>Trusted Healthcare Platform</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>
                        Book Appointment
                        <br />
                        <span className='bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent'>
                            With Trusted Doctors
                        </span>
                    </h1>

                    {/* Features */}
                    <div className='flex flex-col gap-3 text-white/90'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-white/20 backdrop-blur-sm p-2 rounded-lg'>
                                <Calendar className='w-5 h-5 text-white' />
                            </div>
                            <p className='text-sm font-medium'>Easy Online Booking</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-white/20 backdrop-blur-sm p-2 rounded-lg'>
                                <Users className='w-5 h-5 text-white' />
                            </div>
                            <p className='text-sm font-medium'>100+ Verified Doctors</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-white/20 backdrop-blur-sm p-2 rounded-lg'>
                                <Clock className='w-5 h-5 text-white' />
                            </div>
                            <p className='text-sm font-medium'>Same Day Appointments</p>
                        </div>
                    </div>

                    {/* Doctor Avatars & Description */}
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mt-2'>
                        <div className='flex -space-x-3'>
                            <div className='inline-block h-12 w-12 rounded-full ring-4 ring-white bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform'>
                                <span className='text-white font-bold text-sm'>Dr</span>
                            </div>
                            <div className='inline-block h-12 w-12 rounded-full ring-4 ring-white bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform'>
                                <span className='text-white font-bold text-sm'>Dr</span>
                            </div>
                            <div className='inline-block h-12 w-12 rounded-full ring-4 ring-white bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform'>
                                <span className='text-white font-bold text-sm'>Dr</span>
                            </div>
                            <div className='inline-block h-12 w-12 rounded-full ring-4 ring-white bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center shadow-lg'>
                                <span className='text-white font-bold text-xs'>50+</span>
                            </div>
                        </div>
                        <div className='text-white/90'>
                            <p className='font-semibold text-lg'>2,500+ Happy Patients</p>
                            <p className='text-sm text-white/70'>Join thousands who trust our platform</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a 
                        href="#speciality" 
                        className='group flex items-center gap-3 bg-white px-8 py-4 rounded-full text-gray-700 font-semibold m-auto md:m-0 hover:shadow-2xl transition-all duration-300 mt-4 hover:scale-105 shadow-xl'
                    >
                        <Calendar className='w-5 h-5 text-emerald-600' />
                        <span>Book Appointment</span>
                        <ArrowRight className='w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform' />
                    </a>
                </div>

                {/* Header Right */}
                <div className='md:w-1/2 relative flex items-end justify-center z-10'>
                    <div className='w-full max-w-md relative'>
                        {/* Decorative Elements */}
                        <div className='absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse'></div>
                        <div className='absolute bottom-20 left-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl animate-pulse'></div>
                        
                        {/* Main Visual */}
                        <div className='relative w-full h-96 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md rounded-t-full mt-10 flex flex-col items-center justify-center overflow-hidden border-4 border-white/30 shadow-2xl'>
                            {/* Stethoscope Icon */}
                            <div className='absolute top-12 left-1/2 transform -translate-x-1/2'>
                                <div className='bg-white/20 backdrop-blur-md p-6 rounded-full border-4 border-white/40 shadow-xl'>
                                    <svg className='w-16 h-16 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Text */}
                            <div className='absolute bottom-0 left-0 right-0 text-center pb-12'>
                                <p className='text-white/30 text-8xl md:text-9xl font-black tracking-tighter select-none'>
                                    DOC
                                </p>
                            </div>

                            {/* Floating Stats Cards */}
                            <div className='absolute top-24 -left-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-white/50 transform hover:scale-105 transition-transform'>
                                <p className='text-emerald-600 font-bold text-2xl'>98%</p>
                                <p className='text-gray-600 text-xs font-medium'>Success Rate</p>
                            </div>
                            
                            <div className='absolute top-40 -right-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-white/50 transform hover:scale-105 transition-transform'>
                                <p className='text-blue-600 font-bold text-2xl'>24/7</p>
                                <p className='text-gray-600 text-xs font-medium'>Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header