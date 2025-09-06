import React, { useState, useEffect } from 'react';
import cNebula from "../../assets/images/c-nebula.jpg";
import { faEnvelope, faCode, faRocket, faMedal, faDownload, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faReact, faNodeJs, faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { Button, Card, Col, Row, Badge, ProgressBar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const socialLinks = [
        {
            icon: faGithub,
            url: "https://github.com/ColinNebula",
            label: "GitHub",
            color: "#333"
        },
        {
            icon: faLinkedin,
            url: "https://linkedin.com/in/colin-nebula",
            label: "LinkedIn",
            color: "#0077b5"
        },
        {
            icon: faEnvelope,
            url: "mailto:colinnebula@gmail.com",
            label: "Email",
            color: "#ea4335"
        }
    ];

    const techStack = [
        { icon: faReact, name: "React.js", level: 90, color: "#61dafb" },
        { icon: faNodeJs, name: "Node.js", level: 85, color: "#339933" },
        { icon: faJs, name: "JavaScript", level: 95, color: "#f7df1e" },
        { icon: faPython, name: "Python", level: 80, color: "#3776ab" }
    ];

    const professionalInfo = {
        location: "United States",
        phone: "+1 (555) 123-4567",
        email: "colinnebula@gmail.com",
        experience: "5+ Years",
        availability: "Available"
    };

    const keyAchievements = [
        "US Military Veteran with Leadership Experience",
        "Full Stack Development Expertise",
        "Digital Art & Animation Background",
        "Proven Team Collaboration Skills"
    ];

    return (
        <section className={`professional-about ${isVisible ? 'fade-in' : ''}`}>
            <Container fluid className="about-container">
                {/* Hero Section */}
                <Row className="hero-section">
                    <Col lg={4} className="profile-column">
                        <div className="profile-card">
                            <div className="profile-image-wrapper">
                                <img 
                                    src={cNebula} 
                                    alt="Colin Nebula - Full Stack Developer" 
                                    className="professional-profile-image"
                                />
                                <div className="status-badge">
                                    <span className="status-dot"></span>
                                    Available for Work
                                </div>
                            </div>
                            
                            <div className="profile-info">
                                <h1 className="profile-name">Colin Nebula</h1>
                                <h2 className="profile-title">Full Stack Developer</h2>
                                
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <span>{professionalInfo.location}</span>
                                    </div>
                                    <div className="contact-item">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <span>{professionalInfo.email}</span>
                                    </div>
                                </div>
                                
                                <div className="social-professional">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-professional-link"
                                            title={social.label}
                                        >
                                            <FontAwesomeIcon icon={social.icon} />
                                        </a>
                                    ))}
                                </div>
                                
                                <Button 
                                    variant="primary" 
                                    size="lg" 
                                    className="download-resume-btn"
                                >
                                    <FontAwesomeIcon icon={faDownload} className="me-2" />
                                    Download Resume
                                </Button>
                            </div>
                        </div>
                    </Col>
                    
                    <Col lg={8} className="content-column">
                        <div className="professional-content">
                            {/* Introduction */}
                            <div className="intro-section">
                                <h3 className="section-title">Professional Summary</h3>
                                <p className="professional-summary">
                                    Dedicated Full Stack Developer with extensive military background bringing discipline, 
                                    leadership, and technical expertise to web development. Combining years of service 
                                    experience with comprehensive training in digital art, technology, and modern web 
                                    development frameworks to deliver robust, user-centered solutions.
                                </p>
                            </div>
                            
                            {/* Key Achievements */}
                            <div className="achievements-professional">
                                <h3 className="section-title">Key Qualifications</h3>
                                <Row>
                                    {keyAchievements.map((achievement, index) => (
                                        <Col md={6} key={index} className="achievement-professional">
                                            <div className="achievement-item-pro">
                                                <FontAwesomeIcon icon={faRocket} className="achievement-icon" />
                                                <span>{achievement}</span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                            
                            {/* Technical Skills */}
                            <div className="skills-professional">
                                <h3 className="section-title">Technical Proficiency</h3>
                                <Row>
                                    {techStack.map((tech, index) => (
                                        <Col md={6} key={index} className="skill-item">
                                            <div className="skill-header">
                                                <div className="skill-name">
                                                    <FontAwesomeIcon 
                                                        icon={tech.icon} 
                                                        style={{ color: tech.color }} 
                                                        className="skill-icon"
                                                    />
                                                    <span>{tech.name}</span>
                                                </div>
                                                <Badge bg="primary" className="skill-level">
                                                    {tech.level}%
                                                </Badge>
                                            </div>
                                            <ProgressBar 
                                                now={tech.level} 
                                                className="skill-progress"
                                                variant="primary"
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                            
                            {/* Professional Stats */}
                            <div className="stats-section">
                                <Row>
                                    <Col md={3} className="stat-item">
                                        <div className="stat-card">
                                            <div className="stat-number">5+</div>
                                            <div className="stat-label">Years Experience</div>
                                        </div>
                                    </Col>
                                    <Col md={3} className="stat-item">
                                        <div className="stat-card">
                                            <div className="stat-number">20+</div>
                                            <div className="stat-label">Projects Completed</div>
                                        </div>
                                    </Col>
                                    <Col md={3} className="stat-item">
                                        <div className="stat-card">
                                            <div className="stat-number">100%</div>
                                            <div className="stat-label">Client Satisfaction</div>
                                        </div>
                                    </Col>
                                    <Col md={3} className="stat-item">
                                        <div className="stat-card">
                                            <div className="stat-number">24/7</div>
                                            <div className="stat-label">Availability</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            
                            {/* Call to Action */}
                            <div className="cta-professional">
                                <h3 className="section-title">Let's Work Together</h3>
                                <p className="cta-text">
                                    Ready to bring your vision to life with clean, efficient code and innovative solutions.
                                </p>
                                <div className="cta-buttons">
                                    <Button 
                                        variant="primary" 
                                        size="lg" 
                                        className="cta-primary"
                                        onClick={() => window.location.hash = 'portfolio'}
                                    >
                                        <FontAwesomeIcon icon={faCode} className="me-2" />
                                        View Portfolio
                                    </Button>
                                    <Button 
                                        variant="outline-primary" 
                                        size="lg" 
                                        className="cta-secondary"
                                        onClick={() => window.location.hash = 'contact'}
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                        Get In Touch
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;