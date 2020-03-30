let id = 0

export default(state= [], action) => {

    switch(action.type) {
        case "ADD_WORKOUT":
            return [...state, action.payload]
        case "REMOVE_WOKOUT":
            let newWorkouts = state.filter(workout => workout.id !== action.payload)
            return [...newWorkouts]
        default:
            return state
    }
}