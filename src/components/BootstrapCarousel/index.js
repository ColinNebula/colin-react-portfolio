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
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fsagacity%2Fimage%2Fupload%2Fc_crop%2Ch_2832%2Cw_4256%2Cx_0%2Cy_0%2Fc_limit%2Cdpr_auto%2Cf_auto%2Cfl_lossy%2Cq_80%2Cw_1080%2Fshutterstock_305219333_x8rizo.jpg&f=1&nofb=1&ipt=28ef8f738f7adc1cdbc2e72c137ff84c9f4452b1c4b3513fefc42aa662862e8a&ipo=images"
        alt="Fourth slide"
      />
      <Carousel.Caption>
        <h3>Shop Shop</h3>
        <p>Shop Shop is a MERN stack. HTML, CSS Javascript, RESTful, Express.js, Handlebars.je, GraphQL.</p>
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

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftownsquare.media%2Fsite%2F625%2Ffiles%2F2016%2F05%2FThe-Notorious-Big-Facebook.jpg%3Fw%3D1200%26h%3D0%26zc%3D1%26s%3D0%26a%3Dt%26q%3D89&f=1&nofb=1&ipt=ad24fb82161677f94a8efb83a43b41e91c40dd99326bec24925569641bab11fa&ipo=images"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Tribute To B.I.G</h3>
        <p>The Notorious B.I.G chillin. The best rapper dead or alive. The Winner all day. Created using HTML, CSS </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

