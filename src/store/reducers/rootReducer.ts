import { combineReducers } from "redux";
import { requestsReducer } from "./requestsReducer/requestsReducer";

export const rootReducer = combineReducers({
    request: requestsReducer
});

export type TState = ReturnType<typeof rootReducer>