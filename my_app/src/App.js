import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route // for later
} from 'react-router-dom'

import Toolbar from './components/Toolbar/Toolbar'
import SidePanel from './components/SidePanel/SidePanel'
import Backdrop from './components/Backdrop/Backdrop'

import Projects from './components/Projects/Projects'

function Home () {
  
  return (
    <div className="home-container">
      
    </div>
  )
}


class App extends Component {
  state = {
    sidePanelOpen: false,
  };
  
  sidePanelClickHandler = () => {
    this.setState((prevState) => {
      return {sidePanelOpen: !prevState.sidePanelOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({sidePanelOpen: false});
  }

  render(){

    let backdrop;
    
    if (this.state.sidePanelOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Toolbar sidePanelClickHandler={this.sidePanelClickHandler} />
          <SidePanel show={this.state.sidePanelOpen} click={this.backdropClickHandler}/>
          {backdrop}
          <main style={{ marginTop: '64px' }}>      
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

