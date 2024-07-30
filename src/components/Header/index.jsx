import { Link } from 'react-router-dom'
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
  gap: 57px; /* Utilisez gap ici pour espacer les liens */
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <NavLinksContainer>
        <StyledLinkNav to="/">
          Accueil
        </StyledLinkNav>
        <StyledLinkNav to="/about">
          A Propos
        </StyledLinkNav>
      </NavLinksContainer>
    </NavContainer>
  )
}

export default Header