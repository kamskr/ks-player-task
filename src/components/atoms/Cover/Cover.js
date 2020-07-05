import styled, { css } from 'styled-components';

const Cover = styled.div`
  width: 25vw;
  height: 25vw;
  max-width: 13vh;
  max-height: 13vh;
  border-radius: 50%;
  background-image: url(${({ coverImageUrl }) => coverImageUrl});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  margin: 52px auto;

  ${({ active }) =>
    active &&
    css`
      width: 50vw;
      height: 50vw;
      max-width: 26vh;
      max-height: 26vh;

      margin: 0px auto;
      transition: 0.3s;
    `}

  ${({ more }) =>
    more &&
    css`
      width: 40vw;
      height: 40vw;
      max-width: 20vh;
      max-height: 20vh;

      margin: 0px auto 20px auto;
    `}
`;

export default Cover;
