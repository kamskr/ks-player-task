import styled, { css } from 'styled-components';

const Cover = styled.div`
  width: 104px;
  height: 104px;
  max-width: 300px;
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
      width: 208px;
      height: 208px;
      max-width: 400px;

      margin: 0px auto;
      transition: 0.3s;
    `}

  ${({ more }) =>
    more &&
    css`
      width: 156px;
      height: 156px;
      max-width: 400px;

      margin: 0px auto;
    `}
`;

export default Cover;
