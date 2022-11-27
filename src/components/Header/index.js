import React from 'react';
import Navigation from "../Navigation";
import 'react-sticky-header/styles.css';
// import StickyHeader from 'react-sticky-header';

function Header(props) {
    
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            <div className="name">
                <h2>Colin Nebula</h2>
                <p>Full Stack Web Developer</p>
                
            </div>

            <div className="logo"></div>
                
            <div>
                <Navigation
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Navigation>
            </div>
        </header>
    );
}

export default Header;