import { initialState } from "../store";

const playReducer = (state = initialState.play, action) => {
  switch (action.type) {
    case "PLAY_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default playReducer