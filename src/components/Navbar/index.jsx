import React from 'react'
import Logo from '../../assets/hideaway_logo.jpg'
import { NavbarLayout, NavbarLeftside, NavbarRightside, NavbarLogo } from './styled'
import { Find_us_icon } from '../../assets/svgs'
import { Link } from 'react-scroll'

const Navbar = () => {
    
  return (
    <NavbarLayout>
      <NavbarLeftside>
      <Link className='child_link' to='hero' spy={true} smooth={true}>
        <NavbarLogo>
          <img src={Logo} alt='logo' />
        </NavbarLogo>
      </Link>
        <h1>Hideaway Coffee</h1>
      </NavbarLeftside>
      <NavbarRightside>
        <Link  className='child_link' activeClass='active' to='about' spy={true} smooth={true}>About us</Link>
        <Link  className='child_link' activeClass='active' to='find' spy={true} smooth={true}><Find_us_icon />Find us</Link>
      </NavbarRightside>
    </NavbarLayout>
  )
}

export default Navbar