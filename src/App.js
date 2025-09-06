import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import BootstrapCarousel from './components/BootstrapCarousel';
import './AppClean.css';

// App
function App() {
  const [currentTab, setCurrentTab] = useState("about");
  
  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <BootstrapCarousel />
      
      <main className="main-content">
        {renderTab()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;