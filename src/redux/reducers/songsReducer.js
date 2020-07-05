import { CHANGE_SONG, PLAY, PAUSE, CHANGE_REPEAT, CHANGE_SHUFFLE } from '../actions/songsActions';
import { songs } from '../../tempData/songs';

const songList = Object.values(songs).map((s) => s.id);

const initialState = {
  byId: songs,
  allIds: songList,
  activeSongIndex: 0,
  isPlaying: true,
  repeat: false,
  isShuffle: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SONG:
      return {
        ...state,
        activeSongIndex: action.payload.songIndex,
      };
    case PLAY:
      return {
        ...state,
        isPlaying: true,
      };
    case PAUSE:
      return {
        ...state,
        isPlaying: false,
      };

    case CHANGE_REPEAT:
      return {
        ...state,
        repeat: !state.repeat,
      };
    case CHANGE_SHUFFLE:
      return {
        ...state,
        isShuffle: !state.isShuffle,
      };

    default:
      return state;
  }
};
