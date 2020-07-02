import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
//icons
import { connect } from 'react-redux';

const SongDisplayStyle = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  p {
    margin-top: -10px;
    margin-bottom: -4px;
  }
`;

const Dots = styled.span`
  flex: 1;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.grey} 40%,
    rgba(255, 255, 255, 0) 10%
  );
  margin: 0 10px;
  background-position: bottom;
  background-size: 3px 1px;
  background-repeat: repeat-x;
`;
const SongDisplay = (props) => (
  <SongDisplayStyle>
    <Paragraph color="black">{props.songTitle}</Paragraph>
    <Dots />
    <Paragraph color="grey">
      {moment({ minutes: Math.floor(props.duration / 60), seconds: props.duration % 60 }).format(
        'm:ss',
      )}
    </Paragraph>
  </SongDisplayStyle>
);

const mapStateToProps = (state) => ({
  songs: state.songs.allIds,
  activeSongIndex: state.songs.activeSongIndex,
  isPlaying: state.songs.isPlaying,
  repeat: state.songs.repeat,
});
export default SongDisplay;
