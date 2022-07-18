import React, { useState, useEffect } from 'react'

import { SideBar } from '../../components/Sidebar.js';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

import './style.css'
import { Card, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export const FinantialReport = () => {
    const [finantial, setFinantial] = useState()
    const [userInfo, setUserInfo] = useState(null)
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

    useEffect(() => {
        getData()
    }, [userInfo])

    useEffect(() => {
        const fetchFinantial = async () => {
            const response = await fetch('http://localhost:3000/api/report/finantial/')
            const json = await response.json()

            if (response.ok) {
                setFinantial(json)
                console.log(json)
            }
        }
        fetchFinantial()
    }, [])
    return (
        userInfo !== null && (
            <div className='h-screen w-screen pb-20'>
                <SideBar/>
                <div className='main'>
                    <Container className='py-6'>
                        <Card>
                            <Card.Header>
                                <p className="text-2xl font-bold text-center py-2"> <strong>Lista de Relatório Financeiro</strong></p>
                            </Card.Header>
                            <Card.Body>
                                    <div className='text-center'>
                                        <a className="btn btn-success text-white font-bold m-2" href='/report/finantial/add'>Adicionar novo Relatório Financeiro</a>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="flex flex-col items-center justify-center">ID</th>
                                                <th scope="flex flex-col items-center justify-center">Data</th>
                                                <th scope="flex flex-col items-center justify-center">Valor</th>
                                                <th scope="flex flex-col items-center justify-center">Ações</th>
                                            </tr>
                                        </thead>
                                    <tbody>
                                        {finantial && finantial.map(fin => (
                                        <tr>
                                            <th scope="row">
                                                <Link to={`/report/finantial/${fin._id}`}>
                                                    <p>{fin._id}</p> </Link>
                                            </th>
                                            <td>
                                                <Link to={`/report/${fin._id}`}>
                                                    {fin.date}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/report/${fin._id}`}>
                                                    {fin.payment}
                                                </Link>
                                            </td>
                                            <td className='p-2'>
                                            <LinkContainer to={`/report/finantial/${fin._id}/edit`}>
                                                <Button variant='btn btn-success btn-sm text-white font-bold mx-2' className='btn-sm'>
                                                    Editar
                                                </Button>
                                            </LinkContainer>
                                                <Button variant='btn btn-danger btn-sm text-white font-bold' className='btn-sm'>
                                                    Deletar
                                                </Button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
        )
    )
}
