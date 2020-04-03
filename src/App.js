import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Workouts from './containers/Workouts'
import WorkoutNew from './containers/WorkoutNew'
import About from './components/About'
import Navbar from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/workouts' component={Workouts}/>
            <Route exact path="/workouts/new" render={ props => <WorkoutNew {...props} addWorkout={this.addWorkout} /> } />
            <Route exact path='/about' component={About}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
