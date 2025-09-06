import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import logoM from '../../assets/images/logoM.png';
import Nav from 'react-bootstrap/Nav';
import { FaUser, FaBriefcase, FaFileAlt, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

function CustomNav(props) {
    const { currentTab, setCurrentTab } = props;
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Handle navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'about', label: 'About', icon: FaUser },
        { key: 'portfolio', label: 'Portfolio', icon: FaBriefcase },
        { key: 'resume', label: 'Resume', icon: FaFileAlt },
        { key: 'contact', label: 'Contact', icon: FaEnvelope }
    ];

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Add dark mode logic here if needed
    };

    return (
        <Navbar 
            className={`enhanced-navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}
            expand="lg" 
            fixed="top"
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand 
                    href="#home" 
                    className="brand-enhanced"
                    onClick={() => setCurrentTab("about")}
                >
                    <div className="brand-container">
                        <img 
                            src={logoM} 
                            className="brand-logo" 
                            alt="Colin Nebula Logo" 
                        />
                        <div className="brand-text">
                            <span className="brand-name">Colin Nebula</span>
                            <span className="brand-tagline">Full Stack Developer</span>
                        </div>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle 
                    aria-controls="enhanced-navbar-nav" 
                    className="navbar-toggler-enhanced"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="enhanced-navbar-nav">
                    <Nav className="ms-auto nav-enhanced">
                        {navItems.map((item) => (
                            <Nav.Link 
                                key={item.key}
                                className={`nav-item-enhanced ${currentTab === item.key ? "active" : ""}`}
                                onClick={() => setCurrentTab(item.key)}
                            >
                                <item.icon className="nav-icon-enhanced" />
                                <span className="nav-label">{item.label}</span>
                                <div className="nav-indicator"></div>
                            </Nav.Link>
                        ))}
                        
                        <div className="nav-divider"></div>
                        
                        <button 
                            className="theme-toggle"
                            onClick={toggleDarkMode}
                            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNav;