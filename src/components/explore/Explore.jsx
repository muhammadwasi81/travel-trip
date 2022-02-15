import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../../index.css'

export default function Explore() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} className="p-5 my-5">
            <h1>Explore and travel</h1>
            <h6 className="my-5" id="explore__border">
              holiday finder
            </h6>
            <Row>
              <Col sm={12} md={6} className="my-3">
                <Form.Select
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #AFB0B9',
                    color: '#000000',
                  }}
                >
                  <option>Location</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                </Form.Select>
              </Col>
              <Col sm={12} md={6} className="my-3">
                <Form.Select
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #AFB0B9',
                    color: '#000000',
                  }}
                >
                  <option>Activity</option>
                  <option>Football</option>
                  <option>Cricket</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} className="my-3">
                <Form.Select
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #AFB0B9',
                    color: '#000000',
                  }}
                >
                  <option>Grade</option>
                  <option>A</option>
                  <option>B</option>
                </Form.Select>
              </Col>
              <Col sm={12} md={6} className="my-3">
                <Form.Select
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #AFB0B9',
                    color: '#000000',
                  }}
                >
                  <option>Date</option>
                  <option>23/12/2022</option>
                  <option>23/12/2022</option>
                </Form.Select>
              </Col>
              <Button id="btn-register" className="mt-5 ml-2 text-capitalize">
                Register
              </Button>
            </Row>
          </Col>
          <Col sm={12} md={6} className="p-5 my-5">
            <img
              src="/images/thousand-01 1.png"
              alt="thousand-01"
              className="w-100 h-100"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
