import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from "../assets/data/products"

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css"


import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero22.jpg";

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import counterImg from "../assets/images/cc.jpg"
import Clock from '../components/UI/Clock';



const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestsSalesProducts, setBestsSalesProducts] = useState([])
  const [gucciproducts, setGucciProducts] = useState([])
  const [newproducts, setNewProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])


  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item=> item.category ==="CHANEL");

    const filteredBestSalesProducts = products.filter(item=> item.category ==="Bestsales");

    const filteredGucciProducts = products.filter(item=> item.category ==="gucci");

    const filteredNewProducts = products.filter(item=> item.category ==="new");

    const filteredPopularProducts = products.filter(item=> item.category ==="creed");
    
    setTrendingProducts(filteredTrendingProducts);
    setBestsSalesProducts(filteredBestSalesProducts);
    setGucciProducts(filteredGucciProducts);
    setNewProducts(filteredNewProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
   return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6' >
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Find Your Signature Scent At ScentShop </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sunt modi sit explicabo aliquam tempore impedit, nemo natus minima quisquam!</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6' >
              <div className="hero__img">
                <img src={heroImg} alt="" height={300} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center" >
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
        <Row>
            <Col lg="12" className="text-center" >
              <h2 className="section__title">Best Sales</h2>
            </Col>

            <ProductsList data={bestsSalesProducts} />
          </Row>  
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">

              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                <h3 className="text-white fs-5">Quality Perfumes</h3>
              </div>
              <Clock />

              <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn "><Link to="/shop">Visit Store</Link></motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
          <Col lg="12" className="text-center mb-5" >
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={gucciproducts} />
            <ProductsList data={newproducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <Container>
          <Row>
          <Col lg="12" className="text-center mb-5" >
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
            
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home