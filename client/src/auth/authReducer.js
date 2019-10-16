import { FETCH_USER_AUTH } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    // update the state with user info
    case FETCH_USER_AUTH:
      return action.payload || false;
    default:
      return state;
  }
}
