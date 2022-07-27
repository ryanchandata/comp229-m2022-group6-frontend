import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// Common Components
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
