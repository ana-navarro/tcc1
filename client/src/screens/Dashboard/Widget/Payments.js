import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'


export const Payments = () => {
    return (
        <div>
                <Row className="grid grid-cols-4 ">
                    <Col>
                        <Card style={{ width: '50vh' }}>
                            <Card.Body>
                                <Card.Title><h2 className='flex justify-center items-center text-sm text-gray-500'>Pagamentos Recebidos</h2></Card.Title>
                                <Card.Text>
                                    <p className='flex justify-center items-center text-5xls font-extrabold'>10</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '50vh' }}>
                            <Card.Body>
                                <Card.Title><h2 className='flex justify-center items-center text-sm text-gray-500'>Falta Receber</h2></Card.Title>
                                <Card.Text>
                                    <p className='flex justify-center items-center text-2xls font-extrabold'>30.0</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '50vh' }}>
                            <Card.Body>
                                <Card.Title><h2 className='flex justify-center items-center text-sm text-gray-500'>Total Recebido</h2></Card.Title>
                                <Card.Text>
                                    <p className='flex justify-center items-center text-2xls font-extrabold'>205.2</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
    )
}
