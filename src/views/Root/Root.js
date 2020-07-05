import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import Main from '../../templates/Main/Main';
import More from '../../templates/More/More';
import Playlist from '../../templates/Playlist/Playlist';
//redux
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { CSSTransition } from 'react-transition-group';

const App = styled.div`
  position: relative;
  height: 100%;
  /* overflow-y: auto; */
  top: 0;
  bottom: 0;
  /* .fade-enter .div {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active .div {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit .div {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active .div {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active .div,
  .fade-exit-active .div {
    transition: opacity 500ms, transform 500ms;
  } */
`;

const Root = () => {
  const [showMore, setShowMore] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App>
          <Main showPlaylist={() => setShowPlaylist(true)} showMore={() => setShowMore(true)} />
          {/* <More hide={() => setShowMore(false)} /> */}
          <CSSTransition in={showMore} timeout={300} unmountOnExit>
            <More hide={() => setShowMore(false)} />
          </CSSTransition>
          {/* <CSSTransition in={showPlaylist} timeout={300} unmountOnExit> */}
          <Playlist hide={() => setShowPlaylist(false)} />
          {/* </CSSTransition> */}
          {/* <Playlist hidden={!showPlaylist} hide={() => setShowPlaylist(false)} /> */}
        </App>
      </Provider>
    </ThemeProvider>
  );
};

export default Root;
