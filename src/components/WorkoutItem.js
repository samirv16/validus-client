import React from 'react'
import {Link} from 'react-router-dom'

const WorkoutItem = ({ workout }) => {
    return (
        <li className="collection-item">
            Workout Name: {workout.name}<br/>
            Description: {workout.body}<br/>
            Rounds: {workout.rounds}<br/>
            <Link to={`/workouts/${workout.id}`}>View</Link>
        </li>
    )
}

export default WorkoutItem