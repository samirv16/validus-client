import React, { Component } from 'react'
import {addWorkout} from '../actions/index'
import {connect} from 'react-redux'

export class WorkoutNew extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            body: '',
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
        this.props.history.push('/pets');
    }
}

export default WorkoutNew