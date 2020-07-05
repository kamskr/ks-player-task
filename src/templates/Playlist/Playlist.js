import React from 'react';
import styled, { withTheme } from 'styled-components';
import TopNavbar from '../../components/organisms/TopNavbar/TopNavbar';
import SongDisplay from '../../components/molecules/SongDisplay/SongDisplay';
import Button from '../../components/atoms/Button/Button';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import HideIcon from '../../assets/icons/hide_ico.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import bacgroundImage from '../../assets/bg_image.jpg';
import { changeShuffle } from '../../redux/actionCreators/songsActionCreators';
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
const GradientOverlay = styled.div`
  position: absolute;
  background-image: linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  background-image: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-image: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-image: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100%;
  height: 80%;
  pointer-events: none;
`;
const PlaylistWrapper = styled.div`
  padding: 20px 40px 0px 40px;
  text-align: center;
  overflow: scroll;
  flex: 1;
  ol {
    padding: 0;
    height: 110%;
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
    content: counter(item) '.';
    width: 40px;
    margin-right: 20px;
    color: ${({ theme }) => theme.grey};
    display: inline-block;
  }
`;
const PlaylistViewWrapper = styled.div`
  display: flex;
  /* position: relative; */
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.white};
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0px 40px 0 40px;
`;

const Playlist = ({ hide, changeShuffle, isShuffle }) => {
  const shuffleOnClick = () => {
    if (isShuffle) {
      hide();
      return;
    }
    hide();
    changeShuffle();
  };

  return (
    <StyledWrapper>
      <TopNavbar navType="playlist" showLess={hide} />
      <PlaylistViewWrapper>
        <GradientOverlay />
        <PlaylistWrapper>
          <ol>
            <li>
              <SongDisplay songTitle="Livin' In A Movie" duration={213} />
            </li>
            <li>
              <SongDisplay songTitle="Dark Fantasy" duration={221} />
            </li>
            <li>
              <SongDisplay songTitle="All of the Lights" duration={155} />
            </li>
            <li>
              <SongDisplay songTitle="So Appalled" duration={234} />
            </li>
            <li>
              <SongDisplay songTitle="Devil in a New Dress" duration={298} />
            </li>
            <li>
              <SongDisplay songTitle="Runaway" duration={288} />
            </li>
            <li>
              <SongDisplay songTitle="Hell of a Life" duration={270} />
            </li>
            <li>
              <SongDisplay songTitle="Blame Game" duration={266} />
            </li>
            <li>
              <SongDisplay songTitle="Lost in the World" duration={287} />
            </li>
            <li>
              <SongDisplay songTitle="Who Will Survive in America" duration={312} />
            </li>
            <li>
              <SongDisplay songTitle="Dark Fantasy" duration={299} />
            </li>
          </ol>
        </PlaylistWrapper>
        <ButtonWrapper>
          <Button onClick={shuffleOnClick}>SHUFFLE PLAY</Button>
          <ButtonIcon icon={HideIcon} onClick={hide} hideIcon />
        </ButtonWrapper>
      </PlaylistViewWrapper>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  isShuffle: state.songs.isShuffle,
  activeSongIndex: state.songs.activeSongIndex,
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});

export default compose(connect(mapStateToProps, { changeShuffle }), withTheme)(Playlist);
