import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Report = () => {
    const [reports, setReports] = useState([])
    useEffect(() => {
        const fetchReports = async () => {
            const { data } = await axios.get(`localhost:3000/api/report/final/${match.params.id}`);
            setReports(data)
        }
        fetchReports()
    }, [match])
    return (
        <div>
            
        </div>
    )
}
