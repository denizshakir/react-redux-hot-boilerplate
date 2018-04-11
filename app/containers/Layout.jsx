import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <ul>
                    <li><Link to="/app">Home</Link></li>
                    <li><Link to="/app/test">Test</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;