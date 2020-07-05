import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Cover from '../../atoms/Cover/Cover';
import cover from '../../../assets/covers/cover.png';
import cover1 from '../../../assets/covers/cover-1.png';
import unreleased from '../../../assets/covers/unreleased_cover.png';
//slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//redux
import { connect } from 'react-redux';
import { changeSong } from '../../../redux/actionCreators/songsActionCreators';

const StyledWrapper = styled.div`
  margin: auto 0;
`;
const CoverWrapper = styled.div`
  display: flex;
  flex: 1;
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
    arrows: false,
    afterChange: (current) => changeSong(current),
  };
  const ref = useRef();
  const covers = [unreleased, cover, cover1];
  useEffect(() => {
    ref.current.slickGoTo(activeSongIndex);
  }, [activeSongIndex]);

  return (
    <StyledWrapper>
      <Slider {...settings} ref={ref}>
        {songsIds.map((id, index) => (
          <CoverWrapper key={id + '-song'}>
            <Cover coverImageUrl={covers[index]} active={index === activeSongIndex} />
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
