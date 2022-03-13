import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaAngleDown } from 'react-icons/fa';
import './Navbar.scss';
import Profile from '../assets/profile.jpg'
import Dropdown from './Dropdown';


const Navbar = () => {
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
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='nav-profile-container'>
                <img src={Profile} className='icon'/>
                <p className='name'>ANNA LE</p>
              </Link>
              <div className={isOpen ? 'mobile-icon-open' : 'mobile-icon'} ref={myRef2} onClick={toggle}>
                <FaBars /> 
              </div>
              <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} ref={myRef}>
                <li className='nav-item' onClick={closeMenu} 
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}>
                  <div className='link'> 
                    Experiences <FaAngleDown/> 
                  </div>
                  {dropdown && <Dropdown />}
                </li>

                {/* experience dropdown items */}
                <li className='experience-item' onClick={closeMenu}>
                  <Link to='/Choices' className='link'>Choices</Link>
                </li>
                <li className='experience-item' onClick={closeMenu}>
                  <Link to='/CaSMM' className='link'>CaSMM</Link>
                </li>
                <li className='experience-item' onClick={closeMenu}>
                  <Link to='/MentalHealthApp' className='link'>Mental Health App</Link>
                </li>

                <li className='nav-item' onClick={closeMenu}>
                  <Link to='/Design' className='link'>UI Designs</Link>
                </li>
                <li className='nav-item' onClick={closeMenu}>
                  <Link to='/About' className='link'>About</Link>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
