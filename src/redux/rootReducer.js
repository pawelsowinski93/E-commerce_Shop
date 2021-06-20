import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// local storage
import storage from "redux-persist/lib/storage";
// sesion storage
// import sessionStorage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
