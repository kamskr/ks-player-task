import styled, { css } from 'styled-components';

const Cover = styled.button`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-image: url(${({ coverImage }) => coverImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;

  ${({ unreleased }) =>
    unreleased &&
    css`
      width: 300px;
      height: 300px;
    `}
`;

export default Cover;
