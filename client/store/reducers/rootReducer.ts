import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default is localStorage

const persistConfig = {
  key: "morrent",
  storage,
};
const rootReducer = combineReducers({
  auth: persistReducer(
    {
      key: "auth",
      storage,
    },
    userReducer
  ),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
