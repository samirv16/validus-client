import React, { Component } from 'react'
import {addWorkout} from '../actions/index'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

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
          <Card style={{ opacity: 0.5 }}>
          <Form onSubmit={ this.handleSubmit }>
            <h3>Create Workout</h3>
            <Form.Group  controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
              <Form.Label htmlFor="name">Workout Name</Form.Label>
            </Form.Group>
            <Form.Group  controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name="body" id="body" value={ this.state.body } onChange={ this.handleChange }/>
              <Form.Label htmlFor="body">Workout Description</Form.Label>
              </Form.Group>
            <Form.Group  controlId="exampleForm.ControlInput1">
              <Form.Control type="integer" name="rounds" id="rounds" value={ this.state.rounds } onChange={ this.handleChange }/>
              <Form.Label htmlFor="rounds">Rounds</Form.Label>
              </Form.Group>
    
            <input type="submit" value="Create Workout" className="btn" />
          </Form>
          </Card>
        )
      }

}

export default connect(null, { addWorkout })(WorkoutNew)