import React from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import starBig from '../UI/assets/StarBig.png'


const DevicePage = () => {

    const device = {id: 1, name: "Realme 10", price: 110000, rating: 0, img: "http://127.0.0.1:8080/8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2}


    return (
        <Container className='mt-5'>
            <Row>
            <Col md={4}>
            <Image width={300} height={400} src={device.img}/>
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

            </Col>
            </Row>

        </Container>
    );
}

export default DevicePage;