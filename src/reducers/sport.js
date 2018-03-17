import * as Type from '../constants/ActionTypes';
var initialState = [];

const sport = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TRENDING_SPORT:
            state = action.sport.items
    }
    return state;
}

export default sport;