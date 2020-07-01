import styled, { css } from 'styled-components';
import React, { Component } from 'react';

const BarContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

const ActiveBar = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.progressBar};
  width: ${({ progress }) => progress + '%'};
  height: 6px;
  min-width: 6px;
  border-radius: 6px;
`;
const BackgroundBar = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.progressBar};
  height: 2px;
  width: 100%;
  top: 2px;
  text-align: center;
`;

const Dot = styled.div`
  background: ${({ theme }) => theme.progressBar};
  position: absolute;
  right: 0;
  height: 6px;
  width: 6px;
  border-radius: 6px;
`;

const ProgressBar = ({ progress }) => (
  <BarContainer>
    <ActiveBar progress={progress} />
    <BackgroundBar />
    <Dot />
  </BarContainer>
);

export default ProgressBar;
