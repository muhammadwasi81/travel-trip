import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

export default function Explore() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col xs={12} sm={6}>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h6
              className="my-5"
              style={{
                borderBottom: '5px solid #000000 ',
              }}
            >
              holiday finder
            </h6>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Select
                  style={{ borderRadius: '6px', border: '1px solid #000' }}
                >
                  <option>Location</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                </Form.Select>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Select
                  style={{ borderRadius: '6px', border: '1px solid #000' }}
                >
                  <option>Activity</option>
                  <option>Football</option>
                  <option>Cricket</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="my-4">
              <Col xs={12} sm={6}>
                <Form.Select
                  style={{ borderRadius: '6px', border: '1px solid #000' }}
                >
                  <option>Grade</option>
                  <option>A</option>
                  <option>B</option>
                </Form.Select>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Select
                  style={{ borderRadius: '6px', border: '1px solid #000' }}
                >
                  <option>Date</option>
                  <option>23/12/2022</option>
                  <option>23/12/2022</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
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
