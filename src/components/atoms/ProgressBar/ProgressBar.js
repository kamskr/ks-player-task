import styled, { css } from 'styled-components';
import React, { Component } from 'react';

const BarContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  margin: auto 10px;
`;

const ActiveBar = styled.div`
  transition: 0.3s;
  position: absolute;
  background: ${({ theme }) => theme.progressBar};
  width: ${({ progress }) => progress + '%'};
  height: 6px;
  min-width: 6px;
  border-radius: 6px;
  top: -3px;
`;
const BackgroundBar = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.progressBar};
  height: 2px;
  width: 100%;
  text-align: center;
  top: -1px;
`;

const Dot = styled.div`
  background: ${({ theme }) => theme.progressBar};
  position: absolute;
  right: 0;
  height: 6px;
  width: 6px;
  top: -3px;
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
