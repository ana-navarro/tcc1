import React from 'react'
import {  Row, Col } from 'react-bootstrap'

export const Footer = () => {
    return (
        <div>
            <footer>
                <Row>
                    <Col className='container fixed bottom-0 text-center py-3'>Copyright &copy; SIGUS/Minera Engenharia</Col>
                </Row>
            </footer>
        </div>
    )
}