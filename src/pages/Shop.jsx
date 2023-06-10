import React, {useState} from 'react'

import CommonSection from '../components/UI/CommonSection'
import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col } from 'reactstrap'
import "../styles/shop.css"

import products from "../assets/data/products"

import ProductLists from "../components/UI/ProductsList"

const Shop = () => {


const [productsData, setProductsData] = useState(products)

const handleFilter = e=>{

  const filterValue = e.target.value
    if(filterValue==="creed"){
      const filteredProducts = products.filter(item=> item.category==="creed")

      setProductsData(filteredProducts);
    }

    if(filterValue==="gucci"){
      const filteredProducts = products.filter(item=> item.category==="gucci")

      setProductsData(filteredProducts);
    }

    if(filterValue==="CHANEL"){
      const filteredProducts = products.filter(item=> item.category==="CHANEL")

      setProductsData(filteredProducts);
    }

    if(filterValue==="new"){
      const filteredProducts = products.filter(item=> item.category==="new")

      setProductsData(filteredProducts);
    }

    if(filterValue==="Bestsales"){
      const filteredProducts = products.filter(item=> item.category==="Bestsales")

      setProductsData(filteredProducts);
    }


};


const handleSearch = e=>{
  const searchTerm = e.target.value

  const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

  setProductsData(searchedProducts)
}


  return (
  <Helmet title="Shop">
    <CommonSection title="Products" />


    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="creed">Creed</option>
                <option value="gucci">Gucci</option>
                <option value="CHANEL">Chanel</option>
                <option value="new">New</option>
                <option value="Bestsales">Bestsales</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='6' className="text-end">
          <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>

              </select>
            </div>
          </Col>
          <Col lg='6' md='12'>
            <div className="search__box">
              <input type="text" placeholder="search......" onChange={handleSearch} />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="pt-0">
      <Container>
        <Row>
          {productsData.length ===0? (<h1 className="text-center fs-4">No products are found!</h1>)
            : <ProductLists data={productsData}/>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Shop