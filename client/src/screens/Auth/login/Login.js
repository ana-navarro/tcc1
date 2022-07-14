import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Container, Card } from 'react-bootstrap'

import "./Login.css"

export const Login = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const userObj = {
            email,
            password,
        }
        try {
            const response = await axios.post("/api/login/", userObj)
            toast.dismiss()
            await console.log(response.data)
            if (response.data.success) {
                toast.success(response.data.message)
                localStorage.setItem("user", response.data.data)
                await console.log(response.data)
                navigate('/')
            } else {
                toast.error(response.data.message)
                await console.log(response.data)
            }
        } catch (error) {
            toast.dismiss()
            toast.error('Algo deu errado')
            console.log(error)
        }
    }

    return (
        <div>
            <Container>
                <Card className='m-3'>
                    <Card.Header className='text-center p-3'>Login</Card.Header>
                    <Card.Body>
                        <form className="form-group" on={onSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="email"
                            autoComplete="off"
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <br />            
                        <label htmlFor="password">Senha:</label>
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                placeholder='Senha'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                            <br />
                            <div className='text-center'>
                                <button className="btn btn-primary">Login</button>
                                <a type="button" className="btn btn-warning m-2" href='/register'>Cadastre-se</a>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
