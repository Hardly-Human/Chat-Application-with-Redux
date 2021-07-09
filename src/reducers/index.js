import { combineReducers } from "redux";

import userReducer from "./user";
import contactsReducer from "./contact";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
	user: userReducer,
	contacts: contactsReducer,
	activeUserId,
	messages,
	typing,
});
