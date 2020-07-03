import styled, { css, withTheme } from 'styled-components';
import React, { useRef, useEffect } from 'react';

const Canvas = styled.canvas`
  width: 100%;
  height: 50px;
`;
var speed = 3;

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
  ctx.lineWidth = 2;
  ctx.strokeStyle = theme.accent;

  for (let x = 0.5; x < width; x += ctx.lineWidth) {
    lineArray.push({
      x,
      y: 50 - Math.random() * 50,
      direction: speed - 1 + Math.random() * speed,
    });
  }

  draw(lineArray, width, height, ctx, progress);
};

const draw = (lineArray, width, height, ctx, progress) => {
  ctx.clearRect(0, 0, width, height);
  for (let line of lineArray) {
    if (line.y >= height / 1.5 || line.y <= 0) {
      line.direction = -line.direction;
    }
    if (line.x <= width * (progress / 100)) {
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.moveTo(line.x, height);
      ctx.lineTo(line.x, (line.y += line.direction));
      ctx.stroke();
    }
  }

  requestAnimationFrame(() => draw(lineArray, width, height, ctx, progress));
};

const SoundWave = ({ progress, theme }) => {
  const ref = useRef(null);
  useEffect(() => {
    start(ref.current, theme, progress);
  });

  return <Canvas ref={ref} />;
};

export default withTheme(SoundWave);
