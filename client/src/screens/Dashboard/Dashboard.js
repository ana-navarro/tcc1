import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { SideBar } from '../../components/Sidebar.js';
import { Col, Container, Row } from 'react-bootstrap'
import { Generate } from './Widget/Generate.js';
import './style.css'
import { Company } from './Widget/Company.js';
import { BarChartGenerate } from './Widget/BarChart.js';
import { Payments } from './Widget/Payments.js';
import { Visit } from './Widget/Visit.js';
import GeneratePieChart from './Widget/PieChart.js';

export const Dashboard = () => {
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
                    <Generate/>
                    <div className="grid grid-cols-2 gap-4 py-2">
                        <Company />
                        <BarChartGenerate />
                    </div>
                    <Payments />
                    <div className="grid grid-cols-2 gap-4 py-2">
                        <Visit />
                        <GeneratePieChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}
