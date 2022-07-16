import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../../components/Footer'

import { Header } from "../../components/Header"
import './landing.css'

export const Landing = () => {
    return (
        <div>
            <Header />
            <Container>
                <div className='flex justify-items-center items-center h-screen'>
                    <div className='row'>
                        <div className='col'>
                            <div >
                                <h1 className='font-semibold text-5xl  p-3'>Gestão de <span className='text-warning'>Sistemas</span> <br/> Fotovoltaicos</h1>
                                <p className='text-justify p-3'>
                                    O sistema SIGUS é um sistema de gestão de parques solares que será desenvolvido em parceria com a Minera, 
                                    empresa que trabalha na construção, operacionalização, manutenção e comissionamento de usinas solares.
                                </p>
                            </div>
                            <div className='text-center'>
                                <a href='/login' className='btn btn-lg bg-warning text-white justify-items-center items-center rounded p-3'>Login</a>
                            </div>
                        </div>
                        <div className="col px-0 text-right">
                            <img src={'img/smarthome.png'} alt="smarthome" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}