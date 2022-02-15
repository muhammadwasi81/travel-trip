import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Destination() {
  return (
    <>
      <Container>
        <Row>
          <Col md={10}>
            <h2>Featured destinations</h2>
          </Col>
          <Col md={2}>
            <p
              style={{ color: '#fb8f1d', cursor: 'pointer' }}
              className="font-weight-bold"
            >
              View all &gt;{' '}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12} className="my-3">
            <Card>
              <div style={{ position: 'relative' }}>
                <p
                  style={{
                    bottom: 0,
                    position: 'absolute',
                    background: '#ffffff',
                    borderRadius: '0 6px 0 0',
                    color: '#042521',
                  }}
                  className="p-2 m-0 font-weight-bold"
                >
                  Raja Ampat <br />{' '}
                  <span className="text-muted">Indonesia</span>
                </p>
                <Card.Img variant="top" src="/images/image 4.png" />
              </div>
            </Card>
          </Col>
          <Col md={3} sm={12} className="my-3">
            <Card>
              <div style={{ position: 'relative' }}>
                <p
                  style={{
                    bottom: 0,
                    position: 'absolute',
                    background: '#ffffff',
                    borderRadius: '0 6px 0 0',
                    color: '#042521',
                  }}
                  className="p-2 m-0 font-weight-bold"
                >
                  Fanjingshan China <br />{' '}
                  <span className="text-muted">China</span>
                </p>
                <Card.Img variant="top" src="/images/fangistan.png" />
              </div>
            </Card>
          </Col>
          <Col md={3} sm={12} className="my-3">
            <Card>
              <div style={{ position: 'relative' }}>
                <p
                  style={{
                    bottom: 0,
                    position: 'absolute',
                    background: '#ffffff',
                    borderRadius: '0 6px 0 0',
                    color: '#042521',
                  }}
                  className="p-2 m-0 font-weight-bold"
                >
                  Vevey <br /> <span className="text-muted">switzerland</span>
                </p>
                <Card.Img variant="top" src="/images/vevey.png" />
              </div>
            </Card>
          </Col>
          <Col md={3} sm={12} className="my-3">
            <Card>
              <div style={{ position: 'relative' }}>
                <p
                  style={{
                    bottom: 0,
                    position: 'absolute',
                    background: '#ffffff',
                    borderRadius: '0 6px 0 0',
                    color: '#042521',
                  }}
                  className="p-2 m-0 font-weight-bold"
                >
                  Skadar <br /> <span className="text-muted">Montenegro</span>
                </p>
                <Card.Img variant="top" src="/images/skadar.png" />
              </div>
            </Card>
          </Col>
          <Col sm={12} className="d-flex justify-content-center my-2">
            <img src="/images/element2.png" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
