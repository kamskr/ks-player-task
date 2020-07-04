import React from 'react';
import styled from 'styled-components';
import TopNavbar from '../../components/organisms/TopNavbar/TopNavbar';
import Player from '../../components/organisms/Player/Player';
import BottomNavbar from '../../components/organisms/BottomNavbar/BottomNavbar';
import bacgroundImage from '../../assets/bg_image.jpg';

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

  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Main = ({ showMore, showLess, showPlaylist }) => (
  <StyledWrapper>
    <TopNavbar showMore={showMore} showLess={showLess} navType="main" />
    <Player />
    <BottomNavbar showPlaylist={showPlaylist} />
  </StyledWrapper>
);

export default Main;