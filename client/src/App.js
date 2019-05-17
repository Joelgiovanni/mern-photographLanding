import React from 'react';
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;
