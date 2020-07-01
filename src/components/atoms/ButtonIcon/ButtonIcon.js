import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
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
      background-color: ${({ theme }) => theme.background};
      background-position: left 6px center;
    `}
  ${({ notPlayingIcon }) =>
    notPlayingIcon &&
    css`
      width: 124px;
      height: 124px;
      background-size: 100%;
      background-color: ${({ theme }) => theme.background};
    `}
    ${({ moreIcon }) =>
      moreIcon &&
      css`
        width: 124px;
        height: 124px;
        background-size: 100%;
        background-color: ${({ theme }) => theme.background};
      `}
`;

export default ButtonIcon;
