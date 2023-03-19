import React from 'react'
import { NavbarLayout, NavbarLeftside, NavbarRightside, NavbarLogo } from './styled'
import Logo from '../../assets/hideaway_logo.jpg'
import { Find_us_icon } from '../../assets/svgs'
import { Link } from 'react-scroll'

const Navbar = ({ aboutRef, findRef, handleClick }) => {
    
  return (
    <NavbarLayout>
      <NavbarLeftside>
        <NavbarLogo>
          <img src={Logo} alt="logo" />
        </NavbarLogo>
        <h1>Hideaway Coffee</h1>
      </NavbarLeftside>
      <NavbarRightside>
        <Link className='right_child' activeClass="active" to='about' spy={true} smooth={true}>About us</Link>
        <Link className='right_child' activeClass="active" to='find' spy={true} smooth={true}><Find_us_icon />Find us</Link>
      </NavbarRightside>
    </NavbarLayout>
  )
}

export default Navbar