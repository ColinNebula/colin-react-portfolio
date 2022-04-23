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
        <p>Final Project done using the MERN Stack. The was also a successful team collaboration project with other developers.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://pixfeeds.com/images/22/530032/1200-73133561-coal-power-station.jpg"
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
        src="https://www.cmontenegro.net/assets/images/budget-tracker-image.png"
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
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pcmag.com%2Fimagery%2Farticles%2F06r3O9TGIbCXQhR7C69f1vE-10.1617039239.fit_lim.jpg&f=1&nofb=1"
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

