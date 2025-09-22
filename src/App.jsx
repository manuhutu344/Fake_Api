import NavbarComponent from './component/NavbarComponent'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Product from './Page/Product'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import ListCategories from './component/ListCategories'
import Hasil from './component/Hasil'

function App() {

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
          </Col>
          <Hasil />
        </Row>
        </Container>
      </div>
    </div>
  )
}

export default App
