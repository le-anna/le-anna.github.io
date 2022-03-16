import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaAngleDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' 
import './Navbar.scss';
import Profile from '../assets/profile.jpg'
import Dropdown from './Dropdown';

export const Navbar = () => {
  const myRef = useRef();
  const myRef2 = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((!myRef?.current?.contains(event.target)) && (!myRef2?.current?.contains(event.target))) {
        setIsOpen(false);
      };
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [myRef]);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav id='navbar'>
        <div class='container' id='navbar-container'>
          <Link to='/' className='container row' id='nav-profile-container'>
            <img src={Profile} id='icon'/>
            <p id='name'>ANNA N. LE</p>
          </Link>
          <div className={isOpen ? 'mobile-icon open' : 'mobile-icon'} ref={myRef2} onClick={toggle}>
            <FaBars /> 
          </div>
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} ref={myRef}>
            <li id='nav-item' onClick={closeMenu} 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
              <div conainter='container' id='link'> 
                Experiences <FaAngleDown/> 
              </div>
              {dropdown && <Dropdown />}
            </li>

            {/* experience dropdown items */}
            <li id='experience-item' onClick={closeMenu}>
              <Link to='/Choices' id='link'>Choices</Link>
            </li>
            <li id='experience-item' onClick={closeMenu}>
              <Link to='/CaSMM' id='link'>CaSMM</Link>
            </li>
            <li id='experience-item' onClick={closeMenu}>
              <Link to='/MentalHealthApp' id='link'>Mental Health App</Link>
            </li>
            <li id='experience-item' onClick={closeMenu}>
              <a href='https://devpost.com/software/retrofi' id='link'>RetroFi</a> 
            </li>

            <li id='nav-item' onClick={closeMenu}>
              <Link to='/Design' id='link'>UI Designs</Link>
            </li>

          </ul>
        </div>
    </nav>
    // </div>
  );
};

export const Footer = () => {

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  };
  
  return (
    <div class='container' id='footer'>
      <div id='footer-content'>
        <p>Made by Anna N. Le</p>
        <a href='https://linkedin.com/in/anna-le-7130181ba'>
          <FontAwesomeIcon id='footer-icon' icon={faLinkedin}/>
        </a>
        <a href='https://github.com/le-anna/portfolio'>
          <FontAwesomeIcon id='footer-icon' icon={faGithub}/>
        </a>
        <Mailto email='annale1501@gmail.com'>
          <FontAwesomeIcon id='footer-icon'icon={faEnvelope}/>
        </Mailto>
      </div>
    </div>
  )
}
