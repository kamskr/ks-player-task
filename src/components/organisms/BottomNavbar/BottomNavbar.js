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
  display: flex;
`;

const InnerSectionWrapper = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const BottomNavbar = ({ songsById, songs, activeSongIndex }) => {
  let nextSongIndex = activeSongIndex + 1 >= songs.length ? 0 : activeSongIndex + 1;
  return (
    <StyledWrapper>
      <ButtonIcon icon={PlaylistIcon} />
      <InnerSectionWrapper>
        <Paragraph color="grey">NEXT</Paragraph>
        <SongDisplay
          songTitle={songsById[songs[nextSongIndex]].name}
          duration={songsById[songs[nextSongIndex]].duration}
        />
      </InnerSectionWrapper>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  songsById: state.songs.byId,
  songs: state.songs.allIds,
  activeSongIndex: state.songs.activeSongIndex,
  isPlaying: state.songs.isPlaying,
  repeat: state.songs.repeat,
});

export default connect(mapStateToProps)(BottomNavbar);
