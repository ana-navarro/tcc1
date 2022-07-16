import React, { useEffect, useState } from 'react'

import { SideBar } from '../../components/Sidebar.js';
import './style.css'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const [userInfo, setUserInfo] = useState(null)
    const navigate = useNavigate()

    const getData = async () => {
        try {
            const token = localStorage.getItem('x-auth-token');
            const response = await axios.get('http://localhost:3000/api/user/info', {
                headers: {
                    'x-auth-token': `${token}`
                }
            })
            if (response.data.success) {
                setUserInfo(response.data.user)
            } else {
                localStorage.removeItem('user')
                navigate('/login')
                toast.error('Algo deu errado!')
            }
        } catch (error) {
            localStorage.removeItem('user')
            navigate('/login')
            toast.error('Algo deu errado!')
        }
    }

    useEffect(() => {
        getData()
    }, [userInfo])

    return (
        userInfo !== null && (
            <div className='h-screen w-screen pb-20'>
                <SideBar/>
                <div className='main'>
                    <div className='content'>
                        <p className="text-2xl"> <strong>Name:</strong>{userInfo?.name} </p>
                    </div>
                </div>
            </div>
        )
    )
}
