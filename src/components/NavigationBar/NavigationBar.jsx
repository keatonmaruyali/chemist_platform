import React, { useState } from 'react';
// import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './navigationBar.css';



const NavigationBar = () => {
  return (
    <div className='nav_bar'>
      <NavLink style={{ padding: '0.9rem 2rem', fontSize: '1.4rem', fontWeight: 'bold' }} to='/'>Home</NavLink>
      <NavLink style={{ padding: '0.9rem 2rem', fontSize: '1.4rem', fontWeight: 'bold' }} to='about'>About</NavLink>
      <NavLink style={{ padding: '0.9rem 2rem', fontSize: '1.4rem', fontWeight: 'bold'}} to='periodictable'>Periodic Table</NavLink>
      <NavLink style={{ padding: '0.9rem 2rem', fontSize: '1.4rem', fontWeight: 'bold' }} to='chemspider'>ChemSpider</NavLink>
    </div>
  )
}

export default NavigationBar