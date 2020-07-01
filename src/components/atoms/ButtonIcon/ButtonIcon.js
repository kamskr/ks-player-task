import styled, { css } from 'styled-components';
import React, { Component, Fragment } from 'react';

const Icon = styled.button`
  width: 67px;
  height: 67px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  ${({ playingIcon }) =>
    playingIcon &&
    css`
      width: 204px;
      height: 204px;
      background-size: 100%;
      background-color: transparent;
      background-position: left 6px center;
    `}
  ${({ notPlayingIcon }) =>
    notPlayingIcon &&
    css`
      width: 124px;
      height: 124px;
      background-size: 100%;
      background-color: transparent;
    `}
    ${({ moreIcon }) =>
      moreIcon &&
      css`
        width: 10px;
        background-size: 100%;
        background-color: transparent;
      `}
`;

const MoreWrapper = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
`;

const ButtonIcon = (props) => (
  <>
    {!props.moreIcon && (
      <Icon
        icon={props.icon}
        playingIcon={props.playingIcon}
        notPlayingIcon={props.notPlayingIcon}
      />
    )}
    {props.moreIcon && (
      <MoreWrapper>
        <Icon icon={props.icon} moreIcon={props.moreIcon} />
        <Icon icon={props.icon} moreIcon={props.moreIcon} />
        <Icon icon={props.icon} moreIcon={props.moreIcon} />
      </MoreWrapper>
    )}
  </>
);

export default ButtonIcon;
