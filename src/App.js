import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Ticket from './components/Ticket'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/ticket" component={Ticket}/>
      </Router>
      
    </div>
  );
}

export default App;
