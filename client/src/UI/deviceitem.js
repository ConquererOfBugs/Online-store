import React from 'react';
import {Col, Card, Image, Row} from 'react-bootstrap';
import star from "../UI/assets/star.png"
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {

    const navigate = useNavigate()

    return (
        <Row className='d-flex flex-column align-items-center'>
            <Col md={3} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
                <Card style={{display: "flex", alignItems: 'center', width: 150, cursor: "pointer", marginBottom: 30}} border='light'>
                    <div style={{display: "flex" }}>
                        <Image  src={device.img} />
                        <div style={{marginTop: 20, marginLeft: 20, fontFamily: "Arial", fontSize: 20}}>{device.name}</div>
                        <div style={{fontFamily: "Arial", fontSize: 30, marginLeft: 300}}>
                            <div >{device.rating}</div>
                            <Image  src={star} width={20} height={20} />
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    );
}   

export default DeviceItem;