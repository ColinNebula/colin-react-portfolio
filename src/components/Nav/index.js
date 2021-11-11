import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import {Navbar, Nav, Container} from "react-bootstrap";

function customNav(props) {
    const {
      contactSelected,
      setContactSelected,
      aboutSelected,
      setAboutSelected,
      portfolioSelected,
      setPortfolioSelected,
      resumeSelected,
      setResumeSelected
  } = props;

  function handleClick(target){
    setContactSelected(false);
    setPortfolioSelected(false);
    setAboutSelected(false);
    setResumeSelected(false);

    if (target===0){
      setContactSelected(true);
    }
    if (target===1){
      setAboutSelected(true);
    }
    if(target===2){
      setPortfolioSelected(true);
    }
    if(target===3){
      setResumeSelected(true);
    }
  }


  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Colin Nebula </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              {contactSelected ? (
                <>
                <Nav.Link id="nav-selected">Contact</Nav.Link>
                </>
              ) : (
                <><Nav.Link onClick={() => handleClick(0)}> Contact </Nav.Link></>
              )}
              {aboutSelected ? (
                <>
                <Nav.Link id="nav-selected">About Me</Nav.Link>
                </>
              ) : (
                <><Nav.Link onClick={() => handleClick(1)}> About Me </Nav.Link></>
              )}
              {portfolioSelected ? (
                <>
                <Nav.Link id="nav-selected">Portfolio</Nav.Link>
                </>
              ) : (
                <><Nav.Link onClick={() => handleClick(2)}> Portfolio </Nav.Link></>
              )}
              {resumeSelected ? (
                <>
                <Nav.Link id="nav-selected">Resume</Nav.Link>
                </>
              ) : (
                <><Nav.Link onClick={() => handleClick(3)}> Resume </Nav.Link></>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )}

  // return (
  //   <header className="flex-row px-1">
  //     <h2>
  //       <a data-testid="link" href="/">
  //         <span role="img" aria-label="camera"> 🌎📸</span> Colin Nebula
  //       </a>
  //     </h2>
  //     <nav>
  //       <ul className="flex-row">
  //         <li className="mx-2">
  //         <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
  //             About me
  //           </a>
  //         </li>
  //         <li className={`mx-2 ${contactSelected && 'navActive'}`}>
  //           <span onClick={() => setContactSelected(true)}>Contact</span>
  //         </li>
  //         {categories.map((category) => (
  //           <li
  //             className={`mx-1 ${
  //               currentCategory.name === category.name && !contactSelected && 'navActive'
  //               }`}
  //             key={category.name}
  //           >
  //             <span
  //               onClick={() => {
  //                   setCurrentCategory(category);
  //                   setContactSelected(false);
  //               }}
  //             >
  //               {capitalizeFirstLetter(category.name)}
  //             </span>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   </header>
  


export default customNav;