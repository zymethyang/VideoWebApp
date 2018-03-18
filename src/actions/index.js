import * as Type from '../constants/ActionTypes';
import callApi from '../utils/callAPI';
import syncData from '../utils/syncData';
import getRelated from '../utils/getRelated';
import trendingAPI from '../utils/trendingAPI';
import trendingCategory from '../utils/trendingCategory';
import searchAPI from '../utils/searchAPI';

export const get_player = (id) => {
    return dispatch => {
        callApi(id).then(res => {
            dispatch(dispatch_player(res.data))
        })
    }
}

export const dispatch_player = (data) => {
    return {
        type: Type.GET_VIDEO_DETAIL_FROM_ID,
        player: data
    }
}

export const get_newest_video = () => {
    return dispatch => {
        syncData('video/get/8').then(res => {
            dispatch(dispatch_newest_video(res.data));
        })
    }
}

export const dispatch_newest_video = (data) => {
    return {
        type: Type.GET_NEWES_VIDEO,
        newest: data
    }
}

export const get_related_video = (id) => {
    return dispatch => {
        getRelated(id).then(res => {
            dispatch(dispatch_related_video(res.data));
        })
    }
}

export const dispatch_related_video = (data) => {
    return {
        type: Type.GET_RELATED_VIDEO,
        related: data
    }
}

export const get_trending_video = () => {
    return dispatch => {
        trendingAPI().then(res => {
            dispatch(dispatch_trending_video(res.data))
        })
    }
}

export const dispatch_trending_video = (data) => {
    return {
        type: Type.GET_TRENDING_VIDEO,
        trending: data
    }
}

export const get_trending_music = () => {
    return dispatch => {
        trendingCategory('10').then(res => {
            dispatch(dispatch_trending_music(res.data));
        })
    }
}

export const dispatch_trending_music = (data) => {
    return {
        type: Type.GET_TRENDING_MUSIC,
        music: data
    }
}


export const get_trending_movie = () => {
    return dispatch => {
        trendingCategory('1').then(res_1 => {
            dispatch(dispatch_trending_movie(res_1.data));
        })
    }
}

export const dispatch_trending_movie = (data) => {
    return {
        type: Type.GET_TRENDING_MOVIE,
        movie: data
    }
}


export const get_trending_game = () => {
    return dispatch => {
        trendingCategory('20').then(res_1 => {
            dispatch(dispatch_trending_game(res_1.data));
        })
    }
}

export const dispatch_trending_game = (data) => {
    return {
        type: Type.GET_TRENDING_GAME,
        game: data
    }
}



export const get_trending_sport = () => {
    return dispatch => {
        trendingCategory('17').then(res_1 => {
            dispatch(dispatch_trending_sport(res_1.data));
        })
    }
}

export const dispatch_trending_sport = (data) => {
    return {
        type: Type.GET_TRENDING_SPORT,
        sport: data
    }
}




export const get_search = (key) => {
    return dispatch => {
        searchAPI(key).then(res_1 => {
            dispatch(dispatch_search(res_1.data));
        })
    }
}

export const dispatch_search = (data) => {
    return {
        type: Type.GET_SEARCH,
        search: data
    }
}