import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import { Edit2, Save, X, MapPin, DollarSign, Award, Briefcase, FileText, Check } from 'lucide-react'

const DoctorProfile = () => {

    const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)
    const { currency } = useContext(AppContext)

    const [isEdit, setIsEdit] = useState(false)

    const updateProfile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                available: profileData.available
            }

            const response = await fetch(backendUrl + '/api/doctor/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'dToken': dToken
                },
                body: JSON.stringify(updateData)
            })

            const data = await response.json()

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                getProfileData()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }
    }, [dToken])

    return profileData && (
        <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6'>
            <div className='max-w-6xl mx-auto'>
                {/* Header Section */}
                <div className='mb-6'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-2'>Doctor Profile</h1>
                    <p className='text-gray-600'>Manage your professional information and availability</p>
                </div>

                <div className='grid md:grid-cols-3 gap-6'>
                    {/* Profile Image Card */}
                    <div className='md:col-span-1'>
                        <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200'>
                            <div className='relative'>
                                <img 
                                    className='w-full h-80 object-cover' 
                                    src={profileData.image} 
                                    alt={profileData.name} 
                                />
                                <div className='absolute top-4 right-4'>
                                    {profileData.available ? (
                                        <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg'>
                                            <Check className='w-3.5 h-3.5' />
                                            Available
                                        </span>
                                    ) : (
                                        <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500 text-white text-xs font-semibold rounded-full shadow-lg'>
                                            <X className='w-3.5 h-3.5' />
                                            Unavailable
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white'>
                                <h2 className='text-2xl font-bold mb-2'>{profileData.name}</h2>
                                <div className='flex items-center gap-2 text-blue-100'>
                                    <Award className='w-4 h-4' />
                                    <span className='text-sm'>{profileData.speciality}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Details Card */}
                    <div className='md:col-span-2'>
                        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-200'>
                            {/* Header with Edit Button */}
                            <div className='flex justify-between items-start mb-6'>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-800 mb-1'>Professional Information</h3>
                                    <p className='text-sm text-gray-500'>View and update your profile details</p>
                                </div>
                                {!isEdit ? (
                                    <button
                                        onClick={() => setIsEdit(true)}
                                        className='inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg'
                                    >
                                        <Edit2 className='w-4 h-4' />
                                        Edit Profile
                                    </button>
                                ) : (
                                    <div className='flex gap-2'>
                                        <button
                                            onClick={() => setIsEdit(false)}
                                            className='inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-200'
                                        >
                                            <X className='w-4 h-4' />
                                            Cancel
                                        </button>
                                        <button
                                            onClick={updateProfile}
                                            className='inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg'
                                        >
                                            <Save className='w-4 h-4' />
                                            Save Changes
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Credentials Section */}
                            <div className='grid md:grid-cols-2 gap-6 mb-6'>
                                <div className='bg-blue-50 rounded-xl p-4 border border-blue-100'>
                                    <div className='flex items-center gap-2 text-blue-700 mb-2'>
                                        <Award className='w-5 h-5' />
                                        <span className='font-semibold text-sm'>Degree</span>
                                    </div>
                                    <p className='text-gray-800 font-medium'>{profileData.degree}</p>
                                </div>
                                <div className='bg-indigo-50 rounded-xl p-4 border border-indigo-100'>
                                    <div className='flex items-center gap-2 text-indigo-700 mb-2'>
                                        <Briefcase className='w-5 h-5' />
                                        <span className='font-semibold text-sm'>Experience</span>
                                    </div>
                                    <p className='text-gray-800 font-medium'>{profileData.experience}</p>
                                </div>
                            </div>

                            {/* About Section */}
                            <div className='mb-6'>
                                <div className='flex items-center gap-2 text-gray-800 mb-3'>
                                    <FileText className='w-5 h-5' />
                                    <h4 className='font-semibold'>About</h4>
                                </div>
                                <p className='text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-4 border border-gray-200'>
                                    {profileData.about}
                                </p>
                            </div>

                            {/* Appointment Fee */}
                            <div className='mb-6'>
                                <div className='flex items-center gap-2 text-gray-800 mb-3'>
                                    <DollarSign className='w-5 h-5' />
                                    <h4 className='font-semibold'>Appointment Fee</h4>
                                </div>
                                <div className='bg-green-50 rounded-xl p-4 border border-green-200'>
                                    {isEdit ? (
                                        <div className='flex items-center gap-2'>
                                            <span className='text-gray-700 font-medium'>{currency}</span>
                                            <input
                                                type="number"
                                                onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
                                                value={profileData.fees}
                                                className='px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-semibold text-gray-800'
                                            />
                                        </div>
                                    ) : (
                                        <p className='text-2xl font-bold text-green-700'>{currency} {profileData.fees}</p>
                                    )}
                                </div>
                            </div>

                            {/* Address Section */}
                            <div className='mb-6'>
                                <div className='flex items-center gap-2 text-gray-800 mb-3'>
                                    <MapPin className='w-5 h-5' />
                                    <h4 className='font-semibold'>Clinic Address</h4>
                                </div>
                                <div className='bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-3'>
                                    {isEdit ? (
                                        <>
                                            <input
                                                type="text"
                                                placeholder='Address Line 1'
                                                onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                                                value={profileData.address.line1}
                                                className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                            />
                                            <input
                                                type="text"
                                                placeholder='Address Line 2'
                                                onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                                                value={profileData.address.line2}
                                                className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                            />
                                        </>
                                    ) : (
                                        <div className='text-gray-700'>
                                            <p className='leading-relaxed'>{profileData.address.line1}</p>
                                            <p className='leading-relaxed'>{profileData.address.line2}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Availability Toggle */}
                            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200'>
                                <label className='flex items-center gap-3 cursor-pointer'>
                                    <div className='relative'>
                                        <input
                                            type="checkbox"
                                            checked={profileData.available}
                                            onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
                                            className='sr-only peer'
                                            disabled={!isEdit}
                                        />
                                        <div className='w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors duration-300'></div>
                                        <div className='absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-7 shadow-md'></div>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-gray-800'>Availability Status</p>
                                        <p className='text-xs text-gray-600'>
                                            {profileData.available ? 'Currently accepting appointments' : 'Not accepting appointments'}
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile