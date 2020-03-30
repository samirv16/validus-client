let id = 0

export default(state= [], action) => {

    switch(action.type) {
        case "ADD_WORKOUT":
            return [...state, action.payload]
        case "REMOVE_WOKOUT":
            
        default:
            return state
    }
}