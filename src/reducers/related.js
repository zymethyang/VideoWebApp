import * as Type from '../constants/ActionTypes';
var initialState = {
    items: []
};
const related = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_RELATED_VIDEO:
            state = action.related
    }
    return state;
}

export default related;