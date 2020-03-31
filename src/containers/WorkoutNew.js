import React, { Component } from 'react'
import {addWorkout} from '../actions/index'
import {connect} from 'react-redux'

export class WorkoutNew extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            body: '',
            rounds: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        //add workout
        this.props.addWorkout(this.state);
        //add redirect to /workouts
        this.props.history.push('/workouts');
    }

    render() {
        return (
          <form onSubmit={ this.handleSubmit }>
            <h3>Create Workout</h3>
            <div className="input-field">
              <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
              <label htmlFor="name">Workout Name</label>
            </div>
            <div className="input-field">
              <textarea type="text" name="body" id="body" value={ this.state.body } onChange={ this.handleChange }/>
              <label htmlFor="body">Workout Description</label>
            </div>
            <div className="input-field">
              <input type="integer" name="rounds" id="rounds" value={ this.state.rounds } onChange={ this.handleChange }/>
              <label htmlFor="rounds">Rounds</label>
            </div>
    
            <input type="submit" value="Create Workout" className="btn" />
          </form>
        )
      }

}

export default connect(null, { addWorkout })(WorkoutNew)