import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './swim.css';
import img from './swimsuit.jpg';


function SwimCard() {
    return (
        <div>
<Card style={{ width: 'auto' }}>
  <Card.Img class="img" variant="top" src={img} />
  <Card.Body>
    <Card.Title>The Jane</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default SwimCard
