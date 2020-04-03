import React from 'react'
import { connect } from 'react-redux'
import { removeWorkout } from '../actions/index'
import Card from 'react-bootstrap/Card'



const WorkoutItem = ({ workout, removeWorkout }) => {
    return (
      <Card className="text-center" border="info" >
          <Card.Body >
            <Card.Title style={{fontSize: 20}}>Workout Name: {workout.name}</Card.Title>
              <Card.Text>
                <br />
                Description: { workout.body } <br />
                Rounds: { workout.rounds } <br />
              </Card.Text>
                <button onClick={()=>removeWorkout(workout.id)}>Remove Workout?</button>
          </Card.Body>
      </Card>
    );
}

export default connect (null, { removeWorkout })(WorkoutItem)