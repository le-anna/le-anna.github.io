import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.scss';
import { Link } from 'react-router-dom';

const Dropdown = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  return (
    <div>
        <ul
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                     {
                        item.title === 'RetroFi' ? 
                        <a href='https://devpost.com/software/retrofi' className='dropdown-link'>RetroFi (Link)</a>
                        : 
                        <Link
                            className={item.cName}
                            to={item.path}
                            onClick={() => setClick(false)}
                        >
                            {item.title}
                        </Link> 
                     }
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default Dropdown