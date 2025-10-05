import axios from 'axios'
import { API_URL } from '../utils/constant'

import { Component } from 'react'
import { Col, ListGroup } from 'react-bootstrap'

export default class ListCategories extends Component {
  constructor(props) {
  super(props)
  this.state = {
     categories: []
  }
}

componentDidMount(){
    axios 
    .get(API_URL + "categories")
    .then((res)=>{
      const categories = res.data
      this.setState({categories})
    })
    .catch((error)=>{
      console.log("Error yaa", error)
    })
  }
  render() {
    console.log(this.state.categories)
    return (
     <Col md={2} className='mt-2'>
      <h4><strong>Daftar Kategori</strong></h4>
      <hr />
      <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
     </Col>
    )
  }
}
