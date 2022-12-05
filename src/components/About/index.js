import React from 'react';
import cNebula from "../../assets/images/c-nebula.jpg";
import { Button, Card, Container, Col, Row, Image } from 'react-bootstrap';

function About(props) {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="bg-dark text-white" style={{ width: '30rem' }}>
            <Card.Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UqmbTVnNzHJt0VRJ2FQwPwHaD5%26pid%3DApi&f=1&ipt=1e636f784b2a86208c855ce17853192dd34c2464047f8803b8b4ba0aa6e5469f&ipo=images/100px270" className="rounded" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="text-white"> Full Stack Web Developer</Card.Title>
              <h1>
                Hi, my name is
                Colin Nebula
              </h1>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-light shadow-lg rounded" style={{ width: '30rem' }}>
            <Card.Img variant="top" className="rounded" src={cNebula} fluid alt="C Nebula" />
            <Card.Body>
              <Card.Header>Full Stack Developer</Card.Header>
              <Card.Text>
                As a self starter who loves being part of a team as well, I bring discipline and
                rigour from my years serving the US Military. This, in addition to my numerous diplomas
                in digital art, technology, animation, and now coding, have helped me reach my present
                position where I hope to develop websites.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline-danger" href="/portfolio">Go to portfolio

              </Button>
            </Card.Footer>

          </Card>
        </Col>
      </Row>
    </Container>


  )
}

export default About;