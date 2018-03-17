import * as Type from '../constants/ActionTypes';
var initialState = [];

const music = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TRENDING_MUSIC:
            state = action.music.items
    }
    return state;
}

export default music;