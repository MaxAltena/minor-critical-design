import { AppActions, CHANGE_UID } from "@/redux/actions";

export interface AppState {
	uid: string;
}

export const initialAppState: AppState = {
	uid: "",
};

export default function (state = initialAppState, action: AppActions): AppState {
	switch (action.type) {
		case CHANGE_UID:
			return {
				...state,
				uid: action.uid,
			};
		default:
			return state;
	}
}
