import { combineReducers } from "redux";
import mathReducer from "./mathReducer";
import userReducer from "./userReducer";
import i18n from "./i18n";
import { i18nReducer } from "react-redux-i18n";

const reducer = combineReducers({
  mathReducer,
  userReducer,
  i18n: i18nReducer
});

export default reducer;
