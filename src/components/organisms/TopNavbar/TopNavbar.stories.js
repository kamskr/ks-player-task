import React from 'react';
import styled from 'styled-components';
import TopNavbar from './TopNavbar';

export default {
  title: 'TopNavbar',
  decorators: [(storyFn) => <DarkBackground>{storyFn()}</DarkBackground>],
};

const DarkBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 500px;
  background: ${({ theme }) => theme.background};
`;
export const topNavbarMain = () => <TopNavbar navType="main" main />;
export const topNavbarPlaylist = () => <TopNavbar navType="playlist" playlist />;
export const topNavbarMore = () => <TopNavbar navType="viewMore" more />;
