import React from 'react'
import One from '../assets/MHA_1.jpg'
import Two from '../assets/1.png'
import Three from '../assets/2.png'
import Four from '../assets/3.png'
import Five from '../assets/4.png'
import './MHA.css'

const MHA = () => {
  return (
    <div className='MHA'>
       <img src={One} className='MHA-img'/>
       <img src={Two} className='MHA-img'/>
       <img src={Three} className='MHA-img'/>
       <img src={Four} className='MHA-img'/>
       <img src={Five} className='MHA-img'/>
    </div>
  )
}

export default MHA