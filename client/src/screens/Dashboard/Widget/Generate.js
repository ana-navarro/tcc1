import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

export const Generate = () => {
    return (
        <div>
            <Row className="grid grid-cols-4 ">
                <Col>
                    <Card style={{ width: '37vh' }}>
                        <Card.Body>
                            <Card.Title><h2 className='flex justify-center items-center text-sm text-gray-500'>Geração do Dia</h2></Card.Title>
                            <Card.Text>
                                <p className='flex justify-center items-center text-5xls font-extrabold'>91.0</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '37vh' }}>
                        <Card.Body>
                            <Card.Title><h2 className='flex justify-center items-center text-sm text-gray-500'>Geração do Mês</h2></Card.Title>
                            <Card.Text>
                                <p className='flex justify-center items-center text-2xls font-extrabold'>30.0</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '37vh' }}>
                        <Card.Body>
                            <Card.Title><h2 className='flex justify-center items-center text-sm text-gray-500'>Geração Anual</h2></Card.Title>
                            <Card.Text>
                                <p className='flex justify-center items-center text-2xls font-extrabold'>41.0</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '37vh' }}>
                        <Card.Body>
                            <Card.Title><h2 className='flex justify-center items-center text-sm text-gray-500'>CO2 Atual</h2></Card.Title>
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
