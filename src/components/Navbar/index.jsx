import { useState } from 'react'
import Logo from '../../assets/hideaway_logo.jpg'
import { NavbarLayout, NavbarLeftside, NavbarRightside, NavbarLogo, NavLinkContainer, NavLinkBox } from './styled'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('hero')

  return (
    <NavbarLayout>
      <NavbarLeftside>
        <Link
          to='hero'
          spy={true}
          smooth={true}
          className='child_link'
          onSetActive={setActiveTab}
        >
          <NavbarLogo>
            <img src={Logo} alt='logo' />
          </NavbarLogo>
        </Link>
        <h1>Hideaway Coffee</h1>
      </NavbarLeftside>
      <NavbarRightside>
        <NavLinkContainer>
          <NavLinkBox active={activeTab === 'about'}>
            <Link
              to='about'
              spy={true}
              smooth={true}
              activeClass='active'
              className='child_link'
              onSetActive={setActiveTab}
            >
              About us
            </Link>
          </NavLinkBox>
        </NavLinkContainer>
        <NavLinkContainer>
          <NavLinkBox active={activeTab === 'find'}>
            <Link
              to='find'
              spy={true}
              smooth={true}
              activeClass='active'
              className='child_link'
              onSetActive={setActiveTab}
            >
              Find us
            </Link>
          </NavLinkBox>
        </NavLinkContainer>
      </NavbarRightside>
    </NavbarLayout>
  )
}

export default Navbar