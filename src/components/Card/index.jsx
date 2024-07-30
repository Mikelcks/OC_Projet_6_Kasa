import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';

const CardWrapper = styled.div`
  background-color: ${colors.primary};
  height: 340px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CardCover = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: ${props => props.backgroundColor || colors.primary};
  color: white;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: white;
`;

const Card = ({ title, cover }) => (
  <CardWrapper>
    <ImageWrapper>
      <CardCover src={cover} alt={title} />
    </ImageWrapper>
    <TextContainer>
      <CardTitle>{title}</CardTitle>
    </TextContainer>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
