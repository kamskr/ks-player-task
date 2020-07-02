import React, { useMemo, useEffect, useState } from 'react';
import styled, { css, withTheme } from 'styled-components';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import SoundWave from '../../atoms/SoundWave/SoundWave';
import moment from 'moment';
//icons
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changeSong } from '../../../redux/actionCreators/songsActionCreators';

let lastActiveSongIndex = 0;

const StyledWrapper = styled.div``;
const ProgressBarWrapper = styled.div`
  display: flex;
  margin: 20px 30px;
`;
const Span = styled.span`
  margin: auto 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.black};
`;

const ProgressSection = ({ songsById, songs, activeSongIndex, isPlaying, repeat, changeSong }) => {
  const [songProgress, setSongProgress] = useState(0);
  const song = songsById[songs[activeSongIndex]];
  const percent = useMemo(() => (songProgress / song.duration) * 100, [songProgress]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (songProgress < song.duration) {
        if (isPlaying) setSongProgress(songProgress + 1);
      } else {
        const nextSongIndex = repeat
          ? activeSongIndex
          : activeSongIndex + 1 >= songs.length
          ? 0
          : activeSongIndex + 1;
        changeSong(nextSongIndex);
        setSongProgress(0);
      }

      if (lastActiveSongIndex !== activeSongIndex) {
        clearTimeout(timer);
        setSongProgress(0);
        lastActiveSongIndex = activeSongIndex;
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [songProgress]);

  return (
    <StyledWrapper>
      <ProgressBarWrapper>
        <Span>
          {moment({ minutes: Math.floor(songProgress / 60), seconds: songProgress % 60 }).format(
            'm:ss',
          )}
        </Span>
        <ProgressBar progress={percent} />
        <Span>
          {moment({ minutes: Math.floor(song.duration / 60), seconds: song.duration % 60 }).format(
            'm:ss',
          )}
        </Span>
      </ProgressBarWrapper>

      <SoundWave progress={percent} />
    </StyledWrapper>
  );
};

const mapDispatchToProps = {
  changeSong,
};

const mapStateToProps = (state) => ({
  songsById: state.songs.byId,
  songs: state.songs.allIds,
  activeSongIndex: state.songs.activeSongIndex,
  isPlaying: state.songs.isPlaying,
  repeat: state.songs.repeat,
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withTheme)(ProgressSection);
