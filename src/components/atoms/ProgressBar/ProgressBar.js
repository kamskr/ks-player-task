import styled from 'styled-components';
import React from 'react';

const BarContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  margin: auto 10px;
`;

const ActiveBar = styled.input`
  transition: 3s;
  -webkit-appearance: none;
  position: absolute;
  background: ${({ theme }) => theme.progressBar};
  height: 6px;
  border-radius: 6px;
  width: 99%;
  top: -5px;
  overflow: hidden;
  :focus {
    outline: none;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 6px;
    width: 6px;
    box-shadow: -100vw 0 0 99.5vw ${({ theme }) => theme.progressBar};
    background: ${({ theme }) => theme.progressBar};
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.background};
    border: none;
    height: 6px;
    width: 99%;
  }
`;
const BackgroundBar = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.progressBar};
  height: 2px;
  width: 99%;
  margin: 2px;
  text-align: center;
  top: -3px;
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

const ProgressBar = ({ progress, onRewind }) => (
  <BarContainer>
    <ActiveBar
      type="range"
      value={progress}
      min="0"
      max="100"
      step="1"
      onChange={({ target }) => onRewind(parseInt(target.value))}
    />
    <BackgroundBar />
    <Dot />
  </BarContainer>
);
export default ProgressBar;
// https://dev.to/richiksc/standardizing-input-type-range-styling-3lkl
