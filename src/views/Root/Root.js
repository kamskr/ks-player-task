import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import SongSlider from '../../components/molecules/SongSlider/SongSlider';
import MediaControllBar from '../../components/molecules/MediaControllBar/MediaControllBar';
import BottomNavbar from '../../components/organisms/BottomNavbar/BottomNavbar';
import SongDisplay from '../../components/molecules/SongDisplay/SongDisplay';
import SoundWave from '../../components/atoms/SoundWave/SoundWave';
import ProgressSection from '../../components/molecules/ProgressSection/ProgressSection';
import Player from '../../components/organisms/Player/Player';
import Main from '../../templates/Main/Main';
//redux
import { Provider } from 'react-redux';
import store from '../../redux/store';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>
  </div>
);

export default Root;
