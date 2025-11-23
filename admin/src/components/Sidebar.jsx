import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { LayoutDashboard, Users, Calendar, PlusSquare, User } from 'lucide-react'

const Sidebar = () => {

    const { aToken } = useContext(AdminContext)
    const { dToken } = useContext(DoctorContext)

    return (
        <div className='min-h-screen bg-white border-r border-gray-200'>
            {
                aToken && <ul className='text-gray-600 mt-5'>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-emerald-50 border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`} to={'/admin-dashboard'}>
                        <LayoutDashboard className='w-5' />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-emerald-50 border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`} to={'/all-appointments'}>
                        <Calendar className='w-5' />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-emerald-50 border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`} to={'/add-doctor'}>
                        <PlusSquare className='w-5' />
                        <p className='hidden md:block'>Add Doctor</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-emerald-50 border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`} to={'/doctor-list'}>
                        <Users className='w-5' />
                        <p className='hidden md:block'>Doctors List</p>
                    </NavLink>
                </ul>
            }
            {
                dToken && <ul className='text-gray-600 mt-5'>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-emerald-50 border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`} to={'/doctor-dashboard'}>
                        <LayoutDashboard className='w-5' />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-emerald-50 border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`} to={'/doctor-appointments'}>
                        <Calendar className='w-5' />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-emerald-50 border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`} to={'/doctor-profile'}>
                        <User className='w-5' />
                        <p className='hidden md:block'>Profile</p>
                    </NavLink>
                </ul>
            }
        </div>
    )
}

export default Sidebar
