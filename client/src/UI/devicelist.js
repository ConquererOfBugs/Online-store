import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Container, Row } from 'react-bootstrap';
import DeviceItem from './deviceitem';
import classList from "../CSS/devicelist.module.css"

const DeviceList = observer(() => {

    const {device} = useContext(Context)

    return (
        <Container>
            <Row style={{marginTop: -300, marginLeft: 140}}>
                {device.devices.map(device => 
                    <DeviceItem key={device.id} device={device}/>
                )}
            </Row>
        </Container>
    );
})

export default DeviceList;