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
        src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fbelieve.earth%2Fwp-content%2Fuploads%2F2018%2F12%2Fpexels-photo-220201-1024x681.jpeg&sp=1657737928T625dbc2487311bbb9055c604b8b1099d8a748879932e633d84cd8a188389b90e"
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
        src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fdonorbox.org%2Fnonprofit-blog%2Fwp-content%2Fuploads%2F2019%2F12%2Fhigh-angle-budget-wooden-blocks-scaled.jpg&sp=1657737504Ta6a215461193544620159832290447fd868f0bd8bcf53cef6eb04da1b0f225a5"
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
        src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2020%2F02%2FGettyImages-901412996-scaled-e1650398409723.jpg%3Ffit%3D700%2C1024&sp=1657737728Tba1b708b4202c1636249a219df1087c1336cff7eb9297433c0ccac506cc87d7d"
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

