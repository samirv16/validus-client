import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Workouts from './Workouts'
import WorkoutForm from './WorkoutForm'
import About from './About'
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
