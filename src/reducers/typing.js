import {
	SEND_MESSAGE,
	SET_TYPING_VALUE,
} from "../actions/constants/action-types";

export default function typing(state = "", action) {
	switch (action.type) {
		case SEND_MESSAGE:
			return "";
		case SET_TYPING_VALUE:
			return action.payload;
		default:
			return state;
	}
}
