import React from 'react'
import "./footer.css"

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4">
          <div className="logo">
          <div>
            <h1 className="text-white">ScentShop</h1>
          </div>
         </div>
         <p className="footer__text mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore eum corrupti facilis hic architecto assumenda quis exercitationem ea dolorum.
          </p>
          </Col>

          <Col lg="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Dior</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Creed</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Gucci</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Tom Ford</Link>
                </ListGroupItem>
              </ListGroup>
              
            </div>
          </Col>

          <Col lg="2" className="mb-4">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__quick-links">
            <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>343 Ughelli, Delta State, Nigeria</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  <p>+2348119609319</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-mail-line"></i></span>
                  <p>cephaspeter37@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12" className="mb-4">
            <p className="footer__copyright">Copyright {year} developed by Ibuanokpe Peter & Colette Chioma. All rights Reserved. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer