import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess, logoutUser } from "./userRedux"

// Function to send a login request to the backend 
// Will send email and password with request 
// Once logged in the 'loginSuccess' reducer will be dispatched and save the data of the logged in user
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}

export const logout = async (dispatch) => {
  dispatch(logoutUser())
}
