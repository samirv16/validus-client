import React from 'react'
import {Link} from 'react-router-dom'

const WorkoutItem = ({ workout }) => {
    return (
        <li>
            Workout Name: {workout.name}<br/>
            Description: {workout.body}<br/>
            
        </li>
    )
}

export default WorkoutItem