import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../types/userTypes";
import { UserLogin } from "../interfaces/userInterfaces";
export const userLogin = (payload: UserLogin) => ({
  type: USER_LOGIN_REQUEST,
  payload,
});
