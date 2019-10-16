//@flow
import {
  FETCH_COURSES,
  REQUEST_COURSE,
  GET_COURSE,
  CLEAR_COURSE
} from "../actions/types";

/**
 * @file course redux-reducer library. specify how the application's state changes in response to actions sent to the store.
 * @module courseReducer
 */

export default function(state: Object = {}, action: Object) {
  switch (action.type) {
    case FETCH_COURSES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      });
    case REQUEST_COURSE:
      return Object.assign({}, state, { isFetching: true });
    case GET_COURSE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      });
    case CLEAR_COURSE:
      return Object.assign({}, state, {
        isFetching: false,
        items: {}
      });
    default:
      return state;
  }
}
