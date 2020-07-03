import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import Main from '../../templates/Main/Main';
//redux
import { Provider } from 'react-redux';
import store from '../../redux/store';

const Root = () => (
  <div>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
    ;
  </div>
);

export default Root;
