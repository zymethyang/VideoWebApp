import { combineReducers } from 'redux';
import player from './player';
import newest from './newest';
import related from './related';
import trending from './trending';
import music from './music';
import movie from './movie';
import game from './game';
import sport from './sport';
import search from './search';

const appReducers = combineReducers({
    player: player,
    newest: newest,
    related: related,
    trending: trending,
    music: music,
    movie: movie,
    game: game,
    sport: sport,
    search: search
});

export default appReducers;
