import { observer } from 'mobx-react-lite';
import React, { useContext} from 'react';
import {ListGroup} from 'react-bootstrap';
import { Context } from '..';
import brand from '../CSS/brandbar.module.css'

const BrandBar = observer(() => {

    const {device} = useContext(Context)


    return (
        <ListGroup className={brand.row}>
            {device.brands.map(brand => 
                <ListGroup.Item 
                    className='p-3'
                    style={{cursor: 'pointer'}}
                    active={brand.id === device.selectedBrand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
})

export default BrandBar;