import React from 'react';
import './Toolbar.css';

//function component
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div></div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Users</a></li>

                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;