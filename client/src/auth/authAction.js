import axios from "axios";

import { FETCH_USER_AUTH } from "../actions/types";

export const fetchUserAuth = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER_AUTH, payload: res.data });
};
