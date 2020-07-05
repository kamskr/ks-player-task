import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
//icons
import BackIcon from '../../../assets/icons/back_ico.svg';
import PlayActiveIcon from '../../../assets/icons/Play_active.png';
import PlayInactiveIcon from '../../../assets/icons/Play_inactive.png';
import MoreIcon from '../../../assets/icons/more_ico.svg';
//redux
import { connect } from 'react-redux';
import { play, pause } from '../../../redux/actionCreators/songsActionCreators';

const StyledWrapper = styled.div`
  width: 100%;
  height: 120px;
  min-height: 120px;
  padding: 0 0 0 25px;
  position: relative;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InnerCenterWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;

  /* h1 {
    margin: 0;
  } */
`;
const InnerCenterWrapperPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 10%;
  margin-left: 20px;
`;
// const InnerRightWrapper = styled.div`
//   margin-right: ;
// `;

const TopNavbar = ({ isPlaying, navType, song, showMore, showLess, play, pause }) => (
  <StyledWrapper>
    <ButtonIcon icon={BackIcon} onClick={showLess} backIcon />
    {navType === 'main' && (
      <>
        <InnerCenterWrapperMain>
          <Heading fontSize="s" secondary>
            Album
          </Heading>
          <Heading fontSize="m">{song.album}</Heading>
        </InnerCenterWrapperMain>
      </>
    )}
    {navType === 'playlist' && (
      <>
        <InnerCenterWrapperPlaylist>
          <Heading fontSize="m" bold>
            {song.album}
          </Heading>
          <Heading fontSize="s" secondary>
            {song.artist}
          </Heading>
        </InnerCenterWrapperPlaylist>
      </>
    )}
    {/* <InnerRightWrapper> */}
    {navType === 'playlist' && (
      <>
        {isPlaying && <ButtonIcon icon={PlayActiveIcon} playingIconTop onClick={pause} />}
        {!isPlaying && <ButtonIcon icon={PlayInactiveIcon} notPlayingIconTop onClick={play} />}
      </>
    )}
    {navType !== 'playlist' && <ButtonIcon onClick={showMore} icon={MoreIcon} moreIcon />}
    {/* </InnerRightWrapper> */}
  </StyledWrapper>
);

const mapDispatchToProps = {
  play,
  pause,
};

const mapStateToProps = (state) => ({
  isPlaying: state.songs.isPlaying,
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});
export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);
