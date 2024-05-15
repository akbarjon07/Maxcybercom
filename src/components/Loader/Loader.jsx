import React from 'react';
import './loader.css';
import Logo from '../../assets/images/Group 1.svg'

const Loader = () => {
  return (
    <div className='spinner'>
        <img src={Logo} alt="logo" className='spinner-logo' width={50} height={50}/>
    </div>
  )
}

export default Loader