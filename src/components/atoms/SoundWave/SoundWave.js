import styled, { css, withTheme } from 'styled-components';
import React, { Component, useRef, useEffect } from 'react';

const Canvas = styled.canvas`
  width: 50%;
  height: 50px;
`;

const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

const start = (current, theme, progress) => {
  let lineArray = [];
  const ctx = current.getContext('2d');
  const width = current.width;
  const height = current.height;
  ctx.lineWidth = width / 200;
  ctx.strokeStyle = theme.accent;
  for (let x = 0; x < width; x += ctx.lineWidth) {
    lineArray.push({
      x,
      y: height / 2 - Math.random() * (x % 6 === 0 ? height : height * 0.75) + 10,
      direction: 1,
    });
  }
  console.log(ctx);
  draw(lineArray, width, height, ctx);
};

const draw = (lineArray, width, height, ctx) => {
  ctx.clearRect(0, 0, width, height);
  for (let line of lineArray) {
    if (line.y >= height || line.y <= 0) {
      line.direction = -line.direction;
    }

    ctx.beginPath();
    ctx.moveTo(line.x, height);
    ctx.lineTo(line.x, (line.y += line.direction));
    ctx.stroke();
  }

  requestAnimationFrame(() => draw(lineArray, width, height, ctx));
};

const SoundWave = ({ progress, theme }) => {
  const ref = useRef(null);
  useEffect(() => {
    start(ref.current, theme, progress);
  });

  return <Canvas ref={ref} />;
};

export default withTheme(SoundWave);
