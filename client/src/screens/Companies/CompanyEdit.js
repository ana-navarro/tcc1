import React, { useState, useEffect } from 'react'
import { SideBar } from '../../components/Sidebar'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

import './style.css'
import { Card, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export const CompanyEdit = ({match}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [cnpj, setCNPJ] = useState();
    const [street, setStreet] = useState();
    const [neighborhood, setNeighborhood] = useState();
    const [number, setNumber] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();

    const [userInfo, setUserInfo] = useState(null);
    const [company, setCompany] = useState(null);
    const navigate = useNavigate();
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

    async function onSubmit(event) {
		event.preventDefault();
        const userObj = {
            name,
            email,
            phone,
            cnpj,
            street,
            neighborhood,
            number,
            state,
            city
        }    
        try{
            const response = await axios.put(`http://localhost:3000/api/company/${companyId}`, userObj)
            toast.dismiss()
            await console.log(response.data)
            toast.success("Usuário criado com sucesso!");
            navigate('/login')
        }catch(err){
            toast.error("Deu algum erro! " );
            console.log(err)
        }
        }

    const getCompany = async () => {
        const response = await axios.put(`http://localhost:3000/api/company/${companyId}`)
        const json = await response.json()
        
        if (response.ok) {
            console.log(`Here: ${json}`)
            setCompany(json)
        }
    }
    
    useEffect(() => {
        getData()
    }, [userInfo])

    useEffect(() => {
        getCompany()
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
                                    <form onSubmit={onSubmit}>
                                            <h4 className="text-muted font-bold text-center py-2">Informações</h4>
                                                <div className="form-group m-3">
                                                    <label htmlFor="name">
                                                        Nome da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="name"
                                                        className="form-control"
                                                        placeholder='Nome Completo'
                                                        onChange={(e) => setName(e.target.value)}
                                                        value={name}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group m-3">
                                                    <label htmlFor="email">
                                                        Email da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="email"
                                                        className="form-control"
                                                        placeholder='Email'
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group m-3">
                                                    <label htmlFor="phone">
                                                        Telefone da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="phone"
                                                        className="form-control"
                                                        placeholder='Telefone'
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        value={phone}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group m-3">
                                                    <label htmlFor="cnpj">
                                                        CNPJ da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="cnpj"
                                                        className="form-control"
                                                        placeholder='CNPJ'
                                                        onChange={(e) => setCNPJ(e.target.value)}
                                                        value={cnpj}
                                                        required
                                                    />
                                                </div>

                                        
                                            <h4 className="text-muted font-bold text-center py-2">Endereço</h4>
                                                <div className="form-group m-3">
                                                    <label htmlFor="street">
                                                        Rua da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="street"
                                                        className="form-control"
                                                        placeholder='Rua'
                                                        onChange={(e) => setStreet(e.target.value)}
                                                        value={street}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group m-3">
                                                    <label htmlFor="number">
                                                        Número da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="number"
                                                        className="form-control"
                                                        placeholder='Número da Casa'
                                                        onChange={(e) => setNumber(e.target.value)}
                                                        value={number}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group m-3">
                                                    <label htmlFor="neighborhood">
                                                        Bairro da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="neighborhood"
                                                        className="form-control"
                                                        placeholder='Número da Casa'
                                                        onChange={(e) => setNeighborhood(e.target.value)}
                                                        value={neighborhood}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group m-3">
                                                    <label htmlFor="city">
                                                        Cidade da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="city"
                                                        className="form-control"
                                                        placeholder='Cidade'
                                                        onChange={(e) => setCity(e.target.value)}
                                                        value={city}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group m-3">
                                                    <label htmlFor="city">
                                                        Estado da Usina:
                                                    </label>
                                                    <input 
                                                        type="text"
                                                        id="state"
                                                        className="form-control"
                                                        placeholder='Estado'
                                                        onChange={(e) => setState(e.target.value)}
                                                        value={state}
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