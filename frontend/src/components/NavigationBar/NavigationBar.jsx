import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigationBar.css';


const NavStyling = {
  fontWeight: "bold",
  textDecoration: 'none',
  padding: '1.5vh 4vh',
  fontSize: '2vh',
  borderRadius: '2rem',
}

const NavigationBar = () => {
  return (
    <div className='nav_bar'>
      <NavLink
       to='/'
       style={({ isActive }) => ({
        color: isActive ? 'black' : 'white',
        background: isActive ? 'rgb(105, 123, 171)' : '',
        ...NavStyling,
      })}>Home</NavLink>
      <NavLink
        to='about'
        style={({ isActive }) => ({
        color: isActive ? 'black' : 'white',
        background: isActive ? 'rgb(105, 123, 171)' : '',
        ...NavStyling,
      })}>About</NavLink>
      <NavLink
        to='periodictable'
        style={({ isActive }) => ({
        color: isActive ? 'black' : 'white',
        background: isActive ? 'rgb(105, 123, 171)' : '',
        ...NavStyling,
      })}>Periodic Table</NavLink>
      <NavLink
        to='chemspider'
        style={({ isActive }) => ({
        color: isActive ? 'black' : 'white',
        background: isActive ? 'rgb(105, 123, 171)' : '',
        ...NavStyling,
      })}>ChemSpider</NavLink>
    </div>
  )
}

export default NavigationBar