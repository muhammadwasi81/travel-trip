import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Destination() {
  return (
    <>
      <Container>
        <Row>
          <Col md={10}>
            <h2>Trending Stories</h2>
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
            <Card className="border-0">
              <Card.Img variant="top" src="/images/image 12.png" />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: '12px' }}
                  className="text-capitalize font-weight-bold"
                >
                  The many benefits of taking a healing holiday
                </Card.Title>
                <Card.Text>
                  ‘Helaing holidays’ are on the rise tohelp maximise your health
                  and happines...
                </Card.Text>
                <Button id="read__more_btn">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="my-3">
            <Card className="border-0">
              <Card.Img variant="top" src="/images/image 13.png" />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: '12px' }}
                  className="text-capitalize font-weight-bold"
                >
                  The best Kyoto restaurant to try Japanese food
                </Card.Title>
                <Card.Text>
                  From tofu to teahouses, here’s our guide to Kyoto’s best
                  restaurants to visit...
                </Card.Text>
                <Button id="read__more_btn">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="my-3">
            <Card className="border-0">
              <Card.Img variant="top" src="/images/image 14.png" />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: '12px' }}
                  className="text-capitalize font-weight-bold"
                >
                  Skip Chichen Itza and head to this remote Yucatan
                </Card.Title>
                <Card.Text>
                  From tofu to teahouses, here’s our guide to Kyoto’s best
                  restaurants to visit...
                </Card.Text>
                <Button id="read__more_btn">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="my-3">
            <Card className="border-0">
              <Card.Img variant="top" src="/images/image 15.png" />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: '12px' }}
                  className="text-capitalize font-weight-bold"
                >
                  Surf’s up at these beginner spots around the world
                </Card.Title>
                <Card.Text>
                  If learning to surf has in on your to- do list for a while,
                  the good news is: it’s never too late...
                </Card.Text>
                <Button id="read__more_btn">Read More</Button>
              </Card.Body>
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
