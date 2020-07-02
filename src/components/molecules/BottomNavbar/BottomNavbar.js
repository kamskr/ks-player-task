import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
//icons
import PlaylistIcon from '../../../assets/icons/playlist_ico.svg';
import PlayActiveIcon from '../../../assets/icons/Play_active.png';
import PlayInactiveIcon from '../../../assets/icons/Play_inactive.png';
import MoreIcon from '../../../assets/icons/more_ico.svg';

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;
const LeftSection = styled.div`
  grid-column: 1/1;
`;
const RightSection = styled.div`
  grid-column: 2/10;
`;
const InnerSectionWrapperTop = styled.div``;
const InnerSectionWrapperBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;

  p {
    margin-top: -10px;
  }
  p:first-child::after {
    overflow: hidden;
    white-space: nowrap;
    content: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .';
  }
`;

const MediaControllBar = ({}) => (
  <StyledWrapper>
    <LeftSection>
      <ButtonIcon icon={PlaylistIcon} />
    </LeftSection>
    <RightSection>
      <InnerSectionWrapperTop>
        <Paragraph color="grey">NEXT</Paragraph>
      </InnerSectionWrapperTop>
      <InnerSectionWrapperBottom>
        <Paragraph color="black">Livin' In A Movie</Paragraph>
        <Paragraph color="grey">3:27</Paragraph>
      </InnerSectionWrapperBottom>
    </RightSection>
  </StyledWrapper>
);

MediaControllBar.propTypes = {
  isPlaying: PropTypes.oneOf(['true', 'false']),
};

MediaControllBar.defaultProps = {
  isPlaying: 'false',
};

export default MediaControllBar;
