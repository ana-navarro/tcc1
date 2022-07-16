import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/Sidebar.js';

export const Profile = () => {
    const user = localStorage.getItem('user');
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!user) {
            navigate('/landing')
        }
    }, [])

    return (
        <div className='h-screen w-screen pb-20'>
            <SideBar />
            <div className='main'>
                <div className='content'>
                    <div class="grid grid-cols-2 gap-4 py-2">
                    </div>
                    <div class="grid grid-cols-2 gap-4 py-2">
                    </div>
                </div>
            </div>
        </div>
    )
}
