import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import SongSlider from '../../components/molecules/SongSlider/SongSlider';
import MediaControllBar from '../../components/molecules/MediaControllBar/MediaControllBar';
//redux
import { Provider } from 'react-redux';
import store from '../../redux/store';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Fragment>
          <MediaControllBar />
        </Fragment>
      </Provider>
    </ThemeProvider>
  </div>
);

export default Root;
