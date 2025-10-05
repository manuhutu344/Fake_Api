import axios from 'axios'
import { API_URL } from '../utils/constant'
import { Component } from 'react'
import { FaUtensils,FaCoffee,FaCheese } from "react-icons/fa"
import { Col, ListGroup } from 'react-bootstrap'

const Icon = ({nama}) =>{
  if(nama === "Makanan") return <FaUtensils className='mr-2'/>
  if(nama === "Minuman") return <FaCoffee />
  if(nama === "Cemilan") return <FaCheese className='mr-2'/>
  return <FaUtensils className='mr-2'/>
}

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
    const {changeCategory, categoriyangDipilih} = this.props
    return (
     <Col md={2} className='mt-2'>
      <h4><strong>Daftar Kategori</strong></h4>
      <hr />
      <ListGroup>
        {
          categories && categories.map((category)=>(
            <ListGroup.Item key={category.id} onClick={()=>changeCategory(category.nama)}><h5><Icon nama={category.nama} />{category.nama}</h5></ListGroup.Item>
          ))
        }
    </ListGroup>
     </Col>
    )
  }
}
