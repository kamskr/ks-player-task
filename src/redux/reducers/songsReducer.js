import { CHANGE_SONG, PLAY, PAUSE } from '../actions/songsActions';
import { songs } from '../../tempData/songs';

const initialState = {
  byId: songs,
  activeSong: Obiect.values(songs)[0].id,
  isPlaying: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SONG:
      if (state.byId.hasOwnProperty(action.payload.songId)) {
        return {
          ...state,
          activeSong: state.byId[action.payload.songId],
        };
      }
      return state;
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

    default:
      return state;
  }
}
