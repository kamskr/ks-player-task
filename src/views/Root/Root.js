import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import Main from '../../templates/Main/Main';
import More from '../../templates/More/More';
import Playlist from '../../templates/Playlist/Playlist';
//redux
import { Provider } from 'react-redux';
import store from '../../redux/store';

const Root = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Main showMore={setShowMore} />
        {showMore ? <More /> : <></>}
        {/* <Playlist /> */}
      </Provider>
    </ThemeProvider>
  );
};

export default Root;
