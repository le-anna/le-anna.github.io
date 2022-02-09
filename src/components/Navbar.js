import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, AiOutlineCloseCircle } from 'react-icons/fa';
import './Navbar.css';
import Profile from '../assets/profile.jpg'


const Navbar = () => {
  const myRef = useRef();
  const myRef2 = useRef();


  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((!myRef?.current?.contains(event.target)) && (!myRef2?.current?.contains(event.target))) {
        setIsOpen(false);
      };
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [myRef]);

  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='nav-profile-container'>
                {/* <div className='profile-icon'></div> */}
                <img src={Profile} className='profile-icon'/>
                <h1 className='name'>ANNA LE</h1>
              </Link>
              <div className={isOpen ? 'mobile-icon-open' : 'mobile-icon'} ref={myRef2} onClick={toggle}>
                <FaBars /> 
              </div>
              <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} ref={myRef}>
                <li className='nav-item' onClick={closeMenu}>
                  <Link to='/experience' className='link'>Experience</Link>
                </li>
                <li className='nav-item' onClick={closeMenu}>
                  <Link to='/Design' className='link'>Design</Link>
                </li>
                <li className='nav-item' onClick={closeMenu}>
                  <Link to='/about' className='link'>About</Link>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
