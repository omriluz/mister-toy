
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'toys'

export const toyService = {
    query,
    getById,
    save,
    remove,
    // getEmptyCar
}


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(carId) {
    return storageService.get(STORAGE_KEY, carId)
}
function remove(toyId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, toyId)
}
function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        // when switching to backend - remove the next line
        // car.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, toy)
    }
}

// function getEmptyCar() {
//     return {
//         vendor: 'Susita-' + (Date.now() % 1000),
//         price: utilService.getRandomIntInclusive(1000, 9000),
//     }
// }


// TEST DATA

// storageService.post(STORAGE_KEY,{
//     "_id": null,
//     "name": "art puzzle 3",
//     "price": 123,
//     "labels": ["Puzzle", "Art"],
//     "createdAt": Date.now(),
//     "inStock": false
//    }).then(x => console.log(x))


