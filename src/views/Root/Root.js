import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import SoundWave from '../../components/atoms/SoundWave/SoundWave';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Fragment>
        <SoundWave />
      </Fragment>
    </ThemeProvider>
  </div>
);

export default Root;
