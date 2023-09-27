import React, { useState } from 'react';
import './header.css';
import Logo from '../../assets/327208925_576920217616732_4689464296116687124_n-removebg-preview.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={Logo} alt="Logo" className='logo' />
      </Link>
      <nav className={`nav ${showNav ? 'mobile-show' : ''}`}>
        <NavLink 
          exact={true}
          activeClassName="active"
          className="links"
          to="/"
          onClick={() => setShowNav(false)}>
          <h3 style={{color: 'white'}}>HOME</h3>
        </NavLink>
        <NavLink 
          activeClassName="active"
          className="links"
          to="/about"
          onClick={() => setShowNav(false)}>
          <h3 style={{color: 'white'}}>ABOUT</h3>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="links"
          to="/events"
          onClick={() => setShowNav(false)}
        >
          <h3 style={{color: 'white'}}>EVENTS</h3>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="links"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <h3 style={{color: 'white'}}>CONTACT</h3>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="links"
          to="/partnership"
          onClick={() => setShowNav(false)}
        >
          <h3 style={{color: 'white'}}>PARTNERSHIP</h3>
        </NavLink>
        {/* <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#FF6B6B"
          size="3x"
          className='close-icon' /> */}
      </nav>
      {/* <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#FF6B6B"
          size="3x"
          className='hamburger-icon' /> */}
    </div>
  )
}

export default Header;