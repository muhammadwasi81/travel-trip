import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../../index.css'

export default function Explore() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} className="mt-3 p-5">
            <img
              src="/images/Thousand-02 1.png"
              alt="thousand-02"
              className="w-100 h-100"
            />
          </Col>
          <Col sm={12} md={6} className="mt-5 p-5">
            <p className="h1 text-capitalize">A new way to explore the world</p>
            <p className="mt-4 lh-5 text-md-start">
              For decades travellers have reached for Lonely Planet books when
              looking to plan and execute their perfect trip, but now, they can
              also let Lonely Planet Experiences lead the way
            </p>
            <Button id="btn-register" className="mt-5 text-capitalize">
              Learn More
            </Button>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
