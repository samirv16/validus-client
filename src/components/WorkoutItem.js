import React from 'react'
import { connect } from 'react-redux'
import { removeWorkout } from '../actions/index'

const WorkoutItem = ({ workout, removeWorkout }) => {
    return (
    <li className="collection-item">
      Workout Name: {workout.name}<br />
      Description: { workout.body } <br />
      Rounds: { workout.rounds } <br />
      <button onClick={()=>removeWorkout(workout.id)}>Remove Workout?</button>
    </li>
    );
}

export default connect (null, { removeWorkout })(WorkoutItem)