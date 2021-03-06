import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    </MuiThemeProvider>
  ,
  document.getElementById('root')
);
