import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Título',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Valor',
        selector: row => row.payment,
        sortable: true,
    },
    {
        name: 'Mês',
        selector: row => row.months,
        sortable: true,
    },
    {
        name: 'Instalação',
        selector: row => row.installationNumber,
        sortable: true,
    },
    {
        name: 'Data de Criação',
        selector: row => row.createdAt,
        sortable: true,
    },
];

export const Report = () => {
    const [reports, setReports] = useState([])
    useEffect(() => {
        const fetchReports = async () => {
            const { data } = await axios.get('localhost:3000/api/report/final/');
            setReports(data)
        }
        fetchReports()
    }, [match])
    return (
        <div>
            <DataTable
                columns={columns}
                data={reports}
                selectableRows
            />
        </div>
    )
}
