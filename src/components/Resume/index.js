import React from 'react';
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
import { Button, Card, Container, Row, Col } from 'react-bootstrap';


function Resume() {

    return (
        <Container fluid>
            <Row>
                <Col ms={"auto"}>

                    <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>

                        <h1 id="resume">Web Development Resume</h1>


                        <Card.Header>
                            Colin Nebula

                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Full Stack Developer</Card.Title>
                        <br />
                        <Card.Text>
                            To become industry standard, we learned to utilize a variety of industry tools to add to our skill set.
                            Some of these tools include:

                        </Card.Text>
                        <br />
                        <Card.Text>
                            <FaHtml5 />HTML | <FaCss3Alt />CSS | <FaJsSquare />JavaScript | AJAX | <FaBootstrap />Bootstrap | Rest  | MYSQL | NoSQL | <FaReact />React | MERN |
                            MongoDB | SQL | JQuery | <FaGithub />Git | Responsive Design | DOM | Progressive Web Applications (PWA) |
                            <FaNode />Node.js | Express.js | Object Relational Mapping(ORM) | <FaReact />React Font end Framework | Redux | Model View Controller(MVC) | IndexedDB | <FaNpm />NPM
                        </Card.Text>
                        </Card.Body>
                    </Card>
                

                    <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
                        <Card.Header>Recent Projects</Card.Header>
                        <Card.Body>
                            <br />
                            <Card.Title>Enviro-Dashboard</Card.Title>
                            <Card.Text>
                                Working and collaborating with peers online through Zoom.
                                Conceptualizing the project together as a team.
                                Create an MVP within limited time constraints to meet deadlines.
                                Utilizing the GitHub workflow.
                            </Card.Text>

                            <br />
                            <Card.Text>
                                <Card.Title> Tools and technologies used:</Card.Title>
                                <FaHtml5 />HTML, | Bulma, <FaCss3Alt />CSS, | <FaJsSquare />JavaScript, | <FaNode />Node.js, | MySQL, | Handlebars, | Express, | Bcrypt, | Dotenv
                            </Card.Text>
                            <br />
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Button variant="outline-danger" href={"https://theteam33333.github.io/enviro-dashboard/"}>
                                <h6>Enviro-Dashboard</h6>
                            </Button>

                            <Button variant="outline-danger" href="https://github.com/theteam33333/enviro-dashboard/"><i class="<FaGithub/>" aria-hidden="true"></i>&nbsp;GitHub
                            </Button>
                            
                        </Card.Footer>
                    </Card>

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
                        <Card.Footer className="text-muted">2 days ago
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
        </Container>
    )
}

export default Resume;