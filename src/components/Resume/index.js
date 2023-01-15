import React, { useState } from 'react';
import myResume from '../../assets/files/resume.PDF';
import {
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaNode, FaReact,
    FaNpm,
    FaCloudDownloadAlt
}
    from "react-icons/fa";
import workStation from '../../assets/images/workStation.png';
import enviroD from '../../assets/images/enviroD.png';
import { Button, Card, Container, Row, Col, NavDropdown, CardGroup, Modal } from 'react-bootstrap';


function Resume() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <Container fluid>
        <h2 class="top-text"> Welcome to Nebula Web Development Resume</h2>
        <p class="top-p"> My name is Colin Nebula and I am a Web Developer and a computer enthusiast. Thank you for visiting my page.
        </p>
        <NavDropdown.Divider />

        <br />
            <Row>
            <div>
      <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Web Development Skills
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          As a full web developer, I have had the opportunity to to learn a variety of tool to add to my skill set.
          <br />
          Some of these tools include:
          <br />
          <br />
          <FaHtml5 />HTML | <FaCss3Alt />CSS | <FaJsSquare />JavaScript | AJAX | <FaBootstrap />Bootstrap | Rest  | MYSQL | NoSQL | <FaReact />React | MERN |
          MongoDB | SQL | JQuery | <FaGithub />Git | Responsive Design | DOM | 
          Progressive Web Applications (PWA) |
          <FaNode />Node.js | Express.js | Object Relational Mapping(ORM) | 
          <FaReact />React Font end Framework | Redux | Model View Controller(MVC) | 
          IndexedDB | <FaNpm />NPM

          </p>
          <Card.Img src="https://images.unsplash.com/photo-1618171889969-0feeb769fe78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="image" 
          alt="Card image" />
        
        </Modal.Body>
      </Modal>
    </>
        </div>
                <Col ms={"auto"}>

                <CardGroup>

                    <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>

                    
                        
                        <Card.Header>
                            Colin Nebula

                        </Card.Header>
                        <Card.Img variant="top" src={workStation} 
                        className="card-image" 
                        alt="Card image"/>
                        <Card.Body>
                        <Card.Title>Full Stack Developer</Card.Title>
                        <br />
                        <Card.Text>
                            To become industry standard, we learned to utilize a variety of industry tools to add to our skill set.

                        </Card.Text>
                        
            
                
                        
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="outline-danger" onClick={() => setLgShow(true)}>View here</Button>{' '}
                        </Card.Footer>
                    </Card>

                   

                    <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
                        <Card.Header>Recent Projects</Card.Header>
                        <Card.Img src={enviroD} className="card-image" 
                        alt="Card image" />
                        <Card.Body>
                            <br />
                            <Card.Title>Enviro-Dashboard</Card.Title>
                            <Card.Text>
                                Working and collaborating with peers online through Zoom.
                                Conceptualizing the project together as a team.
                                Create an MVP within limited time constraints to meet deadlines.
                                Utilizing the GitHub workflow.
                            </Card.Text>

                           
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Button variant="outline-danger" href={"https://theteam33333.github.io/enviro-dashboard/"}>
                                Enviro-Dashboard
                            </Button>

                            <Button variant="outline-danger" href="https://github.com/theteam33333/enviro-dashboard/"><i class="<FaGithub/>" aria-hidden="true"></i>&nbsp;GitHub
                            </Button>
                            
                        </Card.Footer>
                    </Card>
                    
                    </CardGroup>
                    
                    <br />
                    <h2 class="mid-text"> More Collaboration projects through Zoom and Github. </h2>
                    <p class="mid-p"> Here is another successful project done through collaboration with peers.
                     From concept to completion. 
                     <br />
                     Daily meeting with zoom, and utilizing github repository to save versions of our projects through the git workflow.
                    </p>

                    <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
                        <Card.Header>The Squid Store</Card.Header>
                        <Card.Text>
                            Another Team collaboration with peers online through Zoom.
                            Conceptualizing the project together as a team.
                            Create a web application while utilizing GitHub to save different versions of the project.
                        </Card.Text>
                        <br />
                        <Card.Text>
                            <Card.Title> Tools and technologies used:</Card.Title>
                            <FaHtml5 />HTML, | <FaCss3Alt />CSS, | MERN Stack E-commerce, | JWX, <FaJsSquare />JavaScript, | <FaNode />Nodejs, | MongoDB, | Express, | Bcrypt, | GraphQL, | Stripe, | <FaNpm />NPM
                        </Card.Text>
                        <Card.Footer className="text-muted">
                            <a href={'https://thesquidstore.herokuapp.com/'}>
                                <h6>The Squid Store</h6>
                                <Button variant="outline-danger" href="https://github.com/TPhondeth/the-squid-store"><i className="<FaGithub/>" aria-hidden="true"></i>&nbsp;GitHub</Button>
                                <FaGithub />
                            </a>
                            <Button variant="outline-danger" href={myResume}>{myResume.name} <FaCloudDownloadAlt /> Resume</Button>
                            <a href={myResume} download>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <br />
            <NavDropdown.Divider />
        </Container>
    )
}

export default Resume;