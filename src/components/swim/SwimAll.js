import React from 'react';
import SwimCard from './SwimCard';
import {Container,Row,Col} from 'react-bootstrap';


function SwimAll() {
    return (
        <div>
            <Container>
  <Row>
    <Col><SwimCard/></Col>
    <Col><SwimCard/></Col>
    <Col><SwimCard/></Col>
  </Row>
</Container>
        </div>
    )
}

export default SwimAll
