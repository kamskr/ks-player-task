import styled, { css } from 'styled-components';

const Cover = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-image: url(${({ coverImageUrl }) => coverImageUrl});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  margin: 150px auto 0 auto;
  transform: translate(0%, -50%);

  ${({ active }) =>
    active &&
    css`
      width: 300px;
      height: 300px;
    `}
`;

export default Cover;
