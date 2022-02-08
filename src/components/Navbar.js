import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, AiOutlineCloseCircle } from 'react-icons/fa';
import './Navbar.css';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const myRef = useRef();
  const myRef2 = useRef();

  const handleClick = () => setClick(!click);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
                <div className='profile-icon'></div>
                <h1 className='name'>ANNA LE</h1>
              </Link>
              <div className={isOpen ? 'mobile-icon-open' : 'mobile-icon'} ref={myRef2} onClick={() => {
                  handleClick();
                  toggle();
                }}> 
                <FaBars /> 
              </div>
              <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} ref={myRef}>
                <li className='nav-item' onClick={toggle}>
                  <Link to='/experience' className='link'>Experience</Link>
                </li>
                <li className='nav-item' onClick={toggle}>
                  <Link to='/Design' className='link'>Design</Link>
                </li>
                <li className='nav-item' onClick={toggle}>
                  <Link to='/about' className='link'>About</Link>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
