import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Navbar from '../navbar/Navbar'
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <Navbar/>
            <Route exact path='/' component={Home}/>
        </div>
    </Router>
  )
}

export default App;
