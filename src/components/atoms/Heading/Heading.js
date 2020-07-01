import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, bold }) => (bold ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme, bold }) => (bold ? theme.bold : theme.light)};
  color: ${({ theme }) => theme.white};

  ${({ secondary }) =>
    secondary &&
    css`
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => theme.accent2};
    `}
`;

export default Heading;
