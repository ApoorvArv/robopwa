import {CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
REQUEST_ROBOTS_PENDING} from './constants.js';

export const setSearchField = (text) => ( {
    type : CHANGE_SEARCH_FIELD,
    payload: text 
});
//returning an object which contains a type,which is the action being taken
//payload jo reducer ko jaata hai

export const requestRobots = () => (dispatch) =>  {
    dispatch(
        {
            type: REQUEST_ROBOTS_PENDING
        } );

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch ( {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
    }))
    .then( error => dispatch ( {
        type: REQUEST_ROBOTS_FAILED,
        payload: error
    }))
}