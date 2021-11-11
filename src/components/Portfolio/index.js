import React, {useState} from "react";
import {Card, Button, Col} from "react-bootstrap";
// import logo from "../../assets/images/github.svg";

function Portfolio(){

    const [project] = useState([
        {
            name: 'City Paws',
            id: 'CityPaws-Img-Element',
            description: 'HTML, JavaScript, Nodejs, MySQL, Express, Bcrypt, Dotenv, Handlebars',
            link: 'href="https://cryptic-cliffs-70545.herokuapp.com/home/',
            github:"https://github.com/project02team05/city-paws"
        },
        {
            name: "Enviro Dashboard",
            id: "EnviroDashboard-Img-Element",
            description: "HTML, Bulma, CSS, JavaScript, Node.js, MySQL, Handlebars, Express, Bcrypt, Dotenv",
            link: "https://lrk83-tech-blog.herokuapp.com/",
            github:"https://theteam33333.github.io/enviro-dashboard/" 
        },
        {
            name: 'Work Day Scheduler',
            id: 'WorkDayScheduler-Img-Element',
            description: 'JavaScript, CSS, HTML, Server Side APIs',
            link: 'a href="https://colinnebula.github.io/work-day-scheduler/',
            github: 'https://github.com/ColinNebula/work-day-scheduler'
        },
        {
            name: "Regex Tutorial",
            id: "RegexTutorial-Img-Element",
            description: "HTML",
            link: 'https://gist.github.com/ColinNebula',
            github: 'https://github.com/ColinNebula/colin-regex-tutorial'
        },
        {   
            name: "PWA Budget Tracker",
            id: "PWABudgetTracker-Img-Element",
            description: "HTML, JavaScript, CSS, Bootstrap, JQuery",
            link: "https://polar-sierra-11567.herokuapp.com//",
            github: "https://github.com/ColinNebula/colin-pwa-budget-tracker"

        },
        {
            name: "Note Taker",
            id: "NoteTaker-Img-Element",
            description: "JavaScript, HTML, CSS",
            link:"https://pure-basin-29870.herokuapp.com/ deployed to Heroku",
            github:"https://github.com/ColinNebula/colin-note-taker"
        },
        {
            name: "Password Generator",
            id: "PasswordGenerator-Img-Element",
            description: "JavaScript, HTML, CSS",
            link:"https://colinnebula.github.io/C-3-Password-Generator/",
            github:"https://github.com/ColinNebula/C-3-Password-Generator"
        },
    ])

    return(
        <div>
            <h2 className="my-projects">
                Projects
                </h2>
        <section className="my-3" >
        <div className="portfolio-div">
            {project.map((example, i)=>(
                <Card key={example.name} id={example.id} className="ProjectCard">
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
                        <a href={example.github} className="github-link">
                        </a>
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