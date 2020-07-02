import { CHANGE_SONG, PLAY, PAUSE } from '../actions/songsActions';

export const changeSong = (songId) => ({ type: CHANGE_SONG, payload: { songId } });
export const changeSong = () => ({ type: PLAY });
export const changeSong = () => ({ type: PAUSE });
