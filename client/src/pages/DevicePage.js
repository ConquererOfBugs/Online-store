import React from 'react';
import {Col, Container, Image, Row, Card, Button} from 'react-bootstrap';
import starBig from '../UI/assets/StarBig.png'


const DevicePage = () => {

    const device = {id: 1, name: "Realme 10", price: 110000, rating: 0, img: "http://127.0.0.1:8080/8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2}
    const description = [
        {id: 1, title: "Оперативная память", description: "8 гб"},
        {id: 2, title: "Камера", description: "50 мп"},
        {id: 3, title: "Процессор", description: "Mediatec Helio g90"},
        {id: 4, title: "Кол-во ядер", description: "4 Ядра"},
        {id: 5, title: "Аккумулятор", description: "5000 мп/ч"}
    ]

    return (
        <Container className='mt-5'>
            <Row>
            <Col md={4}>
                <Card style={{border: '2px solid black'}}>
                    <Image width={300} height={400} style={{margin: 30}} src={device.img}/>
                </Card>
            </Col>
            
            <Col md={4}>
                <Row className='d-flex flex-column align-items-center'>
                    <h2>
                        {device.name}
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${starBig}) no-repeat center center`, width: 240, height:240, backgroundSize: 'cover', fontSize: 70}}
                        >{device.rating}</div>
                    </h2>
                </Row>
            </Col>
            <Col md={4}>
                <Card className='d-flex flex-columnn align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '3px solid black'}}
                        >
                    <h3>{device.price}</h3>
                    <Button variant={'outline-dark'}>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>

            <Row className='d-flex flex-column m-3'>

                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    );
}

export default DevicePage;