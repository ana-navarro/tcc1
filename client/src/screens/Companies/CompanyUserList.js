import React, { useState, useEffect } from 'react'
import { SideBar } from '../../components/Sidebar.js';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

import './style.css'
import { Card, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export const CompanyUserList = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [companyUsers, setCompanyUser] = useState(null);
    const navigate = useNavigate();
    const getData = async () => {
        try {
            const token = localStorage.getItem('x-auth-token');
            const response = await axios.get('http://localhost:3000/api/user/info', {
                headers: {
                    'x-auth-token': `${token}`
                }
            })
            if (response.data.success) {
                setUserInfo(response.data.data)
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

    const getCompanyUsers = async () => {
        const companyId = localStorage.getItem("company")
        const response = await axios.get(`http://localhost:3000/api/user/company/list/${companyId}`)
        const json = await response.json()
    
        if (response.ok) {
            console.log(`Here: ${json}`)
            setCompanyUser(json)
        }
    }

    const removeCompany = () => {
        localStorage.removeItem("company")
    }

    useEffect(() => {
        getData()
    }, [userInfo])

    useEffect(() => {
        getCompanyUsers()
    }, [])

    return (
        userInfo !== null && (
            <div className='h-screen w-screen pb-20'>
                <SideBar/>
                <div className='main'>
                    <Container className='py-6'>
                        <Card>
                            <Card.Header>
                                <p className="text-2xl font-bold text-center py-2">Editar Usina</p>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="flex flex-col items-center justify-center">Email</th>
                                                    <th scope="flex flex-col items-center justify-center">Nome</th>
                                                </tr>
                                            </thead>
                                        <tbody>
                                            {companyUsers && companyUsers.map(companyUser => (
                                            <tr>
                                                <th scope="row">
                                                    <p>{companyUser?.id}</p>
                                                </th>
                                                <td className='p-2'>
                                                    <p>{companyUser?.id}</p>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className='flex flex-col items-end justify-end'>
                                        <a href='/companies' onClick={removeCompany}>Voltar para todas as Empresas</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
        )
    )
}