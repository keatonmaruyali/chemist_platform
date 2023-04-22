import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigationBar.css';



const NavigationBar = () => {
  return (
    <div className='nav_bar'>
      <NavLink style={{ padding: '1.5vh 4vh', fontSize: '2vh', fontWeight: 'bold' }} to='/'>Home</NavLink>
      <NavLink style={{ padding: '1.5vh 4vh', fontSize: '2vh', fontWeight: 'bold' }} to='about'>About</NavLink>
      <NavLink style={{ padding: '1.5vh 4vh', fontSize: '2vh', fontWeight: 'bold'}} to='periodictable'>Periodic Table</NavLink>
      <NavLink style={{ padding: '1.5vh 4vh', fontSize: '2vh', fontWeight: 'bold' }} to='chemspider'>ChemSpider</NavLink>
    </div>
  )
}

export default NavigationBar