import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.jpg'
import { StyledLinkNav } from '../../utils/style/Atoms'

const HomeLogo = styled.img`
  height: auto;
`

const NavContainer = styled.nav`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinksContainer = styled.div`
  display: flex;
  gap: 57px;
`

function Header() {
  const location = useLocation();
  
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <NavLinksContainer>
      <StyledLinkNav to="/" $active={location.pathname === '/'}>
          Accueil
        </StyledLinkNav>
        <StyledLinkNav to="/about" $active={location.pathname === '/about'}>
          A Propos
        </StyledLinkNav>
      </NavLinksContainer>
    </NavContainer>
  )
}

export default Header