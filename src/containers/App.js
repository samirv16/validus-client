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
            <Route exact path='/workouts' component={Workouts}/>
            <Route exact path='/workouts/new' component={WorkoutForm}/>
            <Route exact path='/about' component={About}/>
        </div>
    </Router>
  )
}

export default App;
