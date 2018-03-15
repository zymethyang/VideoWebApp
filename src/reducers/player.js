import * as Type from '../constants/ActionTypes';
var initialState = {
    kind: 'youtube#videoListResponse',
    etag: '"RmznBCICv9YtgWaaa_nWDIH1_GM/KeOik9Ri5nMPZgjDLHtO3tGN6Pc"',
    pageInfo: {
        totalResults: 0,
        resultsPerPage: 0
    },
    items: []
};
const player = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_VIDEO_DETAIL_FROM_ID:
            state = action.player
    }
    return state;
}

export default player;