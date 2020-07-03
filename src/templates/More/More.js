import React from 'react';
import styled, { withTheme } from 'styled-components';
import TopNavbar from '../../components/organisms/TopNavbar/TopNavbar';
import Player from '../../components/organisms/Player/Player';
import BottomNavbar from '../../components/organisms/BottomNavbar/BottomNavbar';
import bacgroundImage from '../../assets/bg_image.jpg';
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
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  bottom: 0;

  .enter {
    opacity: 0;
  }
  .enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .exit {
    opacity: 1;
  }
  .exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundLight};
  background-repeat: no-repeat;
  background-size: 100% auto;
  flex-direction: column;
  flex: 1;
  transition: 0.3s;
`;

const InfoWrapper = styled.div`
  text-align: center;
  margin-bottom: auto;
`;
const CoverWrapper = styled.div`
  flex: 1;
  display: flex;
  margin-top: auto;
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
          <div style={{ margin: 'auto auto 0 auto', display: 'flex' }}>
            <Cover coverImageUrl={covers[activeSongIndex]} />
          </div>
        </CoverWrapper>
        <InfoWrapper>
          <Heading bold>{song.name}</Heading>
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
        <BottomNavbar />
      </StyledWrapper>
    </HideWrapper>
  );
};

const mapStateToProps = (state) => ({
  activeSongIndex: state.songs.activeSongIndex,
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});

export default compose(connect(mapStateToProps), withTheme)(More);
