import React, { Component } from 'react';
import styled from 'styled-components';
import Cover from '../../atoms/Cover/Cover';
//slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//redux
import { connect } from 'react-redux';
import { changeSong } from '../../../redux/actionCreators/songsActionCreators';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const CoverWrapper = styled.div`
  height: 300px;
  margin: auto;
  background-color: ${({ theme }) => theme.background};
`;

const SongSlider = ({ songsIds, songsById, changeSong, activeSongIndex }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '25%',
    slidesToShow: 1,
    wipeToSlide: true,
    focusOnSelect: true,
    beforeChange: null,
    afterChange: (current) => changeSong(current),
  };

  return (
    <StyledWrapper>
      <Slider {...settings}>
        {songsIds.map((id, index) => (
          <CoverWrapper key={id + '-song'}>
            <Cover
              coverImageUrl={window.location.href + songsById[id].cover}
              active={index === activeSongIndex}
            />
          </CoverWrapper>
        ))}
      </Slider>
    </StyledWrapper>
  );
};

const mapDispatchToProps = {
  changeSong,
};

const mapStateToProps = (state) => ({
  songsById: state.songs.byId,
  songsIds: state.songs.allIds,
  activeSongIndex: state.songs.activeSongIndex,
});

export default connect(mapStateToProps, mapDispatchToProps)(SongSlider);
