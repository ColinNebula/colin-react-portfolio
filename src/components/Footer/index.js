import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaHeart, FaHome, FaCode } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/ColinNebula",
            label: "GitHub",
            color: "#333"
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/colin-nebula-07176022/",
            label: "LinkedIn",
            color: "#0077b5"
        },
        {
            icon: FaYoutube,
            href: "https://www.youtube.com/",
            label: "YouTube",
            color: "#ff0000"
        },
        {
            icon: FaEnvelope,
            href: "mailto:colinnebula@gmail.com",
            label: "Email",
            color: "#ea4335"
        }
    ];

    const quickLinks = [
        { icon: FaHome, text: "Home", href: "#about" },
        { icon: FaCode, text: "Portfolio", href: "#portfolio" },
        { icon: FaEnvelope, text: "Contact", href: "#contact" }
    ];

    return (
        <footer className="enhanced-footer">
            <div className="footer-background">
                <div className="footer-particles">
                    <div className="footer-particle"></div>
                    <div className="footer-particle"></div>
                    <div className="footer-particle"></div>
                </div>
            </div>
            
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Colin Nebula</h3>
                        <p>
                            Full Stack Developer crafting digital experiences with passion and precision.
                        </p>
                        <p>
                            Available for freelance opportunities and collaboration.
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>
                                        <link.icon />
                                        <span>{link.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Get In Touch</h3>
                        <p>
                            <FaEnvelope style={{ marginRight: '0.5rem' }} />
                            colinnebula@gmail.com
                        </p>
                        <p>
                            Let's connect and create something amazing together.
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Connect</h3>
                        <div className="footer-social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    title={social.label}
                                >
                                    <social.icon className="social-icon" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} Colin Nebula. All rights reserved.</p>
                        <p>Made with <FaHeart style={{ color: '#e74c3c', margin: '0 0.25rem' }} /> using React & Bootstrap</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;