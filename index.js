import React from 'react';
import { render } from 'react-dom';

// main app
import App from './app/App';
import makeStore from './app/configureStore';
import Routes from './app/Routes';

require('./app/styles/style.css');

const store = makeStore();

const renderApp = () => render(
    <App store={store} routes={Routes} />, document.getElementById('app'));


renderApp();

if (module.hot) {
    module.hot.accept('./app/Routes', () => {
        renderApp();
    });
}