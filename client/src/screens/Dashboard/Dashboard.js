import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios'

import './Dashboard.css'

export const Dashboard = () => {
    const user = localStorage.getItem('user');
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!user) {
            navigate('/landing')
        }
    }, [])
    return (
        <div>
            Dashboard
        </div>
    )
}
