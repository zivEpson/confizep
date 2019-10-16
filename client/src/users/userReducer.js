// @flow
import {
  FETCH_USERS,
  REQUEST_USER,
  GET_USER,
  CLEAR_USER,
  CLEAR_USERS
} from "../actions/types";

/**
 *  @file user redux-reducer library. specify how the application's state changes in response to actions sent to the store.
 * @module userReducer
 */

export default function(state: Object = {}, action: Object) {
  switch (action.type) {
    // update the state with user info
    case FETCH_USERS:
      return action.payload || [];
    case REQUEST_USER:
      return Object.assign({}, state, { isFetching: true });
    case GET_USER:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      });
    case CLEAR_USER:
      return Object.assign({}, state, {
        isFetching: false,
        items: {}
      });
    case CLEAR_USERS:
      return [];
    default:
      return state;
  }
}
