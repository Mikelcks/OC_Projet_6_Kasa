import styled from 'styled-components'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
`

function Error() {

  return (
    <ErrorWrapper >
      <ErrorTitle >404</ErrorTitle>
      <ErrorSubtitle >
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error