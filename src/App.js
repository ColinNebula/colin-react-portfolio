import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import {Container} from "react-bootstrap";


function App() {


  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    
    <div>
    <Container>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}></Nav>
    </Container>
      <main>
        <Container>
        {contactSelected ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : (
          <></>
        )}
        {aboutSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <></>
        )}
        {portfolioSelected ? (
          <>
            <Portfolio></Portfolio>
          </>
        ) : (
          <></>
        )}
        {resumeSelected ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <></>
        )}
        </Container>
      </main>
      <Container>
      <Footer></Footer>
      </Container>
      </div>

  );
}

export default App;