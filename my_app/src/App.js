import React from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import SidePanel from './components/SidePanel/SidePanel'

function App() {
  return (
    <div style={{height: '100%'}}>
      <Toolbar />
      <SidePanel />
      <main style={{ marginTop: '64px' }}>      
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
