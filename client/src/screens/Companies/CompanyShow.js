import React, { useState, useEffect } from 'react'
import { SideBar } from '../../components/Sidebar'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom';

import './style.css'
import { Card, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export const CompanyShow = ({match}) => {

    const [userInfo, setUserInfo] = useState(null);
    const [installations, setInstallations] = useState();
    const navigate = useNavigate();
    const [company, setCompany] = useState(null);
    const { id } = useParams();
    const companyId = id;
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

    const getCompany = async () => {
        const response = await fetch(`http://localhost:3000/api/company/${companyId}`)
        const json = await response.json()
        localStorage.setItem("company", companyId)
        if (response.ok) {
            console.log(`Here: ${json}`)
            setCompany(json)
        }
    }
    
    const fetchInstallation = async () => {
        const response = await fetch(`http://localhost:3000/api/company/${companyId}/installations/`)
        const json = await response.json()
        
        if (response.ok) {
            console.log(`Here: ${json}`)
            setInstallations(json)
        }
    }
    useEffect(() => {
        getData()
    }, [userInfo])

    useEffect(() => {
        getCompany()
    }, [])

    useEffect(() => {
        fetchInstallation()
    }, [])

    return (
        userInfo !== null && (
            <div className='h-screen w-screen pb-20'>
                <SideBar/>
                <div className='main'>
                    <Container className='py-6'>
                        <Card>
                            <Card.Header>
                                <p className="text-2xl font-bold text-center py-2"> <strong>{company?.name}</strong></p>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <h4 className="text-muted font-bold text-center py-2">Informações</h4>
                                    <p>Email: {company?.email}</p>
                                    <p>Telefone: {company?.phone}</p>
                                    <p>CNPJ: {company?.cnpj}</p>
                                    <h4 className="text-muted font-bold text-center py-2">Endereço</h4>
                                    <p>Rua: {company?.street}</p>
                                    <p>Número: {company?.number}</p>
                                    <p>Bairro: {company?.neighborhood}</p>
                                    <p>Cidade: {company?.city}</p>
                                    <p>Estado: {company?.state}</p>
                                </div>

                                <div className='text-center'>
                                    <a className="btn btn-success text-white font-bold m-2" href='/company/installation/add'>Adicionar uma nova Instalação</a>
                                    <a className="btn btn-info text-white font-bold m-2">Ver Lista de Funcionários Cadastrados</a>
                                </div>

                                <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="flex flex-col items-center justify-center">Instalações</th>
                                                <th scope="flex flex-col items-center justify-center">Ações</th>
                                            </tr>
                                        </thead>
                                    <tbody>
                                        {installations && installations.map(installation => (
                                        <tr>
                                            <th scope="row">
                                                <p>{installation?.installationNumber}</p>
                                            </th>
                                            <td className='p-2'>
                                                <LinkContainer to={`/company/${company._id}/edit`}>
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
                                <div className='flex flex-col items-end justify-end'>
                                    <a href='/companies'>Voltar para todas as Empresas</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
        )
    )
}