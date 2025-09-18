import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <h1>Git Workflow Training Project</h1>
          <p>This is a practice project for learning Git workflows.</p>
          <Card />
          <Button />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
