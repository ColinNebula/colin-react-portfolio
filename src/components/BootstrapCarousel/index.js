import React from 'react'

import { Carousel } from "react-bootstrap"
export default function BootstrapCarousel() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.trinikid.com/528381/uploads/38e5f970-fc24-11eb-b392-4f45852d76ba_800_420.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Squid Store Project</h3>
        <p>Final Project done using the MERN Stack. This project was a successful team collaboration project with other developers.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wwf.ca/wp-content/uploads/2021/03/Small_WW222125.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Enviro Dashboard</h3>
        <p>A group collaboration project. An attempt at global warming awareness.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://donorbox.org/nonprofit-blog/wp-content/uploads/2019/12/high-angle-budget-wooden-blocks-scaled.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Budget Tracker</h3>
        <p>Track your budget with ease. The PWA Budget Tracker is great. Created using Javascript, CSS, HTML and server side APIs. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cioafrica.co/wp-content/uploads/2022/05/Password-Policies.jpg"
        alt="Fourth slide"
      />
      <Carousel.Caption>
        <h3>Password Generator</h3>
        <p>The Password Generator is a small app which generates a password quickly. It was created using Javascript, HTML and CSS.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

