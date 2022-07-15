import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './Dashboard.css'

export const Dashboard = () => {
    const user = JSON.toString(localStorage.getItem('user'));
    const navigate = useNavigate()
    useEffect(() => {
        if(user){
            navigate('/landing')
        }
    })
    return (
        <div>
            Dashboard
        </div>
    )
}
