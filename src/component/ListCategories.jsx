import axios from 'axios'
import { API_URL } from '../utils/constant'

import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

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
     </Col>
    )
  }
}
