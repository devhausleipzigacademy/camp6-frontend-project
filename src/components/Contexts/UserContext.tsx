import { createContext, useContext, useMemo, useReducer } from "react";
import { userData } from "../../database/newDummies";
import {
	Action,
	CreateContext,
	UserData,
	CustomProviderProps,
} from "../../database/TypesNConsts";

export const UserContext = createContext<UserData | null>(null);
export const UserDispatchContext = createContext<CreateContext | null>(null);

export function UserProvider({ children }: CustomProviderProps) {
	const [user, dispatch] = useReducer(userReducer, userData);
	// const userMemo = useMemo(() => ({ user }), [user]);

	return (
		<UserContext.Provider value={user}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	);
}

export function useUser() {
	return useContext(UserContext);
}

export function useUserDispatch() {
	return useContext(UserDispatchContext);
}

export const USERACTIONS = {
	CHANGE_NAME: "change name",
	SELECT_TRACK: "select track",
	SELECT_TOPIC: "select topic",
};

function userReducer(user: UserData, action: Action): UserData {
	switch (action.type) {
		case USERACTIONS.CHANGE_NAME:
			return { ...user, name: action.payload.name };
		case USERACTIONS.SELECT_TRACK:
			return { ...user, activeTrackId: action.payload.trackId };
		case USERACTIONS.SELECT_TOPIC:
			return { ...user, activeTopicId: action.payload.topicId };
		default:
			return user;
	}
}
