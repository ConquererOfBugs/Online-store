import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Container';
import TypeBar from '../UI/typebar';
import BrandBar from '../UI/brandbar';
import DeviceList from '../UI/devicelist';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <div style={{display: "felx"}}>
                    <Col md={9}>
                        <BrandBar/>
                    </Col>

                    <Col md={9}>
                        <DeviceList/>
                    </Col>
                </div>
            </Row>
        </Container>
    );
}

export default Shop;