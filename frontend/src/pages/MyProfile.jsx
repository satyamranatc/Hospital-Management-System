import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {

    const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(false)

    const updateUserProfileData = async () => {
        try {
            const formData = new FormData()

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return userData && (
        <div className='max-w-lg flex flex-col gap-2 text-sm mx-4 sm:mx-[10%] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mt-10'>

            {
                isEdit
                    ? <label htmlFor="image">
                        <div className='inline-block relative cursor-pointer group'>
                            <img className='w-36 rounded-xl opacity-75 group-hover:opacity-50 transition-opacity' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                            <div className='w-10 h-10 absolute bottom-12 right-12 bg-gray-200 rounded-full flex items-center justify-center text-xl group-hover:bg-gray-300 transition-colors'>📷</div>
                        </div>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                    </label>
                    : <img className='w-36 rounded-xl shadow-md' src={userData.image} alt="" />
            }

            {
                isEdit
                    ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-primary transition-colors' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
                    : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
            }

            <hr className='bg-zinc-400 h-[1px] border-none' />
            <div>
                <p className='text-neutral-500 underline mt-3 uppercase tracking-wider text-xs font-semibold'>Contact Information</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Email id:</p>
                    <p className='text-blue-500'>{userData.email}</p>
                    <p className='font-medium'>Phone:</p>
                    {
                        isEdit
                            ? <input className='bg-gray-50 max-w-52 border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-primary transition-colors' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                            : <p className='text-blue-400'>{userData.phone}</p>
                    }
                    <p className='font-medium'>Address:</p>
                    {
                        isEdit
                            ? <p>
                                <input className='bg-gray-50 border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-primary transition-colors mb-1 w-full' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                                <br />
                                <input className='bg-gray-50 border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-primary transition-colors w-full' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
                            </p>
                            : <p className='text-gray-500'>
                                {userData.address.line1}
                                <br />
                                {userData.address.line2}
                            </p>
                    }
                </div>
            </div>
            <div>
                <p className='text-neutral-500 underline mt-3 uppercase tracking-wider text-xs font-semibold'>Basic Information</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Gender:</p>
                    {
                        isEdit
                            ? <select className='max-w-20 bg-gray-50 border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-primary transition-colors' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            : <p className='text-gray-400'>{userData.gender}</p>
                    }
                    <p className='font-medium'>Birthday:</p>
                    {
                        isEdit
                            ? <input className='max-w-28 bg-gray-50 border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-primary transition-colors' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                            : <p className='text-gray-400'>{userData.dob}</p>
                    }
                </div>
            </div>

            <div className='mt-10'>
                {
                    isEdit
                        ? <button className='bg-primary text-white px-8 py-2.5 rounded-full hover:bg-primary-hover shadow-md hover:shadow-lg transition-all font-medium' onClick={updateUserProfileData}>Save information</button>
                        : <button className='border border-primary px-8 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all font-medium' onClick={() => setIsEdit(true)}>Edit</button>
                }
            </div>

        </div>
    )
}

export default MyProfile
