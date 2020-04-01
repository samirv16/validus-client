import React from 'react'
import { connect } from 'react-redux'
import { removeWorkout } from '../actions/index'
import Card from 'react-bootstrap/Card'

const WorkoutItem = ({ workout, removeWorkout }) => {
    return (
    <Card className="text-center" border="info" >
      Workout Name: {workout.name}<br />
      Description: { workout.body } <br />
      Rounds: { workout.rounds } <br />
      <button onClick={()=>removeWorkout(workout.id)}>Remove Workout?</button>
      </Card>
    );
}

export default connect (null, { removeWorkout })(WorkoutItem)