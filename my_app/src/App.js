import React from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import SidePanel from './components/SidePanel/SidePanel'
import Backdrop from './components/Backdrop/Backdrop'

function App() {
  return (
    <div style={{height: '100%'}}>
      <Toolbar />
      <SidePanel />
      <Backdrop />
      <main style={{ marginTop: '64px' }}>      
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
