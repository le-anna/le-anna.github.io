import React from 'react'
import GoToTop from '../components/GoToTop'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Choices.scss'

const Choices = () => {
  return (
    <div className='container column choices'>
        <br/>
        <p>Choices is in progress. In the meantime, please check out my other works!</p>
        <div className='next-btn-container'>
         <Link to='/CaSMM' className='link'>Click to View: CaSMM <FaArrowRight/></Link>
        </div>
        <GoToTop />
    </div>
  )
}

export default Choices