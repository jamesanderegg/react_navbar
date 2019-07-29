import React from 'react';

import ToggleButton from '../SidePanel/ToggleButton';
import './Toolbar.css';

//function component
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
              <ToggleButton click={props.sidePanelClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
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