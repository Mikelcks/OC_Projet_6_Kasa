import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import colors from '../../utils/style/colors';

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 700;
  font-size: 288px;
  color: ${colors.primary};
`

const ErrorSubtitle = styled.h2`
  font-weight: 500;
  font-size: 36px;
  color: ${colors.primary};
  margin-bottom: 100px;
`

const HomeLink = styled(Link)`
  margin-bottom: 100px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: underline;
  color: black;
  border-radius: 5px;
`;

function Error() {

  return (
    <ErrorWrapper >
      <ErrorTitle >404</ErrorTitle>
      <ErrorSubtitle >
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <HomeLink to="/">Retour sur la page d'accueil</HomeLink>
    </ErrorWrapper>
  )
}

export default Error