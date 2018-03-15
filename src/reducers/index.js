import { combineReducers } from 'redux';
import player from './player';

const appReducers = combineReducers({
    player: player
});

export default appReducers;
