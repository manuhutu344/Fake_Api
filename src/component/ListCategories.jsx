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
    const {categories} = this.state
    return (
     <Col md={2} className='mt-2'>
      <h4><strong>Daftar Kategori</strong></h4>
      <hr />
      <ListGroup>
        {
          categories && categories.map((category)=>(
            <ListGroup.Item>{category.nama}</ListGroup.Item>
          ))
        }
    </ListGroup>
     </Col>
    )
  }
}
