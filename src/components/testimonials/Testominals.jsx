import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../index.css'

export default function Testimonials() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} className="mt-5 p-5">
            <p className="h1 text-capitalize">Testimonials</p>
            <div className="d-flex my-5" style={{ color: '#FFBB0C' }}>
              <span className="material-icons ml-1">star</span>
              <span className="material-icons ml-1">star</span>
              <span className="material-icons ml-1">star</span>
              <span className="material-icons ml-1">star</span>
              <span className="material-icons ml-1">star</span>
            </div>
            <p className="mt-0 lh-5 text-black font-weight-bold">
              “Quisque in lacus a urna fermentum euimdod. Integer mi nibh,
              dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit
              amet turpis nec”
            </p>
            <div className="my-3">
              <strong className="font-weight-bold text-black mt-5">
                Edward Newgate
              </strong>
              <p className="mt-3">Founder Circle</p>
            </div>
          </Col>
          <Col sm={12} md={6} className="mt-3 p-5">
            <div style={{ position: 'relative' }}>
              <div
                className="p-2"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  background: '#ffffff',
                  borderRadius: '8px 0 0 0',
                  cursor: 'pointer',
                }}
              >
                <span className="material-icons mr-2">play_circle</span>
                <span className="material-icons mr-2">play_circle</span>
              </div>
              <img
                src="/images/person.png"
                alt="thousand-02"
                className="w-100 h-100"
                style={{ borderRadius: '8px' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
