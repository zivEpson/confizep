//@flow
import {
  FETCH_QUESTIONS,
  REQUEST_QUESTION,
  GET_QUESTION,
  CLEAR_QUESTION
} from "../actions/types";

/**
 * @file question redux-reducer library. specify how the application's state changes  in response to actions sent to the store.
 * @module questionReducer
 */

export default function(state: Object = {}, action: Object) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      });
    case REQUEST_QUESTION:
      return Object.assign({}, state, { isFetching: true });
    case GET_QUESTION:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      });
    case CLEAR_QUESTION:
      return Object.assign({}, state, {
        isFetching: false,
        items: {}
      });
    default:
      return state;
  }
}
