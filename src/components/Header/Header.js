import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/aboutus">About Us</a>
            </nav>
            <p className="sub-title">Visit us</p>
        </div>
    );
};

export default Header;