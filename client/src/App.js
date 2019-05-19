import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Jumbotron} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
