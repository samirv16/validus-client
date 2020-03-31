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

    
}

export default WorkoutNew