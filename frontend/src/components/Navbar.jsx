import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Menu, X, User, Calendar, LogOut, ChevronDown, Stethoscope } from 'lucide-react'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const { token, setToken, userData } = useContext(AppContext);

    const logout = () => {
        setToken(false);
        localStorage.removeItem('token');
    }

    return (
        <nav className='sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <div 
                        onClick={() => navigate('/')} 
                        className='flex items-center gap-2 cursor-pointer group'
                    >
                        <div className='bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                            <Stethoscope className='w-6 h-6 text-white' />
                        </div>
                        <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent'>
                            Prescripto
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex items-center gap-8'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                            {({ isActive }) => (
                                <li className='relative group'>
                                    <span className='font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 cursor-pointer'>
                                        HOME
                                    </span>
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </li>
                            )}
                        </NavLink>
                        <NavLink to='/doctors' className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                            {({ isActive }) => (
                                <li className='relative group'>
                                    <span className='font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 cursor-pointer'>
                                        ALL DOCTORS
                                    </span>
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </li>
                            )}
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                            {({ isActive }) => (
                                <li className='relative group'>
                                    <span className='font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 cursor-pointer'>
                                        ABOUT
                                    </span>
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </li>
                            )}
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                            {({ isActive }) => (
                                <li className='relative group'>
                                    <span className='font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 cursor-pointer'>
                                        CONTACT
                                    </span>
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </li>
                            )}
                        </NavLink>
                    </ul>

                    {/* Right Section */}
                    <div className='flex items-center gap-4'>
                        {token && userData ? (
                            <div className='relative group'>
                                <div className='flex items-center gap-3 cursor-pointer bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full border border-blue-100 hover:border-blue-300 transition-all duration-300'>
                                    <img 
                                        className='w-9 h-9 rounded-full object-cover border-2 border-blue-300 shadow-sm' 
                                        src={userData.image} 
                                        alt={userData.name} 
                                    />
                                    <span className='hidden sm:block font-medium text-gray-700'>{userData.name?.split(' ')[0]}</span>
                                    <ChevronDown className='w-4 h-4 text-gray-600 group-hover:rotate-180 transition-transform duration-300' />
                                </div>
                                
                                {/* Dropdown Menu */}
                                <div className='absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden'>
                                    <div className='bg-gradient-to-r from-blue-600 to-green-600 px-4 py-3'>
                                        <p className='text-white font-semibold'>{userData.name}</p>
                                        <p className='text-blue-100 text-xs'>{userData.email}</p>
                                    </div>
                                    <div className='py-2'>
                                        <button
                                            onClick={() => navigate('my-profile')}
                                            className='w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors duration-200 text-gray-700'
                                        >
                                            <User className='w-5 h-5 text-blue-600' />
                                            <span className='font-medium'>My Profile</span>
                                        </button>
                                        <button
                                            onClick={() => navigate('my-appointments')}
                                            className='w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors duration-200 text-gray-700'
                                        >
                                            <Calendar className='w-5 h-5 text-blue-600' />
                                            <span className='font-medium'>My Appointments</span>
                                        </button>
                                        <div className='border-t border-gray-200 my-1'></div>
                                        <button
                                            onClick={logout}
                                            className='w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 transition-colors duration-200 text-red-600'
                                        >
                                            <LogOut className='w-5 h-5' />
                                            <span className='font-medium'>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button 
                                onClick={() => navigate('/login')} 
                                className='hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                            >
                                Create Account
                            </button>
                        )}
                        
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setShowMenu(true)} 
                            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
                        >
                            <Menu className='w-6 h-6 text-gray-700' />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${showMenu ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${showMenu ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setShowMenu(false)}
                ></div>
                
                {/* Menu Panel */}
                <div className={`absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Header */}
                    <div className='flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-green-600'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white/20 p-1.5 rounded-lg'>
                                <Stethoscope className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl font-bold text-white'>Prescripto</h1>
                        </div>
                        <button 
                            onClick={() => setShowMenu(false)} 
                            className='p-2 rounded-lg hover:bg-white/20 transition-colors'
                        >
                            <X className='w-6 h-6 text-white' />
                        </button>
                    </div>

                    {/* User Info (if logged in) */}
                    {token && userData && (
                        <div className='px-6 py-4 bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-200'>
                            <div className='flex items-center gap-3'>
                                <img 
                                    className='w-12 h-12 rounded-full object-cover border-2 border-blue-300' 
                                    src={userData.image} 
                                    alt={userData.name} 
                                />
                                <div>
                                    <p className='font-semibold text-gray-800'>{userData.name}</p>
                                    <p className='text-sm text-gray-600'>{userData.email}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Links */}
                    <ul className='px-4 py-6 space-y-2'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'>
                            {({ isActive }) => (
                                <li className={`px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}>
                                    HOME
                                </li>
                            )}
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
                            {({ isActive }) => (
                                <li className={`px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}>
                                    ALL DOCTORS
                                </li>
                            )}
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'>
                            {({ isActive }) => (
                                <li className={`px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}>
                                    ABOUT
                                </li>
                            )}
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'>
                            {({ isActive }) => (
                                <li className={`px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}>
                                    CONTACT
                                </li>
                            )}
                        </NavLink>
                    </ul>

                    {/* Mobile User Actions */}
                    {token && userData && (
                        <div className='absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-gray-50 px-4 py-4 space-y-2'>
                            <button
                                onClick={() => { navigate('my-profile'); setShowMenu(false); }}
                                className='w-full px-4 py-3 flex items-center gap-3 bg-white rounded-xl hover:bg-blue-50 transition-colors text-gray-700 border border-gray-200'
                            >
                                <User className='w-5 h-5 text-blue-600' />
                                <span className='font-medium'>My Profile</span>
                            </button>
                            <button
                                onClick={() => { navigate('my-appointments'); setShowMenu(false); }}
                                className='w-full px-4 py-3 flex items-center gap-3 bg-white rounded-xl hover:bg-blue-50 transition-colors text-gray-700 border border-gray-200'
                            >
                                <Calendar className='w-5 h-5 text-blue-600' />
                                <span className='font-medium'>My Appointments</span>
                            </button>
                            <button
                                onClick={() => { logout(); setShowMenu(false); }}
                                className='w-full px-4 py-3 flex items-center gap-3 bg-white rounded-xl hover:bg-red-50 transition-colors text-red-600 border border-gray-200'
                            >
                                <LogOut className='w-5 h-5' />
                                <span className='font-medium'>Logout</span>
                            </button>
                        </div>
                    )}

                    {/* Mobile CTA */}
                    {!token && (
                        <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50'>
                            <button 
                                onClick={() => { navigate('/login'); setShowMenu(false); }} 
                                className='w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-md'
                            >
                                Create Account
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar