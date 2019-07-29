import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import SidePanel from './components/SidePanel/SidePanel'
import Backdrop from './components/Backdrop/Backdrop'

class App extends Component {
  state = {
    sidePanelOpen: false
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
      <div style={{height: '100%'}}>
        <Toolbar sidePanelClickHandler={this.sidePanelClickHandler}/>
        <SidePanel show={this.state.sidePanelOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>      
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
