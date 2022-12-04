import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import {
    FaGithub,

}
    from "react-icons/fa";



function Portfolio() {

    const [project] = useState([
        {
            name: 'The Squid Store',
            id: 'TheSquidStore-Img-Element',
            description: 'MERN Stack E-commerce, JWX, JavaScript, Nodejs, MongoDB, Express, Bcrypt, GraphQL, Stripe',
            link: 'https://thesquidstore.herokuapp.com/',
            github: "https://github.com/TPhondeth/the-squid-store"
        },
        {
            name: "Enviro Dashboard",
            id: "EnviroDashboard-Img-Element",
            description: "HTML, Bulma, CSS, JavaScript, Node.js, MySQL, Handlebars, Express, Bcrypt, Dotenv",
            link: "https://theteam33333.github.io/enviro-dashboard/",
            github: "https://github.com/theteam33333/enviro-dashboard/"
        },
        {
            name: "PWA Budget Tracker",
            id: "PWABudgetTracker-Img-Element",
            description: "HTML, JavaScript, CSS, Bootstrap, JQuery",
            link: "https://polar-sierra-11567.herokuapp.com//",
            github: "https://github.com/ColinNebula/colin-pwa-budget-tracker"

        },
        {
            name: "Password Generator",
            id: "PasswordGenerator-Img-Element",
            description: "JavaScript, HTML, CSS",
            link: "https://colinnebula.github.io/C-3-Password-Generator/",
            github: "https://github.com/ColinNebula/C-3-Password-Generator",
        },
        {
            name: "The Redux Store",
            id: "TheReduxStore-Img-Element",
            description: "MERN Stack E-commerce, JavaScript, HTML, CSS",
            link: "https://agile-citadel-05491.herokuapp.com/",
            github: "https://github.com/ColinNebula/colin-redux-store/tree/main"
        },
        {
            name: "Model View Controller",
            id: "ModelViewController-Img-Element",
            description: "Front-end Development: JavaScript, HTML, CSS, Jest, DotEnv, Sequelize, MySQL, Express, Express Handlebars",
            link: "https://protected-fjord-97128.herokuapp.com/",
            github: "https://github.com/ColinNebula/colin-model-view-controller/tree/main",
        },
        {
            name: "Application Registration Form",
            id: "ApplicationRegistrationForm-Img-Element",
            description: "HTML, CSS",
            link: "https://colinnebula.github.io/application-registration-page/",
            github: "https://github.com/ColinNebula/application-registration-page"
        },
        {
            name: "Tribute To B.I.G",
            id: "TributeToBig-Img-Element",
            description: "HTML, CSS",
            link: "https://colinnebula.github.io/tribute-to-big/",
            github: "https://github.com/ColinNebula/tribute-to-big"
        },
        {
            name: "Regex Tutorial",
            id: "RegexTutorial-Img-Element",
            description: "Tutorial: HTML, GitHub Gist",
            link: 'https://gist.github.com/ColinNebula',
            github: 'https://github.com/ColinNebula/colin-regex-tutorial'
        },
        {
            name: 'Work Day Scheduler',
            id: 'WorkDayScheduler-Img-Element',
            description: 'JavaScript, CSS, HTML, Server Side APIs',
            link: 'https://colinnebula.github.io/work-day-scheduler/',
            github: 'https://github.com/ColinNebula/work-day-scheduler'
        },
        {
            name: "Taskinator",
            id: "Taskinator-Img-Element",
            description: "Front-end Development: JavaScript, HTML, CSS, DOM",
            link: "https://colinnebula.github.io/taskinator/",
            github: "https://github.com/ColinNebula/taskinator/tree/main",
        },
        {
            name: "Taskmaster Pro",
            id: "TaskmasterPro-Img-Element",
            description: "Front-end Development: JavaScript, HTML, CSS, DOM",
            link: "https://colinnebula.github.io/taskmaster-pro/",
            github: "https://github.com/ColinNebula/taskmaster-pro/tree/main",
        },


    ])

    return (
        <div>
            <h2 className="my-projects">
                Projects
            </h2>
            <section className="my-3" >
                <div className="overflow portfolio-div">
                    {project.map((example, i) => (
                        <Card key={example.name} id={example.id} className="ProjectCard" style={{ color: "#000"}}>
                            <Col className="img-col">
                                <div className="img-class" ></div>
                            </Col>
                            <Card.Body>
                                <Col>
                                    <Card.Text>
                                        {example.description}
                                    </Card.Text>
                                </Col>
                                <div>
                                    <Button class="primary" href={example.link}>{example.name}</Button>

                                    <Button class="primary" href={example.github}>{example.github.name} <FaGithub /> GitHub</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Portfolio;