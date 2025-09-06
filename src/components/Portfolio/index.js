import React, { useState, useEffect } from "react";
import { Card, Button, Badge, Container, Row, Col } from "react-bootstrap";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaCode,
    FaFilter,
    FaStar
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiGraphql, SiStripe } from "react-icons/si";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'The Squid Store',
            id: 'TheSquidStore-Img-Element',
            description: 'Full-stack MERN e-commerce platform with secure authentication, payment processing, and modern UI design.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'GraphQL', 'Stripe', 'JWT', 'Bcrypt'],
            category: 'Full Stack',
            featured: true,
            link: 'https://thesquidstore.herokuapp.com/',
            github: "https://github.com/TPhondeth/the-squid-store",
            status: 'Live',
            year: '2023'
        },
        {
            name: "Enviro Dashboard",
            id: "EnviroDashboard-Img-Element",
            description: "Environmental monitoring dashboard with real-time data visualization and user authentication system.",
            technologies: ['HTML', 'Bulma', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'Handlebars', 'Express'],
            category: 'Full Stack',
            featured: true,
            link: "https://theteam33333.github.io/enviro-dashboard/",
            github: "https://github.com/theteam33333/enviro-dashboard/",
            status: 'Live',
            year: '2023'
        },
        {
            name: "PWA Budget Tracker",
            id: "PWABudgetTracker-Img-Element",
            description: "Progressive Web Application for budget tracking with offline functionality and responsive design.",
            technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'PWA', 'Service Workers'],
            category: 'Frontend',
            featured: false,
            link: "https://polar-sierra-11567.herokuapp.com/",
            github: "https://github.com/ColinNebula/colin-pwa-budget-tracker",
            status: 'Live',
            year: '2023'
        },
        {
            name: "The Redux Store",
            id: "TheReduxStore-Img-Element",
            description: "Modern e-commerce application built with Redux for state management and optimized performance.",
            technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
            category: 'Full Stack',
            featured: true,
            link: "https://agile-citadel-05491.herokuapp.com/",
            github: "https://github.com/ColinNebula/colin-redux-store/tree/main",
            status: 'Live',
            year: '2023'
        },
        {
            name: "MVC Tech Blog",
            id: "ModelViewController-Img-Element",
            description: "Technical blog platform following MVC architecture with user authentication and commenting system.",
            technologies: ['JavaScript', 'HTML', 'CSS', 'Sequelize', 'MySQL', 'Express', 'Handlebars'],
            category: 'Backend',
            featured: false,
            link: "https://protected-fjord-97128.herokuapp.com/",
            github: "https://github.com/ColinNebula/colin-model-view-controller/tree/main",
            status: 'Live',
            year: '2022'
        },
        {
            name: "Work Day Scheduler",
            id: 'WorkDayScheduler-Img-Element',
            description: 'Dynamic scheduling application with local storage and real-time updates for productivity management.',
            technologies: ['JavaScript', 'CSS', 'HTML', 'APIs', 'Local Storage'],
            category: 'Frontend',
            featured: false,
            link: 'https://colinnebula.github.io/work-day-scheduler/',
            github: 'https://github.com/ColinNebula/work-day-scheduler',
            status: 'Live',
            year: '2022'
        },
        {
            name: "Taskmaster Pro",
            id: "TaskmasterPro-Img-Element",
            description: "Advanced task management system with drag-and-drop functionality and project organization.",
            technologies: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation', 'Local Storage'],
            category: 'Frontend',
            featured: false,
            link: "https://colinnebula.github.io/taskmaster-pro/",
            github: "https://github.com/ColinNebula/taskmaster-pro/tree/main",
            status: 'Live',
            year: '2022'
        },
        {
            name: "Password Generator",
            id: "PasswordGenerator-Img-Element",
            description: "Secure password generation tool with customizable criteria and strength validation.",
            technologies: ['JavaScript', 'HTML', 'CSS', 'Security'],
            category: 'Frontend',
            featured: false,
            link: "https://colinnebula.github.io/C-3-Password-Generator/",
            github: "https://github.com/ColinNebula/C-3-Password-Generator",
            status: 'Live',
            year: '2022'
        }
    ]);

    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

    useEffect(() => {
        setAnimationClass('portfolio-fade-in');
    }, []);

    const handleFilterChange = (category) => {
        setActiveFilter(category);
        setAnimationClass('portfolio-fade-out');
        
        setTimeout(() => {
            if (category === 'All') {
                setFilteredProjects(projects);
            } else {
                setFilteredProjects(projects.filter(project => project.category === category));
            }
            setAnimationClass('portfolio-fade-in');
        }, 200);
    };

    const getTechIcon = (tech) => {
        const iconMap = {
            'React': <FaReact className="text-info" />,
            'Node.js': <FaNodeJs className="text-success" />,
            'MongoDB': <SiMongodb className="text-success" />,
            'Express': <SiExpress className="text-dark" />,
            'JavaScript': <FaJs className="text-warning" />,
            'HTML': <FaHtml5 className="text-danger" />,
            'CSS': <FaCss3Alt className="text-primary" />,
            'Bootstrap': <FaBootstrap className="text-primary" />,
            'MySQL': <SiMysql className="text-info" />,
            'GraphQL': <SiGraphql className="text-danger" />,
            'Stripe': <SiStripe className="text-primary" />
        };
        return iconMap[tech] || <FaCode className="text-secondary" />;
    };

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <div className="professional-portfolio">
            <Container fluid className="portfolio-container">
                {/* Hero Section */}
                <section className="portfolio-hero">
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col lg={8}>
                                <h1 className="portfolio-hero-title">
                                    My Portfolio
                                    <span className="hero-accent">.</span>
                                </h1>
                                <p className="portfolio-hero-subtitle">
                                    Showcasing innovative solutions and creative development projects
                                </p>
                                <p className="portfolio-hero-description">
                                    A collection of full-stack applications, frontend interfaces, and backend systems 
                                    built with modern technologies and best practices.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Featured Projects Section */}
                <section className="featured-section">
                    <Container>
                        <Row className="mb-5">
                            <Col>
                                <h2 className="section-title">
                                    <FaStar className="section-icon" />
                                    Featured Projects
                                </h2>
                                <p className="section-subtitle">
                                    Highlighting my most impactful and comprehensive projects
                                </p>
                            </Col>
                        </Row>
                        <div className="featured-projects-list">
                            {featuredProjects.map((project, index) => (
                                <div key={project.name} className="featured-project-list-item mb-4">
                                    <Card className="featured-project-card h-100">
                                        <Row className="g-0">
                                            <Col md={4}>
                                                <div className="project-image-container">
                                                    <div className={`project-image ${project.id}`}></div>
                                                    <div className="project-overlay">
                                                        <Badge bg="success" className="featured-badge">
                                                            Featured
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={8}>
                                                <Card.Body className="d-flex flex-column h-100">
                                                    <div className="project-header">
                                                        <h4 className="project-title">{project.name}</h4>
                                                        <div className="project-meta">
                                                            <Badge bg="outline-secondary" className="me-2">
                                                                {project.category}
                                                            </Badge>
                                                            <Badge bg="outline-primary">
                                                                {project.year}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <p className="project-description">{project.description}</p>
                                                    <div className="tech-stack mb-3">
                                                        {project.technologies.slice(0, 6).map((tech, techIndex) => (
                                                            <Badge key={techIndex} bg="light" text="dark" className="tech-badge me-2 mb-2">
                                                                {getTechIcon(tech)}
                                                                <span className="ms-1">{tech}</span>
                                                            </Badge>
                                                        ))}
                                                        {project.technologies.length > 6 && (
                                                            <Badge bg="light" text="dark" className="tech-badge">
                                                                +{project.technologies.length - 6} more
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="project-links mt-auto">
                                                        <Button 
                                                            href={project.link} 
                                                            target="_blank"
                                                            className="project-btn primary me-2"
                                                        >
                                                            <FaExternalLinkAlt className="me-2" />
                                                            Live Demo
                                                </Button>
                                                <Button 
                                                    href={project.github} 
                                                    target="_blank"
                                                    variant="outline-primary"
                                                    className="project-btn secondary"
                                                >
                                                    <FaGithub className="me-2" />
                                                    Code
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* All Projects Section */}
                <section className="all-projects-section">
                    <Container>
                        <Row className="mb-4">
                            <Col>
                                <h2 className="section-title">
                                    <FaFilter className="section-icon" />
                                    All Projects
                                </h2>
                                <p className="section-subtitle">
                                    Filter by category to explore different types of projects
                                </p>
                            </Col>
                        </Row>

                        {/* Filter Buttons */}
                        <Row className="mb-4">
                            <Col>
                                <div className="filter-buttons">
                                    {categories.map((category) => (
                                        <Button
                                            key={category}
                                            variant={activeFilter === category ? "primary" : "outline-primary"}
                                            className={`filter-btn me-2 mb-2 ${activeFilter === category ? 'active' : ''}`}
                                            onClick={() => handleFilterChange(category)}
                                        >
                                            {category}
                                            <Badge bg="light" text="dark" className="ms-2">
                                                {category === 'All' ? projects.length : projects.filter(p => p.category === category).length}
                                            </Badge>
                                        </Button>
                                    ))}
                                </div>
                            </Col>
                        </Row>

                        {/* Projects List */}
                        <div className={`projects-list ${animationClass}`}>
                            {filteredProjects.map((project, index) => (
                                <div key={project.name} className="project-list-item mb-4">
                                    <Card className="project-card h-100">
                                        <Row className="g-0">
                                            <Col md={3}>
                                                <div className="project-image-container">
                                                    <div className={`project-image ${project.id}`}></div>
                                                    <div className="project-overlay">
                                                        <Badge bg={project.status === 'Live' ? 'success' : 'warning'} className="status-badge">
                                                            {project.status}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <Card.Body className="d-flex flex-column h-100">
                                                    <div className="project-header">
                                                        <h5 className="project-title">{project.name}</h5>
                                                        <div className="project-meta">
                                                            <Badge bg="outline-secondary" className="me-2">
                                                                {project.category}
                                                            </Badge>
                                                            <Badge bg="outline-primary">
                                                                {project.year}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <p className="project-description">{project.description}</p>
                                                    <div className="tech-stack mb-3">
                                                        {project.technologies.slice(0, 6).map((tech, techIndex) => (
                                                            <Badge key={techIndex} bg="light" text="dark" className="tech-badge me-1 mb-1">
                                                                {getTechIcon(tech)}
                                                                <span className="ms-1">{tech}</span>
                                                            </Badge>
                                                        ))}
                                                        {project.technologies.length > 6 && (
                                                            <Badge bg="light" text="dark" className="tech-badge">
                                                                +{project.technologies.length - 6}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="project-links mt-auto">
                                                        <Button 
                                                            href={project.link} 
                                                            target="_blank"
                                                            size="sm"
                                                            className="project-btn primary me-2"
                                                        >
                                                            <FaExternalLinkAlt className="me-1" />
                                                            Live
                                                        </Button>
                                                        <Button 
                                                            href={project.github} 
                                                            target="_blank"
                                                            variant="outline-primary"
                                                            size="sm"
                                                            className="project-btn secondary"
                                                        >
                                                            <FaGithub className="me-1" />
                                                            Code
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </Container>
        </div>
    );
}

export default Portfolio;