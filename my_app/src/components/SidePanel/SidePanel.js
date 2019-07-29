import React from 'react';

import  './SidePanel.css';

const sidePanel = props => {
    let panelClasses = 'side-panel';
    if(props.show) {
        panelClasses = 'side-panel open';
    }
    return (
    <nav className= {panelClasses} >
        <ul>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Users</a></li>

        </ul>
    </nav>
    );
}

export default sidePanel;