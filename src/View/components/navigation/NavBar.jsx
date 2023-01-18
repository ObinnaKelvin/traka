import React from 'react';
import Hamburger from '../hamburger/Hamburger';
import './navbar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className="navBar-header">
            <div className="navBar-header-logo">
                traka
            </div>
            <Hamburger />
        </div>
        <div className="navBar-menuBar">

        </div>
    </div>
  )
}

export default NavBar