
import React,  { useState, useEffect,  } from 'react'
import { Card, Container } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Register.css"

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const REGISTER_URL = 'http://localhost:3000/api/register';

export const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [matchPassword, setMatchPassword] = useState('')

    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const handleShowHide = (e) => {
        setPasswordShown(!passwordShown);
    }

    async function onSubmit(event) {
		event.preventDefault()

		try{
            if(password === matchPassword){
                const response = await fetch(REGISTER_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
            })
                const data = await response.json()
                if (data.status === 'ok') {
                    window.location.href = '/login'
                }
            }
        }catch(err){
            console.log(err)
        }
	}

    const handlePasswordConfirm = () => {}

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
    }, [password])

    return (
        <div>
            <ToastContainer />
            <Container id="register">
                <Card className='m-3'>
                    <Card.Header className='text-center p-3'>Cadastre-se</Card.Header>
                    <Card.Body>
                        <form onSubmit={onSubmit}>

                            <div className="form-group m-3">
                                <label htmlFor="name">
                                    Nome:
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
                                    Email:
                                </label>
                                <input  
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder='Email para contato'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    aria-invalid={validEmail ? "false" : "true"}
                                />
                            </div>

                            <div className="form-group m-3">
                                <label htmlFor="password">
                                    Senha
                                    <button onClick={handleShowHide} id='showHide' className='btn btn-outline-light btn-sm text-muted m-2' type="button">Show</button>
                                </label>   
                                <input 
                                    type={passwordShown ? "text" : "password"} 
                                    className="form-control" 
                                    placeholder='Senha'
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    aria-invalid={validPassword ? "false" : "true"}
                                />
                                <small id="passwordHelp" className="form-text text-muted">
                                    <ul className="list-group m-3">
                                        <li>Precisa de pelo menos uma letra tem que está maiúscula</li>
                                        <li>Precisa de pelo menos um caractere especial</li>
                                        <li>Precisa de pelo menos um número</li>
                                        <li>Precisa de pelo menos 8 caracteres</li>
                                    </ul>
                                </small>
                            </div>

                            <div className="form-group m-3">
                                <label htmlFor="confirmpassword">
                                    Confirmar Senha:
                                </label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="confirmpassword" 
                                    placeholder="Confirmar Senha"
                                    onChange={(e) => setMatchPassword(e.target.value)} 
                                    value={matchPassword}
                                    required
                                />
                            </div>

                            <div className='text-center'>
                                <button type="submit" className="btn btn-primary m-3" disabled={!validPassword ||  !validEmail ? true : false}>
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
    </div>
    )
}
