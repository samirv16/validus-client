import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './containers/Home'
import Workouts from './containers/Workouts'
import WorkoutNew from './containers/WorkoutNew'
import About from './containers/About'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <Navbar/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/workouts' component={Workouts}/>
            <Route exact path='/workouts/new' component={WorkoutNew}/>
            <Route exact path='/about' component={About}/>
        </div>
    </Router>
  )
}

export default App;
