import * as Type from '../constants/ActionTypes';
var initialState = [];

const movie = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TRENDING_MOVIE:
            state = action.movie.items
    }
    return state;
}

export default movie;