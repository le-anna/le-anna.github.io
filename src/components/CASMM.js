import React from 'react'
import Logo from '../assets/CASMM/casmm_logo.png'
import One from '../assets/CASMM/1.png'
import Two from '../assets/CASMM/2.png'
import Three from '../assets/CASMM/3.png'
import Four from '../assets/CASMM/4.png'
import Five from '../assets/CASMM/5.png'
import Six from '../assets/CASMM/6.png'
import Seven from '../assets/CASMM/7.png'
import './CASMM.css'

const CASMM = () => {
  return (
    <div className='CASMM'>
      <div className='CASMM-landing'>
        <img src={Logo} className='logo'/>
        <img src={One} className='CASMM-img'/>
      </div>
      <div className='br'/>
       <img src={Two} className='CASMM-img'/>
       <img src={Three} className='CASMM-img'/>
       <img src={Four} className='CASMM-img'/>
       <img src={Five} className='CASMM-img'/>
       <img src={Six} className='CASMM-img'/>
       <img src={Seven} className='CASMM-img'/>
    </div>
  )
}

export default CASMM