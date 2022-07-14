import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './Dashboard.css'

export const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate()
    useEffect(() => {
        if(user){
            navigate('')
        }
    })
    return (
        <div>
          Dashboard
        </div>
    )
}
