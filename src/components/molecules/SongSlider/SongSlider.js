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

const StyledWrapper = styled.div``;

export default class SongSlider extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
    };

    return (
      <StyledWrapper>
        <Slider {...settings}>
          <Cover coverImage={Cover1} />
          <Cover coverImage={Unreleased_cover} />
          <Cover coverImage={Cover2} />
        </Slider>
      </StyledWrapper>
    );
  }
}
