import React from "react";
// import 'bootstrap/dis/css/bootstrap.min.css';
class Footer extends React.Component
{
  render()
    {
      return (
        <div class="jumbotron text-cent">
        <h1>Colin Nebula</h1>
        <p>Full Stack Web Developer</p>
        <a href="https://github.com/ColinNebula/colin-react-portfolio" class="fa fa-github"> Github</a>
        <a href="https://www.linkedin.com/feed/" class="fa fa-linkedin">Linked In</a>
        </div>
      )
    }
}
// const Footer = () => (
//   <div className="footer">
//   <h6> Colin Nebula</h6>
//   <a href="https://github.com/ColinNebula/colin-react-portfolio" class="fa fa-github"> Github</a>

// <a href="#" class="fa fa-linkedin">Linked In</a>
    
//   </div>
// );

export default Footer;