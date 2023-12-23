import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div style={{background:'black', width: "100%", height:'40px'}}></div>
    </div>
  );
}

export default App;
