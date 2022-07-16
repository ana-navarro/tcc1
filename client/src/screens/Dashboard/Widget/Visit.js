import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

export const Visit = () => {
    return (
        <div>
            <Card className='h-100'>
                <Card.Body>
                    <Card.Title><h2 className='flex justify-center items-center text-xl text-gray-500 py-2'>Datas das Próximas Visitas:</h2></Card.Title>
                    <Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
