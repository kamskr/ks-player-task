import styled, { css } from 'styled-components';

const Cover = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-image: url(${({ coverImage }) => coverImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ active }) =>
    active &&
    css`
      width: 300px;
      height: 300px;
    `}
`;

export default Cover;
