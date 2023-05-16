import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import allUserReducer from "./allUserReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";
import ordersReducer from "./ordersReducer";
import displayOrderReducer from "./displayOrderReducer";
import contactsReducer from "./contactsReducer";

const myReducers = combineReducers({
  user: userReducer,
  alert: alertReducer,
  products: productReducer,
  allUsers: allUserReducer,
  cart: cartReducer,
  isCart: displayCartReducer,
  orders: ordersReducer,
  isOrder: displayOrderReducer,
  contacts: contactsReducer,
});

export default myReducers;
