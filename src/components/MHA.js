import React from 'react'
import One from '../assets/MHA/1.png'
import Two from '../assets/MHA/2.png'
import Three from '../assets/MHA/3.png'
import Four from '../assets/MHA/4.png'
import Five from '../assets/MHA/5.png'
import Six from '../assets/MHA/6.png'
import Seven from '../assets/MHA/7.png'
import Eight from '../assets/MHA/8.png'
import Nine from '../assets/MHA/9.png'
import './MHA.css'

const MHA = () => {
  return (
    <div className='MHA'>
      <div className='MHA-landing'>
        <div className='MHA-title'>Mental Health App</div>
        <img src={One} className='MHA-img'/>
      </div>
       <div className='br'/>
       <img src={Two} className='MHA-img'/>
       <img src={Three} className='MHA-img'/>
       <img src={Four} className='MHA-img'/>
       <img src={Five} className='MHA-img'/>
       <img src={Six} className='MHA-img'/>
       <img src={Seven} className='MHA-img'/>
       <img src={Eight} className='MHA-img'/> 
       <img src={Nine} className='MHA-img'/> 
    </div>
  )
}

export default MHA