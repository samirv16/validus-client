export default(state= [], action) => {
    switch(action.type) {
        case "SET_WORKOUTS":
            return [...action.payload]
        case "ADD_WORKOUT":
            return [...state, action.payload]
        case "REMOVE_WORKOUT":
            let newWorkouts = state.filter(workout => workout.id !== action.payload)
            return [...newWorkouts]
        default:
            return state
    }
}