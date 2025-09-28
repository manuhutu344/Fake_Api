import React from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { numberWithCommas } from '../utils/utils';

function Menus({menu}) {
  return (
    <Col md={4} xs={6} className='mb-4'>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{menu.nama}</Card.Title>
        <Card.Text>
          Rp.{numberWithCommas(menu.harga)}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Menus