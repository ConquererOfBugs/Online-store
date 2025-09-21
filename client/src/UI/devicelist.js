import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import DeviceItem from './deviceitem';
import classList from "../CSS/devicelist.module.css"

const DeviceList = observer(() => {

    const {device} = useContext(Context)

    return (
        <div className={classList.list}>
            <Row className={classList.row}>
                {device.devices.map(device => 
                    <DeviceItem key={device.id} device={device}/>
                )}
            </Row>
        </div>
    );
})

export default DeviceList;