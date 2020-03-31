export const addWorkout = workout => {
    return {
        type: "ADD_WORKOUT", payload:workout
    }
}

export const removeWorkout = workoutId => {
    return {
        type: "REMOVE_WORKOUT", payload:workoutId
    }
}

export const fetchWorkouts = () = {
    return (dispatch) => {
        return fetch('http://localhost:3000/workouts')
        .then(resp => resp.json())
        .then(workouts => {
            dispatch({type: "SET_WORKOUTS", payload: workouts})
        })
    }
}