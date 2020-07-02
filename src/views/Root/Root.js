import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import SongSlider from '../../components/molecules/SongSlider/SongSlider';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Fragment>
        <SongSlider />
      </Fragment>
    </ThemeProvider>
  </div>
);

export default Root;
