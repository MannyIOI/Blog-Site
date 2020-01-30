import React from 'react';
import './App.css';
import Routes from './routers/routes';
import {getAvailableServer} from "./api/api"

// getAvailableServer()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes/>
      </header>
    </div>
  );
}

export default App;
