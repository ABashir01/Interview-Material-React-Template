import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

/**
 * A generic Navbar header for the website
 * 
 * @returns {React.ReactElement} A navbar header
 */
function Header() {
    return (
        <Navbar className="nav-header">
                <Navbar.Brand href="/" >
                    <img
                        src="/logo_IntusCare.png"
                        className='navbar-brand'
                        alt="Intus Care Logo"
                    />
                </Navbar.Brand>
      </Navbar>
    )};

export default Header;