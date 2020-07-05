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
  height: 100%;
  /* overflow-y: auto; */
  top: 0;
  bottom: 0;

  .pageSliderLeft-enter {
    transform: translate3d(100%, 0, 0);
  }
  .pageSliderLeft-enter.pageSliderLeft-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 300ms;
  }
  .pageSliderLeft-exit {
    transform: translate3d(0, 0, 0);
  }
  .pageSliderLeft-exit.pageSliderLeft-exit-active {
    transform: translate3d(100%, 0, 0);
    transition: all 300ms;
  }

  .pageSliderRight-enter {
    transform: translate3d(-100%, 0, 0);
  }
  .pageSliderRight-enter.pageSliderRight-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 300ms;
  }
  .pageSliderRight-exit {
    transform: translate3d(0, 0, 0);
  }
  .pageSliderRight-exit.pageSliderRight-exit-active {
    transform: translate3d(-100%, 0, 0);
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
          {/* <More hide={() => setShowMore(false)} /> */}
          <CSSTransition
            in={showMore}
            timeout={300}
            classNames="pageSliderLeft"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <More hide={() => setShowMore(false)} />
          </CSSTransition>
          <CSSTransition in={showPlaylist} timeout={300} unmountOnExit>
            <Playlist hide={() => setShowPlaylist(false)} />
          </CSSTransition>
          {/* <Playlist hidden={!showPlaylist} hide={() => setShowPlaylist(false)} /> */}
        </App>
      </Provider>
    </ThemeProvider>
  );
};

export default Root;
