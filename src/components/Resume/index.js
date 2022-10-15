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


function Resume() {

    return (
        <section className="my-5" >
            <h1 id="resume">Web Development Resume</h1>

            <div className="my-2">
                <h2> 
                Colin Nebula
                
                </h2>
                <h4>Full Stack Developer</h4>
                <br />
                <p>
                    To become industry standard, we learned to utilize a variety of industry tools to add to our skill set.
                    Some of these tools include:

                    <br />
                    <br />
                   <FaHtml5/>HTML | <FaCss3Alt/>CSS | <FaJsSquare/>JavaScript | AJAX | <FaBootstrap/>Bootstrap | Rest  | MYSQL | NoSQL | <FaReact/>React | MERN | 
                   MongoDB | SQL | JQuery | <FaGithub/>Git | Responsive Design | DOM | Progressive Web Applications (PWA) | 
                   <FaNode/>Node.js | Express.js | Object Relational Mapping(ORM) | <FaReact/>React Font end Framework | Redux | Model View Controller(MVC) | IndexedDB | <FaNpm/>NPM


                   <br />
                   <br />
                   <h2>Recent Projects</h2>
                   <br />
                   <h4>Enviro-Dashboard</h4>
                   Working and collaborating with peers online through Zoom. 
                   Conceptualizing the project together as a team. 
                   Create an MVP within limited time constraints to meet deadlines.
                   Utilizing the GitHub workflow.
                   <br />
                   <br />
                   <h4> Tools and technologies used:</h4>
                   <FaHtml5/>HTML, | Bulma, <FaCss3Alt/>CSS, | <FaJsSquare/>JavaScript, | <FaNode/>Node.js, | MySQL, | Handlebars, | Express, | Bcrypt, | Dotenv
                   <br />
                   <a href={"https://theteam33333.github.io/enviro-dashboard/"}>
                        <h6>Enviro-Dashboard</h6>
                        <a href="https://github.com/theteam33333/enviro-dashboard/"><i class="<FaGithub/>" aria-hidden="true"></i>&nbsp;GitHub</a>
                        <FaGithub/>
                   </a>
                </p>

                <br />

                   <h4>The Squid Store</h4>
                   Another Team collaboration with peers online through Zoom. 
                   Conceptualizing the project together as a team. 
                   Create a web application while utilizing GitHub to save different versions of the project.
                   <br />
                   <br />
                   <h4> Tools and technologies used:</h4>
                   <FaHtml5/>HTML, | <FaCss3Alt/>CSS, | MERN Stack E-commerce, | JWX, <FaJsSquare/>JavaScript, | <FaNode/>Nodejs, | MongoDB, | Express, | Bcrypt, | GraphQL, | Stripe, | <FaNpm/>NPM
                <br />
                   
                   <a href={'https://thesquidstore.herokuapp.com/'}>
                        <h6>The Squid Store</h6>
                        <a href="https://github.com/TPhondeth/the-squid-store"><i class="<FaGithub/>" aria-hidden="true"></i>&nbsp;GitHub</a>
                        <FaGithub/>
                   </a>
                <br />
                

                <a href={myResume}download>
                    <h6><FaCloudDownloadAlt/>Resume Download</h6>
                </a>
                
            </div>
            
        </section>
    )
}

export default Resume;