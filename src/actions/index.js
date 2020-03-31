export const addWorkout = workout => {
    return (dispatch) => {
      return fetch('http://localhost:3000/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({workout:workout})
      })
      .then(resp => resp.json())
      .then(workout => {
        dispatch({type: "ADD_WORKOUT", payload: workout})
      })
    }
}
  
export const removeWorkout = workoutId => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/workouts/${workoutId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(workout => {
        dispatch({type: "REMOVE_WORKOUT", payload: workout.id})
      })
    }
}

export const fetchWorkouts = () => {
    return (dispatch) => {
      return fetch('http://localhost:3000/workouts')
      .then(resp => resp.json())
      .then(workouts => {
        dispatch({type: "SET_WORKOUTS", payload: workouts})
      })
    }
}