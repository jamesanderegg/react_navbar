import React from 'react';

import {
    Link
  } from 'react-router-dom'

import ToggleButton from '../SidePanel/ToggleButton';
import './Toolbar.css';



//function component
const toolbar = props => (
    
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                <ToggleButton click={props.sidePanelClickHandler}/>
                </div>
                <div className="toolbar__logo"><a href="/">DataFluent</a></div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><Link className="nav-link" to="/" >Home</Link></li>
                        <li><Link className="nav-link" to="/projects">Projects</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    
);

export default toolbar;

