import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section>
      <h1 id="about">Hi, my name is Colin Nebula</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
    </section>
  );
}

export default About;