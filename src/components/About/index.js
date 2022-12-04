import React from 'react';
import coverImage from "../../assets/images/c-nebula.jpg";
import {Image} from "react-bootstrap";
import { Button, Card, Container, Col, Row }  from 'react-bootstrap';

function About(props) {
  const { currentTab, setCurrentTab } = props;
  return (
    <Container fluid>
      <Row>
      <Col ms={3}>
      <section className="my-5" >
          <h1 id="about">Hi, my name is 
      
          Colin Nebula</h1>
          <h3> Full Stack Web Developer</h3>
          
          
      </section>

      
      <Card className="bg-dark text-light shadow-lg " style={{ width: '40rem' }}>
      <Card.Img variant="top" src={coverImage} className=""alt="C Nebula"/>
      <Card.Body>
        <Card.Title>Full Stack Developer</Card.Title>
        <Card.Text>
        As a self starter who loves being part of a team as well, I bring discipline and 
        rigour from my years serving the US Military. This, in addition to my numerous diplomas
         in digital art, technology, animation, and now coding, have helped me reach my present 
         position where I hope to develop websites.
        </Card.Text>
        <Button variant="primary" className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
        <span onClick={() => setCurrentTab("portfolio")}>Go to portfolio</span>
        </Button>
      </Card.Body>
    </Card>

    
    </Col>
    </Row>
    </Container>

    
  )
}

export default About;