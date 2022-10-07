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
                <p>
                   <FaHtml5/>HTML | <FaCss3Alt/>CSS | <FaJsSquare/>JavaScript | AJAX | <FaBootstrap/>Bootstrap | Rest | MYSQL | NodeJs | NoSQL | <FaReact/>React | MERN | 
                   MongoDB | SQL | JQuery | <FaGithub/>Git | Responsive Design | DOM | Progressive Web Applications (PWA) | 
                   <FaNode/>Node.js | Express.js | Object Relational Mapping(ORM) | <FaReact/>React | Redux | Model-View-Controller (MVC) | IndexedDB | <FaNpm/>NPM

                </p>

                <a href={myResume}download>
                    <h4>Resume Download<FaCloudDownloadAlt/></h4>
                </a>
                
            </div>
            
        </section>
    )
}

export default Resume;