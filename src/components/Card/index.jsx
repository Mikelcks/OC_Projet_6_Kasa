import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';

const CardWrapper = styled.div`
  background-color: ${colors.primary};
  height: 340px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`;

const CardCover = styled.img`
  width: 100%;
  height: 100%;
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
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0.1) 42%, rgba(4, 4, 4, 0.5) 99.99%, rgba(0, 0, 0, 0.8) 100%);
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

const Card = ({ id, title, cover }) => (
  <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
    <CardWrapper>
      <CardCover src={cover} alt={title} />
      <TextContainer>
        <CardTitle>{title}</CardTitle>
      </TextContainer>
    </CardWrapper>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
