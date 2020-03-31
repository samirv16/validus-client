let id = 0

export default(state= [], action) => {
    const newWorkout = () => {
        return {
            ...action.payload,
          id: id++  
        }
    }

    switch(action.type) {
        case "ADD_WORKOUT":
            return [...state, newWorkout]
        case "REMOVE_WOKOUT":
            let newWorkouts = state.filter(workout => workout.id !== action.payload)
            return [...newWorkouts]
        default:
            return state
    }
}