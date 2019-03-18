import React from 'react';
import { Link } from 'react-router';

const Layout = props => {
    return (
        <div className="layout">
            <ul>
                <li><Link to="/app">Home</Link></li>
                <li><Link to="/app/test">Test</Link></li>
            </ul>
            {props.children}
        </div>
    );
};

export default Layout;