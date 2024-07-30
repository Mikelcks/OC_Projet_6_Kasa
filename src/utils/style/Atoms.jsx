import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLinkNav = styled(Link)`
  padding: 10px 0px;
  color: black;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`