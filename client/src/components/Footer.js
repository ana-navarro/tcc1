import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
    return (
        <div>
            <footer>
                <Row>
                    <Col className='container fixed bottom-0 text-center p-3'>Copyright &copy; SIGUS/Minera Engenharia</Col>
                </Row>
            </footer>
        </div>
    )
}