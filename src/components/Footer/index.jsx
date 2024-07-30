import { Link } from 'react-router-dom'
import styled from 'styled-components'
import WhiteLogo from '../../assets/logo_white.jpg'

const FooterLogo = styled.img`
  width: 122px;
`

const NavContainer = styled.nav`
  padding: 30px;
  gap: 20px;
  display: flex;
  flex-direction : column;
  background-color: #000000;
  justify-content: space-between;
  align-items: center;
`

const Rights = styled.span`
    display: flex;
    justify-content: center;
    color: #FFFFFF;
`

function Header() {

  return (
    <NavContainer>
      <Link to="/">
        <FooterLogo src={WhiteLogo} />
      </Link>
      <div>
        <Rights to="/">
            © 2020 Kasa. All rights reserved
        </Rights>
      </div>
    </NavContainer>
  )
}

export default Header