import React from 'react'
import {  
	FaGithub, 
	FaHtml5, 
	FaCss3Alt, 
	FaJsSquare, 
	FaNode, FaReact, 
	FaNpm, 
} 
from "react-icons/fa";

import { Carousel } from "react-bootstrap"
export default function BootstrapCarousel() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
        src="https://cdn.trinikid.com/528381/uploads/38e5f970-fc24-11eb-b392-4f45852d76ba_800_420.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>The Squid Store</h3>
        <p>Final Project: MERN Stack E-commerce. A team collaboration <FaHtml5/>HTML, <FaGithub/>Git, <FaNpm/>NPM, <FaReact/>React, <FaCss3Alt/>CSS, <FaJsSquare/>Javascript, RESTful, Express.js, Handlebars.je, GraphQL.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
        src="https://wwf.ca/wp-content/uploads/2021/03/Small_WW222125.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Enviro Dashboard</h3>
        <p>Team collaboration project. Global warming awareness. <FaHtml5/>HTML, <FaCss3Alt/>CSS, <FaGithub/>Git, <FaJsSquare/>Javascript, <FaNode/>Node.js, MySQL, Handlebars, Express, Bcrypt, Dotenv</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.5bestthings.com%2Fwp-content%2Fuploads%2F2019%2F11%2FBusiness-Tasks-1024x630.jpg&f=1&nofb=1&ipt=d7fc15611ada8f99d0e4300425305acd8420e150746eb39a80dd86625194cbbb&ipo=images"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Task Master Pro</h3>
        <p>Front End Development: <FaHtml5/>HTML, <FaCss3Alt/>CSS, <FaGithub/>Git, <FaJsSquare/>Javascript, <FaNode/>Node.js, MySQL, Handlebars, Express, Bcrypt, Dotenv</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
        src="https://donorbox.org/nonprofit-blog/wp-content/uploads/2019/12/high-angle-budget-wooden-blocks-scaled.jpg"
        alt="Fourth slide"
      />
  
      <Carousel.Caption>
        <h3>Budget Tracker</h3>
        <p>Track your budget with ease. The PWA Budget Tracker is great. <FaJsSquare/>Javascript, <FaCss3Alt/>CSS, <FaGithub/>Git, <FaHtml5/>HTML and server side APIs. </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fsagacity%2Fimage%2Fupload%2Fc_crop%2Ch_2832%2Cw_4256%2Cx_0%2Cy_0%2Fc_limit%2Cdpr_auto%2Cf_auto%2Cfl_lossy%2Cq_80%2Cw_1080%2Fshutterstock_305219333_x8rizo.jpg&f=1&nofb=1&ipt=28ef8f738f7adc1cdbc2e72c137ff84c9f4452b1c4b3513fefc42aa662862e8a&ipo=images"
        alt="Fifth slide"
      />
      <Carousel.Caption>
        <h3>The Redux Store</h3>
        <p>Shop Shop is a MERN stack E-commerce. <FaHtml5/>HTML, <FaCss3Alt/>CSS, <FaGithub/>Git, <FaJsSquare/>Javascript, RESTful, Express.js, Handlebars.je, GraphQL.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
        src="https://cioafrica.co/wp-content/uploads/2022/05/Password-Policies.jpg"
        alt="sixth slide"
      />
      <Carousel.Caption>
        <h3>Password Generator</h3>
        <p>The Password Generator is a small app which generates a password quickly. <FaJsSquare/>Javascript, <FaHtml5/>HTML, <FaGithub/>Git, <FaCss3Alt/>CSS.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftownsquare.media%2Fsite%2F625%2Ffiles%2F2016%2F05%2FThe-Notorious-Big-Facebook.jpg%3Fw%3D1200%26h%3D0%26zc%3D1%26s%3D0%26a%3Dt%26q%3D89&f=1&nofb=1&ipt=ad24fb82161677f94a8efb83a43b41e91c40dd99326bec24925569641bab11fa&ipo=images"
        alt="seventh slide"
      />
  
      <Carousel.Caption>
        <h3>Tribute To B.I.G</h3>
        <p>The Notorious B.I.G chillin. Best rapper dead or alive. <FaHtml5/>HTML, <FaCss3Alt/>CSS, <FaGithub/>Git</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

