import { combineReducers } from "redux";

import session from "./session_errors_reducer";
import item from "./item_errors_reducer";

export default combineReducers({
  session,
  item,
});
