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


export function removeToy(toyId) {
    return dispatch => {
        toyService.remove(toyId)
            .then(() => {
                console.log('Deleted Succesfully!');
                dispatch({
                    type: 'REMOVE_TOY',
                    toyId
                })
                // showSuccessMsg('toy removed')
            })
            .catch(err => {
                console.error('Error:', err)
                // showErrorMsg('Cannot remove toy')
            })
    }
}


export function addToy(toy) {
    return dispatch => {
        toyService.save(toy)
            .then(savedToy => {
                console.log('Added toy', savedToy);
                dispatch({
                    type: 'ADD_TOY',
                    toy: savedToy
                })
                // showSuccessMsg('Todo added')
            })
            .catch(err => {
                console.error('Error:', err)
                // showErrorMsg('Cannot add Todo')
            })
    }
}

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
        const toyToSave = { ...toy, name }
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