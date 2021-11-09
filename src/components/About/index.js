import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
      <section className="my-5" >
          <h1 id="about">Hi!, my name is Colin Nebula?</h1>
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
          <div className="my-2">
              <p>
              As a self starter who loves being part of a team as well, I bring discipline and 
              rigour from my years serving the US Army. This, in addition to my numerous diplomas
               in digital art, technology, animation, and now coding, have helped me reach my present 
               position where I hope to develop websites.
              </p>
          </div>
      </section>
  )
}

export default About;