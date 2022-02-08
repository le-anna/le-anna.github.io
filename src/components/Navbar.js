import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, AiOutlineCloseCircle } from 'react-icons/fa';
import './Navbar.css';


const Navbar = () => {

  const [click, setClick] = useState(false);

  const myRef = useRef();

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!myRef?.current?.contains(event.target)) {
        setClick(false);
      };
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [myRef]);

  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='nav-profile-container'>
                <div className='profile-icon'></div>
                <h1 className='name'>ANNA LE</h1>
              </Link>
              <div className='mobile-icon' onClick={handleClick}> <FaBars /> </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'} ref={myRef}>
                <li className='nav-item' onClick={handleClick}>
                  <Link to='/experience' className='link'>Experience</Link>
                </li>
                <li className='nav-item' onClick={handleClick}>
                  <Link to='/Design' className='link'>Design</Link>
                </li>
                <li className='nav-item' onClick={handleClick}>
                <Link to='/about' className='link'>About</Link>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
