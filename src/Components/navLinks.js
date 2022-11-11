import React from 'react'
import { NavLink } from 'react-router-dom'


const navLinks = (props) => {

  return (
    <div className={props.class}>
        <NavLink to='/Pushkar-JTGeats/'><span>Home</span></NavLink>
        <NavLink to='/Pushkar-JTGeats/kitchenSection'><span>About</span></NavLink>
        <NavLink to='/Pushkar-JTGeats/service'><span>Menu</span></NavLink>
        <NavLink to='/Pushkar-JTGeats/contact'><span>Contact</span></NavLink>
    </div>
  )
}

export default navLinks