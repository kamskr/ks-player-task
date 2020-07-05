import React from 'react';
import styled, { withTheme } from 'styled-components';
import TopNavbar from '../../components/organisms/TopNavbar/TopNavbar';
import BottomNavbar from '../../components/organisms/BottomNavbar/BottomNavbar';
import Cover from '../../components/atoms/Cover/Cover';
import Heading from '../../components/atoms/Heading/Heading';
import cover from '../../assets/covers/cover.png';
import cover1 from '../../assets/covers/cover-1.png';
import unreleased from '../../assets/covers/unreleased_cover.png';
import { connect } from 'react-redux';
import { compose } from 'redux';

const HideWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  top: 0;
  right: 0;
  bottom: 60px;
  left: 0;
  overflow-y: hidden;
  top: 0;
  z-index: 9999;
`;

const StyledWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundSemiLight};
  background-repeat: no-repeat;
  background-size: 100% auto;
  flex-direction: column;
  flex: 1;
`;

const InfoWrapper = styled.div`
  text-align: center;
  margin-bottom: auto;
`;
const CoverWrapper = styled.div`
  display: flex;
  margin-top: 5vh;
`;

const LinkWrapper = styled.div`
  padding-bottom: 40px;
  h1 {
    margin-top: 30px;
  }
`;
const More = ({ song, activeSongIndex, hide }) => {
  const covers = [unreleased, cover, cover1];

  return (
    <HideWrapper>
      <StyledWrapper>
        <TopNavbar showLess={hide} navType="viewMore" />
        <CoverWrapper>
          {/* <div style={{ margin: 'auto auto 0 auto', display: 'flex' }}> */}
          <Cover coverImageUrl={covers[activeSongIndex]} more />
          {/* </div> */}
        </CoverWrapper>
        <InfoWrapper>
          <Heading bold fontSize="l">
            {song.name}
          </Heading>
          <Heading secondary fontSize="s">
            {song.artist}
          </Heading>
          <Heading secondary fontSize="l">
            . . .
          </Heading>

          <LinkWrapper>
            <Heading fontSize="s">Add to playlist</Heading>
            <Heading fontSize="s">Show album</Heading>
            <Heading fontSize="s">Share with friends</Heading>
          </LinkWrapper>
        </InfoWrapper>
      </StyledWrapper>
    </HideWrapper>
  );
};

const mapStateToProps = (state) => ({
  activeSongIndex: state.songs.activeSongIndex,
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});

export default compose(connect(mapStateToProps), withTheme)(More);
