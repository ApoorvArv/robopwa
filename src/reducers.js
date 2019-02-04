import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants.js';

const initialStateSearch = {
    searchField : ''
};

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}
//giving default parameters to the reducers functions
export const searchRobots = ( state=initialStateSearch, action={}) => {
   
    switch (action.type ) {
        case CHANGE_SEARCH_FIELD : 
        //return new state 
            return Object.assign({},state, {searchField:action.payload});
          // similar to return Object.assign( ...state, { searchField: action.payload });
        default: 
            return state;
    }
}


export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING: 

            return Object.assign({}, state, { isPending : true });

        case REQUEST_ROBOTS_SUCCESS: 

            return Object.assign({}, state, { robots: action.payload,
                                              isPending: false });

        case REQUEST_ROBOTS_FAILED: 
        
            return Object.assign({}, state, { error: action.payload,
                                              isPending:false });

        default:
        
                return state;

    }
}