import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Container';
import TypeBar from '../UI/typebar';
import BrandBar from '../UI/brandbar';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>

                <Col md={9}>
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;