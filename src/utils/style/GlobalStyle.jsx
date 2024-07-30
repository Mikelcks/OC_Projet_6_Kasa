import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', sans-serif;
    }
    body {
        max-width: 1440px;
        margin: 0 auto;
        padding: 45px 0 0 0;
        gap: 50px;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle