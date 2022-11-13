import React from 'react'
import { Card } from 'react-bootstrap'


const HomeCard = (props) => {
  return (
    <>
      <div style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
        <button>Add To Cart</button>
      </Card.Body>
    </div>
    </>
  )
}

export default HomeCard