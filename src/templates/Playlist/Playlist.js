import React from 'react';
import styled, { withTheme } from 'styled-components';
import TopNavbar from '../../components/organisms/TopNavbar/TopNavbar';
import SongDisplay from '../../components/molecules/SongDisplay/SongDisplay';
import Button from '../../components/atoms/Button/Button';
import cover from '../../assets/covers/cover.png';
import cover1 from '../../assets/covers/cover-1.png';
import unreleased from '../../assets/covers/unreleased_cover.png';
import { connect } from 'react-redux';
import { compose } from 'redux';
import bacgroundImage from '../../assets/bg_image.jpg';
const StyledWrapper = styled.div`
  background-image: url(${bacgroundImage});
  background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.backgroundLight} 20%,
      ${({ theme }) => theme.background} 30%
    ),
    url(${bacgroundImage});
  background-repeat: no-repeat;
  background-size: 100% auto;
  flex-direction: column;
  display: flex;
  position: fixed;
  width: 100%;
  overflow-y: hidden;
  top: 0;
  bottom: 0;
`;

const PlaylistWrapper = styled.div`
  padding: 10% 10% 0 4%;
  text-align: center;
  flex: 1;
  ol {
    list-style: none;
    counter-reset: item;
    display: flex;
    flex-direction: column;
  }
  li {
    counter-increment: item;
    margin-bottom: 30px;
    display: flex;
  }
  ol li::before {
    content: counter(item);
    width: 40px;
    color: ${({ theme }) => theme.grey};
    display: inline-block;
  }
`;
const PlaylistViewWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 30px;
`;

const More = ({ song, activeSongIndex, hide }) => {
  const covers = [unreleased, cover, cover1];

  return (
    <StyledWrapper>
      <TopNavbar navType="playlist" showLess={hide} />
      <PlaylistViewWrapper>
        <PlaylistWrapper>
          <ol>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={400} />
            </li>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={400} />
            </li>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={400} />
            </li>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={400} />
            </li>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={400} />
            </li>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={400} />
            </li>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={400} />
            </li>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={400} />
            </li>
          </ol>
        </PlaylistWrapper>
        <ButtonWrapper>
          <Button>SHUFFLE PLAY</Button>
        </ButtonWrapper>
      </PlaylistViewWrapper>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  activeSongIndex: state.songs.activeSongIndex,
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});

export default compose(connect(mapStateToProps), withTheme)(More);
