import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import SongDisplay from '../../molecules/SongDisplay/SongDisplay';
//icons
import PlaylistIcon from '../../../assets/icons/playlist_ico.svg';
import { connect } from 'react-redux';

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
`;

const BottomNavbar = () => ({
  render() {
    return (
      <StyledWrapper>
        <LeftSection>
          <ButtonIcon icon={PlaylistIcon} />
        </LeftSection>
        <RightSection>
          <InnerSectionWrapperTop>
            <Paragraph color="grey">NEXT</Paragraph>
          </InnerSectionWrapperTop>
          <SongDisplay songTitle="test" duration={1234} />
        </RightSection>
      </StyledWrapper>
    );
  },
});

const mapStateToProps = (state) => ({
  songs: state.songs.allIds,
  activeSongIndex: state.songs.activeSongIndex,
  isPlaying: state.songs.isPlaying,
  repeat: state.songs.repeat,
});

export default connect(mapStateToProps)(BottomNavbar);
