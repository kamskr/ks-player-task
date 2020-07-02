import styled, { css } from 'styled-components';

const Cover = styled.div`
  width: 120px;
  height: 120px;
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
      width: 200px;
      height: 200px;
    `}
`;

export default Cover;
