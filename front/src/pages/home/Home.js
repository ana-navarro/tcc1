import React from 'react'
import { Container } from 'react-bootstrap'
import { Budget } from './Budget'
import { Values } from './Values'

export const Home = () => {
    return (
        <div>
            <Container id='home'>
                <Values />
                <Budget />
            </Container>
            
        </div>
    )
}
