import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../../index.css'

export default function Guides() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} className="mt-5 p-5">
            <p className="h1 text-capitalize">Guides by Thousand Sunny</p>
            <p className="mt-4 lh-5 text-md-start">
              Packed with tips and advice from our on-the-ground experts, our
              city guides app (iOS and Android) is the ultimate resource before
              and during a trip.
            </p>
            <Button id="btn-register" className="mt-5 text-capitalize">
              Download
            </Button>
            <Row></Row>
          </Col>
          <Col sm={12} md={6} className="mt-3 p-5">
            <img
              src="/images/mobile.png"
              alt="thousand-02"
              className="w-100 h-100"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
