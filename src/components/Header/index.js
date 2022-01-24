import React from 'react';
import Navigation from "../Navigation";

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            <div className="name">
                <h2>Colin Nebula</h2>
                <p>Full Stack Web Developer</p>
            </div>
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