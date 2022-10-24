import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MuiMode } from './components/mui/mui-mode';
import { AppProviders } from './components/providers/app-providers';

function App() {
  return (
    <div className="App">
      <AppProviders>
        <MuiMode></MuiMode>
      </AppProviders>
      
    </div>
  );
}

export default App;
