import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import vector from '../../assets/arrow_vector.svg';

const SectionWrapper = styled.div`
  margin-bottom: 20px;
`;

const SectionHeader = styled.div`
  background-color: #FF6060;
  height: 52px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 24ppx;
  color: white;
  cursor: pointer;
  position: relative;
`;

const ArrowIcon = styled.img.attrs({
  src: vector,
})`
  width: 24px;
  height: auto;
  transition: transform 0.3s;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(360deg)')};
`;

const SectionContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  font-size: 20px;
  line-height: 1.3;
  color: black;
  background-color: ${colors.backgroundGallery};
  border-radius: 0 0 5px 5px;
  padding: 5px 20px;
  box-sizing: border-box;
  text-align: left;
`;

const ExpandableSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionWrapper>
      <SectionHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ArrowIcon isOpen={isOpen} />
      </SectionHeader>
      <SectionContent isOpen={isOpen}>
        {content}
      </SectionContent>
    </SectionWrapper>
  );
};

export default ExpandableSection;
