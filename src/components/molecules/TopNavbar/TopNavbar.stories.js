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
export const topNavbarMain = () => <TopNavbar isPlaying="false" navType="main" />;
export const topNavbarPlaylistActive = () => <TopNavbar isPlaying="true" navType="playlist" />;
export const topNavbarPlaylistInactive = () => <TopNavbar isPlaying="false" navType="playlist" />;
export const topNavbarMore = () => <TopNavbar isPlaying="false" navType="viewMore" />;
// Knobs as dynamic variables.
