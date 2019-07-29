import React from 'react';

import  './SidePanel.css';

const sidePanel = props => (
    <nav className="side-panel">
        <ul>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Users</a></li>

        </ul>
    </nav>
);

export default sidePanel;