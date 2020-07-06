import React from 'react';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';

export default {
  title: 'ProgressBar',
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
export const progressBar = () => <ProgressBar progress={50} />;
