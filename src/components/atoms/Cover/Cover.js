import styled, { css } from 'styled-components';

const Cover = styled.div`
  width: 25vw;
  height: 25vw;
  max-width: 300px;
  border-radius: 50%;
  background-image: url(${({ coverImageUrl }) => coverImageUrl});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  margin: auto;

  ${({ active }) =>
    active &&
    css`
      width: 50vw;
      height: 50vw;
      max-width: 400px;
    `}
`;

export default Cover;
