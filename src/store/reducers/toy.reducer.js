const initialState = {
    toys: []
    // filterBy
}


export function toyReducer(state = {toys: []}, action /*= {}*/) {
    var toys
    switch (action.type) {
        case 'SET_TOYS':
            return {...state, toys: action.toys }
        // case 'REMOVE_TODO':
        //     todos = state.todos.filter(todo => todo._id !== action.todoId)
        //     return {...state, todos }
        // case 'ADD_TODO':
        //     todos = [action.todo, ...state.todos]
        //     return {...state, todos }
        case 'UPDATE_TOY':
            toys = state.toys.map(currToy =>
                (currToy._id === action.toy._id) ? action.toy : currToy)
            return {...state, toys }
        // case 'UPDATE_FILTER':
        //     return {...state, filterBy: action.filterBy }
        default:
            return state
    }
}