import * as Type from '../constants/ActionTypes';
var initialState = [];

const game = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TRENDING_GAME:
            state = action.game.items
    }
    return state;
}

export default game;