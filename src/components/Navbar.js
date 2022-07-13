import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaAngleDown } from 'react-icons/fa';
import './Navbar.scss';
import Profile from '../assets/profile.jpg';
import Dropdown from './Dropdown';
import { debounce } from './helper';

export const Navbar = () => {
  const myRef = useRef();
  const myRef2 = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [dropdown, setDropdown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  // https://www.devtwins.com/blog/sticky-navbar-hides-scroll
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 90);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);


  return (
    <nav id='navbar' style={{top: visible ? '0' : '-60px' }}>
        <div className='container' id='navbar-container'>
          <Link to='/' className='container row' id='nav-profile-container'>
            <img src={Profile} id='icon' alt='Profile Icon'/>
            <p id='name'>ANNA N. LE</p>
          </Link>
          <div className={isOpen ? 'mobile-icon open' : 'mobile-icon'} ref={myRef2} onClick={toggle}>
            <FaBars /> 
          </div>
          <ul className={isOpen ? 'nav-menu-active' : 'close'} ref={myRef}>
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
              <a href='https://devpost.com/software/retrofi' id='link'>RetroFi (Link)</a> 
            </li>

            <li id='nav-item' onClick={closeMenu}>
              <Link to='/Design' id='link'>UI Designs</Link>
            </li>
            <li id='nav-item' onClick={closeMenu}>
              <Link to='/About' id='link'>About</Link>
            </li>

          </ul>
        </div>
    </nav>
    // </div>
  );
};

export const Footer = () => {

  return (
    <div className='container' id='footer'>
      <div id='footer-content'>
        <p>Made with 💛 + ☕️ by Anna Le</p>
      </div>
    </div>
  )
}
