import React from 'react';
import {
    Link,
  } from 'react-router-dom'
import  './SidePanel.css';

const sidePanel = props => {
    let panelClasses = 'side-panel';
    if(props.show) {
        panelClasses = 'side-panel open';
    }
    return (
    <nav className= {panelClasses} >
        <ul>
            <li><Link className="nav-link" to="/" onClick={props.click}>Home</Link></li>
            <li><Link className="nav-link" to="/topics" onClick={props.click}>Topics</Link></li>
        </ul>
    </nav>
    );
}

export default sidePanel;