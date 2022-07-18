import React, { useState, useEffect } from 'react'
import { SideBar } from '../../components/Sidebar'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

import './style.css'
import { Card, Container } from 'react-bootstrap';

export const InstallationAdd = () => {
    const [installationNumber, setInstallationNumber] = useState(null);
    const [company, setCompany] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
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
    async function onSubmit(event) {
		event.preventDefault();
        const userObj = {
            installationNumber,
            company
        }   
        try{
            const response = await axios.post(`http://localhost:3000/api/company/installation/add`, userObj)
            toast.dismiss()
            await console.log(response.data)
            toast.success("Instalação adcionada com sucesso!");
            navigate('/companies')
            localStorage.removeItem("company")
        }catch(err){
            toast.error("Deu algum erro!" );
            console.log(err)
        }
        }
    
    useEffect(() => {
        getData()
    }, [userInfo])

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
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group m-3">
                                            <label htmlFor="companyId">
                                                Empresa:
                                            </label>
                                            <input 
                                                type="text"
                                                id="company"
                                                className="form-control"
                                                placeholder='CompanyId'
                                                onChange={(e) => setCompany(e.target.value)}
                                                value={company}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="installationNumber">
                                                Número da Instalação:
                                            </label>
                                            <input 
                                                type="text"
                                                id="installation"
                                                className="form-control"
                                                placeholder='Número de Instalação'
                                                onChange={(e) => setInstallationNumber(e.target.value)}
                                                value={installationNumber}
                                                required
                                            />
                                        </div>

                                            <div className='text-center'>
                                                <button type="submit" className="btn btn-primary m-3">
                                                    Enviar
                                                </button>
                                            </div>
                                    </form>
                                </div>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
        )
    )
}