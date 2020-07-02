import styled, { css, withTheme } from 'styled-components';
import React, { useRef, useEffect, useMemo } from 'react';

const Canvas = styled.canvas`
  width: 100%;
  height: 30px;
`;
let speed = 3;
let stop = false;
let first = true;

const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

const generateArray = (current, theme) => {
  if (!current) return [];

  let lineArray = [];
  const ctx = current.getContext('2d');
  const width = current.width;
  ctx.lineWidth = 2;
  ctx.strokeStyle = theme.accent;

  for (let x = 0.5; x < width; x += ctx.lineWidth) {
    lineArray.push({
      x,
      y: 50 - Math.random() * 50,
      direction: speed - 1 + Math.random() * speed,
    });
  }
  return lineArray;
};

const draw = (lineArray, ref, progress, isPlaying) => {
  if (stop) {
    stop = false;
    return;
  }

  const { current } = ref;
  if (!current) return;
  const ctx = current.getContext('2d');
  const width = current.width;
  const height = current.height;
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

  if (isPlaying) {
    requestAnimationFrame(() => draw(lineArray, ref, progress, isPlaying));
  }
};

const SoundWave = ({ progress, theme, isPlaying }) => {
  const ref = useRef(null);
  const barArray = useMemo(() => generateArray(ref.current, theme), [ref.current, theme]);

  useEffect(() => {
    if (!first) stop = true;
    draw(barArray, ref, progress, isPlaying);

    return () => (stop = true);
  }, [barArray, ref, progress, isPlaying]);

  return <Canvas ref={ref} />;
};

export default withTheme(SoundWave);
