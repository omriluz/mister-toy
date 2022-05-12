import { toyService } from '../../services/toy.service.js';

export function loadToys() {
    return dispatch => {
        toyService.query()
            .then(toys => {
                dispatch({
                    type: 'SET_TOYS',
                    toys
                })
            })
    }
}


// export function removeTodo(todoId) {
//     return dispatch => {
//         todoService.remove(todoId)
//             .then(() => {
//                 console.log('Deleted Succesfully!');
//                 dispatch({
//                     type: 'REMOVE_TODO',
//                     todoId
//                 })
//                 showSuccessMsg('Todo removed')
//             })
//             .catch(err => {
//                 console.error('Error:', err)
//                 showErrorMsg('Cannot remove todo')
//             })
//     }
// }


// export function addTodo() {
//     return dispatch => {
//         const todo = {
//             txt: prompt("new Todo?"),
//             at: Date.now(),
//             owner: userService.getLoggedinUser(),
//             done: false
//         }
//         todoService.save(todo)
//             .then(savedTodo => {
//                 console.log('Added Todo', savedTodo);
//                 dispatch({
//                     type: 'ADD_TODO',
//                     todo: savedTodo
//                 })
//                 showSuccessMsg('Todo added')
//             })
//             .catch(err => {
//                 console.error('Error:', err)
//                 showErrorMsg('Cannot add Todo')
//             })
//     }
// }

// export function toggleDone(todo) {
//     todo.done = !todo.done
//     return dispatch => {
//         todoService.save(todo)
//             .then(savedTodo => {
//                 console.log('changed done', savedTodo);
//                 dispatch({
//                     type: 'UPDATE_TODO',
//                     todo: savedTodo
//                 })
//             })
//     }
// }

export function save({ name, toy }) {
    return dispatch => {
        const toyToSave = {...toy, name }
        return toyService.save(toyToSave)
            .then(savedToy => {
                dispatch({
                    type: 'UPDATE_TOY',
                    toy: savedToy
                })
                // showSuccessMsg('saved todo')
            })
    }
}

// export function updateFilter(filterBy) {
//     return dispatch => {
//         dispatch({
//             type: 'UPDATE_FILTER',
//             filterBy
//         })
//     }
// }