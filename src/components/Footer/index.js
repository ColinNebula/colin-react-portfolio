import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

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
                        <a href="https://www.twitter.com/PartsmatAutoparts" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaTwitter />
                            </li>
                        </a>
                </footer>
            </div>
        );
    }

export default Footer;