import axios from "axios";

// payment
export const handleToken = token => async dispatch => {
  //send the data to the server
  const res = await axios.post("/api/stripe", token);
  //update the auth reducer with the new state
  dispatch({ type: FETCH_USER_AUTH, payload: res.data });
};
