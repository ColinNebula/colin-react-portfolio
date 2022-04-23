import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
            <div className="footer">
                <footer>
                        <a href="https://github.com/ColinNebula" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaGithub />
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/feed/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaLinkedin />
                            </li>
                        </a>
                        <a href="https://www.youtube.com/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaYoutube />
                            </li>
                        </a>
                    
                        &copy; 2022 Colin Nebula, Inc.
                </footer>
            </div>
        );
    }

export default Footer;