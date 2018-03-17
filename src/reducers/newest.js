import * as Type from '../constants/ActionTypes';
var initialState = [];
const newest = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_NEWES_VIDEO:
            state = action.newest
    }
    return state;
}

export default newest;