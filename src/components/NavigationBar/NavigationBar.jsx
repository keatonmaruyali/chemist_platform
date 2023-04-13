import React, { useState } from 'react';
// import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './navigationBar.css';



const NavigationBar = () => {
  return (
    <ul>
      <NavLink style={{ padding: '0.9rem 2rem' }} to='/'>Home</NavLink>
      <NavLink style={{ padding: '0.9rem 2rem' }} to='about'>About</NavLink>
      <NavLink style={{ padding: '0.9rem 2rem' }} to='periodictable'>Periodic Table</NavLink>
      <NavLink style={{ padding: '0.9rem 2rem' }} to='chemspider'>ChemSpider</NavLink>
    </ul>
  )
}

export default NavigationBar