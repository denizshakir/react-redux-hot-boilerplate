import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';

class App extends Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <Router
                    history={browserHistory}>
                    {this.props.routes}
                </Router>
            </Provider >);
    }
}

export default hot(module)(App);