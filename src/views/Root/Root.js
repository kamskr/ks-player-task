import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import Main from '../../templates/Main/Main';
import More from '../../templates/More/More';
import Playlist from '../../templates/Playlist/Playlist';
//redux
import { Provider } from 'react-redux';
import store from '../../redux/store';

const App = styled.div`
  position: relative;
  height: 100vh;
  /* overflow-y: auto; */
  top: 0;
  bottom: 0;

  .moreSlide-enter {
    transform: translate3d(100%, 0, 0);
  }
  .moreSlide-enter.moreSlide-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 300ms;
  }
  .moreSlide-exit {
    transform: translate3d(0, 0, 0);
  }
  .moreSlide-exit.moreSlide-exit-active {
    transform: translate3d(100%, 0, 0);
    transition: all 300ms;
  }

  .playlistSlide-enter {
    transform: translate3d(0, 100%, 0);
  }
  .playlistSlide-enter.playlistSlide-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 300ms;
  }
  .playlistSlide-exit {
    transform: translate3d(0, 0, 0);
  }
  .playlistSlide-exit.playlistSlide-exit-active {
    transform: translate3d(0, 100%, 0);
    transition: all 300ms;
  }
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
          <CSSTransition
            in={showMore}
            timeout={300}
            classNames="moreSlide"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <More hide={() => setShowMore(false)} />
          </CSSTransition>
          <CSSTransition
            in={showPlaylist}
            timeout={300}
            classNames="playlistSlide"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Playlist hide={() => setShowPlaylist(false)} />
          </CSSTransition>
        </App>
      </Provider>
    </ThemeProvider>
  );
};

export default Root;
