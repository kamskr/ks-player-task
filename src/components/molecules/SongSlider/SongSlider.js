import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Cover from '../../atoms/Cover/Cover';
//slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//covers
import Cover1 from '../../../assets/covers/cover.png';
import Cover2 from '../../../assets/covers/cover-1.png';
import Unreleased_cover from '../../../assets/covers/unreleased_cover.png';

const StyledWrapper = styled.div`
  .slider-active > div {
    -webkit-transform: scale(2.5);
    -moz-transform: scale(2.5);
    -o-transform: scale(2.5);
    -ms-transform: scale(2.5);
    transform: scale(2.5);
  }
`;
const CoverWrapper = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.background};
  position: relative;
`;

export default class SongSlider extends Component {
  state = {
    activeSlide: 1,
    activeSlide2: 0,
  };
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: '25%',
      slidesToShow: 1,
      wipeToSlide: true,
      focusOnSelect: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: (current) => this.setState({ activeSlide2: current }),
    };

    return (
      <StyledWrapper>
        <p>
          BeforeChange activeSlide: <strong>{this.state.activeSlide}</strong>
        </p>
        <p>
          AfterChange activeSlide: <strong>{this.state.activeSlide2}</strong>
        </p>
        <Slider {...settings}>
          <CoverWrapper>
            <Cover coverImage={Unreleased_cover} active />
          </CoverWrapper>
          <CoverWrapper>
            <Cover coverImage={Cover1} />
          </CoverWrapper>
          <CoverWrapper>
            <Cover coverImage={Cover2} />
          </CoverWrapper>
        </Slider>
      </StyledWrapper>
    );
  }
}
