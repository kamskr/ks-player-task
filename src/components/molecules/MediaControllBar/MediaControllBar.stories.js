import React from 'react';
import styled from 'styled-components';
import MediaControllBar from './MediaControllBar';

export default {
  title: 'MediaControllBar',
  decorators: [(storyFn) => <DarkBackground>{storyFn()}</DarkBackground>],
};

const DarkBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 500px;
  background: ${({ theme }) => theme.background};
  button {
    margin: 0 20px;
  }
`;
export const mediaControllBar = () => <MediaControllBar />;
