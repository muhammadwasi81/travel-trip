import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiTwitter } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer>
        <Container fluid style={{ backgroundColor: '#F9F9FB' }}>
          <Container>
            <Row>
              <Col md={6} sm={12} className="my-5">
                <img src="/images/element2.png" alt="ellipse" />
                <p className="my-3">
                  Plan and book your perfect trip with expert advice, travel
                  tips destination information from us
                </p>
                <p className="my-4 fs-5">
                  &copy; {new Date().getFullYear()} Thousand Sunny. All rights
                  reserved
                </p>
              </Col>
              <Col md={6} sm={12} className="my-5 text-sm-left">
                <Row>
                  <Col md={4} sm={12} sm={12} className="p-0">
                    <ul>
                      <h5 className="title">Destinations</h5>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Africa
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Antarctica
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Asia
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Europe
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          America
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} sm={12} sm={12} className="p-0">
                    <ul>
                      <h5 className="title">Shop</h5>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Destination Guides
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Pictorial & Gifts
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Special Offers
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Delivery Times
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} sm={12} sm={12} className="p-0">
                    <ul>
                      <h5 className="title">Interests</h5>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Adventure Travel
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Art and Culture
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Wildlife And Nature
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Family Holidays
                        </a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" className="text-decoration-none">
                          Food and Drink
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <div
              className="d-flex justify-content-center"
              style={{ cursor: 'pointer' }}
            >
              <span className="mr-3 text-black fs-3 p-2">
                <FiTwitter />{' '}
              </span>
              <span className="mr-3 text-black fs-3 p-2">
                <BsInstagram />{' '}
              </span>
              <span className="mr-3 text-black fs-3 p-2">
                <FaFacebookF />{' '}
              </span>
              <span className="mr-3 text-black fs-3 p-2">
                <FaLinkedinIn />{' '}
              </span>
              <span className="mr-3 text-black fs-3 p-2">
                <FaYoutube />{' '}
              </span>
            </div>
          </Container>
        </Container>
      </footer>
    </>
  )
}
