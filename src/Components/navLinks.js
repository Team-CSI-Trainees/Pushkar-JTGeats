import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = () => {
  return (
    <div className='list'>
        <NavLink to='/'><span>Home</span></NavLink>
        <NavLink to='/kitchenSection'><span>About</span></NavLink>
        <NavLink to='/service'><span>Menu</span></NavLink>
        <NavLink to='/contact'><span>Contact</span></NavLink>
    </div>
  )
}

export default navLinks