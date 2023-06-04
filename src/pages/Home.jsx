import React from 'react'

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img.png"



const Home = () => {

  const year = new Date().getFullYear()
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6' >
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year} </p>
                <h2>Find Your Signature Scent At ScentShop </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sunt modi sit explicabo aliquam tempore impedit, nemo natus minima quisquam!</p>

                <button className="buy__btn">SHOP NOW</button>
              </div>
            </Col>

            <Col lg='6' md='6' >
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home