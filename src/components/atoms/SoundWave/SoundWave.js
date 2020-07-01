import styled, { css } from 'styled-components';
import React, { Component, useRef } from 'react';

const SoundWave = ({ progress }) => {
  const ref = useRef();

  return <canvas ref={ref} id="myCanvas" width="200" height="100" />;
};

export default SoundWave;
