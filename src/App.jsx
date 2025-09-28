import NavbarComponent from './component/NavbarComponent'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Product from './Page/Product'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import ListCategories from './component/ListCategories'
import Hasil from './component/Hasil'
import {API_URL} from "./utils/constant"
import axios from 'axios'

import React, { Component } from 'react'
import Menus from './component/Menus'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menus: []
    }
  }
  componentDidMount(){
    axios 
    .get(API_URL + "products")
    .then((res)=>{
      const menus = res.data
      this.setState({menus})
    })
    .catch((error)=>{
      console.log("Error yaa", error)
    })
  }
  render() {
    const {menus} = this.state
    return (
      <div className="App">
      <NavbarComponent />
      <div className='mt-3'>
        <Container fluid>
        <Row>
          <ListCategories />
          <Col>
            <h4><strong>Daftar Produk</strong></h4>
            <hr />
            <Row>
              {
                menus && menus.map((menu)=>(
                  <Menus key={menu.id} menu={menu} />
                ))
              }
            </Row>
          </Col>
          <Hasil />
        </Row>
        </Container>
      </div>
    </div>
    )
  }
}
