export default(state= [{name:"machine", body:"pushups"}], action) => {
    switch(action.type) {
        case "SET_WORKOUT":
            return [...action.payload]
        case "ADD_WORKOUT":
            return [...state, action.payload]
        case "REMOVE_WOKOUT":
            let newWorkouts = state.filter(workout => workout.id !== action.payload)
            return [...newWorkouts]
        default:
            return state
    }
}