import { CHANGE_SONG, PLAY, PAUSE, CHANGE_REPEAT, CHANGE_SHUFFLE } from '../actions/songsActions';

export const changeSong = (songIndex) => ({ type: CHANGE_SONG, payload: { songIndex } });
export const play = () => ({ type: PLAY });
export const pause = () => ({ type: PAUSE });
export const changeRepeat = () => ({ type: CHANGE_REPEAT });
export const changeShuffle = () => ({ type: CHANGE_SHUFFLE });
