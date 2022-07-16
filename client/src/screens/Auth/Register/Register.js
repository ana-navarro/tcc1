import axios from 'axios';
import React,  { useState  } from 'react'
import { Card, Container } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../../../components/Footer';

import { Header } from "../../../components/Header"
import "./Register.css"

export const Register = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [matchPassword, setMatchPassword] = useState();
    const [email,setEmail] = useState();
    const navigate = useNavigate()

    const [passwordShown, setPasswordShown] = useState(false);

    const handleShowHide = (e) => {
        setPasswordShown(!passwordShown);
    }

    async function onSubmit(event) {
		event.preventDefault();

        if(password === matchPassword){
            const userObj = {
                name,
                password,
                email,
                matchPassword,
            }
            try{
                const response = await axios.post("http://localhost:3000/api/register", userObj)
                toast.dismiss()
                await console.log(response.data)
                toast.success("Usuário criado com sucesso!");
                navigate('/login')
            }catch(err){
                toast.error("Deu algum erro! " );
                console.log(err)
            }
        }
        else{
            toast.error("Senha e Confirmar Senha estão diferentes!");
        }
	}

    return (
        <div>
            <Header />
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
                                <button type="submit" className="btn btn-primary m-3">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
    </div>
    )
}
