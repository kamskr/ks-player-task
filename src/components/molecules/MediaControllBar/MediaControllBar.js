import React, { useCallback } from 'react';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
//icons
import PlayActiveIcon from '../../../assets/icons/Play_active.png';
import PlayInactiveIcon from '../../../assets/icons/Play_inactive.png';
import NextIcon from '../../../assets/icons/next_ico.svg';
import PreviousIcon from '../../../assets/icons/previous_ico.svg';
import RepeatIcon from '../../../assets/icons/repeat_ico.svg';
import ShuffleIcon from '../../../assets/icons/shuffle_ico.svg';
//redux
import { connect } from 'react-redux';
import {
  changeSong,
  play,
  pause,
  changeRepeat,
  changeShuffle,
} from '../../../redux/actionCreators/songsActionCreators';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin: 0 30px;
`;

const getRandomSong = (current, length) => {
  if (length < 2) return current;
  const index = Math.floor(Math.random() * length);
  return index !== current ? index : getRandomSong(current, length);
};

const MediaControllBar = ({
  isPlaying,
  activeSongIndex,
  changeSong,
  play,
  pause,
  songs,
  changeRepeat,
  repeat,
  isShuffle,
  changeShuffle,
}) => {
  const shuffle = useCallback(() => changeSong(getRandomSong(activeSongIndex, songs.length)), [
    activeSongIndex,
    songs.length,
    changeSong,
  ]);

  const playNext = useCallback(() => {
    console.log(isShuffle);
    if (isShuffle) {
      shuffle();
      return;
    }
    let nextSongIndex = 0;
    if (!(activeSongIndex + 1 >= songs.length)) {
      nextSongIndex = activeSongIndex + 1;
    }
    changeSong(nextSongIndex);
  }, [songs, activeSongIndex, changeSong, repeat, shuffle]);

  const playPrevious = useCallback(() => {
    if (isShuffle) {
      shuffle();
      return;
    }
    let nextSongIndex = songs.length - 1;
    if (!(activeSongIndex - 1 < 0)) {
      nextSongIndex = activeSongIndex - 1;
    }
    changeSong(nextSongIndex);
  }, [songs, activeSongIndex, changeSong]);

  return (
    <StyledWrapper>
      <ButtonIcon
        icon={ShuffleIcon}
        active={isShuffle ? true : undefined}
        onClick={changeShuffle}
      />
      <ButtonIcon icon={PreviousIcon} onClick={playPrevious} />
      {isPlaying && <ButtonIcon icon={PlayActiveIcon} onClick={pause} playingIcon />}
      {!isPlaying && <ButtonIcon icon={PlayInactiveIcon} onClick={play} notPlayingIcon />}
      <ButtonIcon icon={NextIcon} onClick={playNext} />
      <ButtonIcon icon={RepeatIcon} active={repeat ? true : undefined} onClick={changeRepeat} />
    </StyledWrapper>
  );
};

const mapDispatchToProps = {
  changeSong,
  play,
  pause,
  changeRepeat,
  changeShuffle,
};

const mapStateToProps = (state) => ({
  songs: state.songs.allIds,
  activeSongIndex: state.songs.activeSongIndex,
  isPlaying: state.songs.isPlaying,
  repeat: state.songs.repeat,
  isShuffle: state.songs.isShuffle,
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaControllBar);
