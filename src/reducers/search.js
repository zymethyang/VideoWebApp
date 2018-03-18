import * as Type from '../constants/ActionTypes';
var initialState = [];

const search = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_SEARCH:
            state = action.search.items
    }
    return state;
}

export default search;