import React, { useEffect, useState } from 'react'

import { SideBar } from '../../components/Sidebar.js';
import { Generate } from './Widget/Generate.js';
import './style.css'
import { Company } from './Widget/Company.js';
import { BarChartGenerate } from './Widget/BarChart.js';
import { Payments } from './Widget/Payments.js';
import { Visit } from './Widget/Visit.js';
import GeneratePieChart from './Widget/PieChart.js';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
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
            toast.dismiss()
            if (response.data.success) {
                setUserInfo(response.data.data, response.data.user)
                console.log(userInfo)
            } else {
                localStorage.removeItem('user')
                navigate('/login')
                toast.error('something went wrong')
            }
        } catch (error) {
            localStorage.removeItem('user')
            navigate('/login')
            toast.error('something went wrong')
        }
    }

    useEffect(() => {
        if (userInfo === null) {
            getData()
        }
    }, [userInfo])

    return (
        userInfo !== null && (
            <div className='h-screen w-screen pb-20'>
                <SideBar/>
                <div className='main'>
                    <div className='content'>
                        <Generate />
                        <div className="grid grid-cols-2 gap-4 py-2">
                            <Company />
                            <BarChartGenerate />
                        </div>
                        <Payments />
                        <div className="grid grid-cols-2 gap-4 py-2">
                            <Visit />
                            <GeneratePieChart />
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
