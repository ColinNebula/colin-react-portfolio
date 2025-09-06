import React from 'react';
import CustomNav from "../Navigation";
import 'react-sticky-header/styles.css';
// import StickyHeader from 'react-sticky-header';

function Header(props) {
    
    const { currentTab, setCurrentTab } = props;

    return (
        <header className="header-wrapper">
            <CustomNav
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
        </header>
    );
}

export default Header;