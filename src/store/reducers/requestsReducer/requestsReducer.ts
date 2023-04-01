import { TRequest } from "../../../models/request";
import { TRequestsActions } from "./actionCreators";

export type TRequestState = {
  requests: TRequest[];
  request: TRequest | null;
  product: string;
  status: string;
  isLoading: boolean;
  error: string;
};

const initialState: TRequestState = {
  requests: [],
  request: null,
  product: "all",
  status: "all",
  isLoading: false,
  error: "",
};

export enum requestsActionsName {
  GET_ALL_REQUESTS = "GET_ALL_REQUESTS",
  GET_REQUEST = "GET_REQUEST",
  DELETE_REQUEST = "DELETE_REQUEST",
  SET_PRODUCT = "SET_PRODUCT",
  SET_STATUS = "SET_STATUS",
  UPDATE_REQUEST = "UPDATE_REQUEST",
  FETCHING = "FETCHING",
  ERROR = "ERROR",
}

export const requestsReducer = (
  state = initialState,
  action: TRequestsActions
) => {
  switch (action.type) {
    case requestsActionsName.GET_ALL_REQUESTS:
      return {
        ...state,
        isLoading: false,
        error: "",
        requests: action.payload,
      };
    case requestsActionsName.GET_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: "",
        request: action.payload,
      };
    case requestsActionsName.DELETE_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: "",
        requests: [...state.requests].filter(
          (request) => request.id !== action.payload.id
        ),
      };
    case requestsActionsName.UPDATE_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: "",
        requests: [...state.requests].map((request) => {
          if (request.id === action.payload.id) {
            return action.payload;
          }
          return request;
        }),
      };

    case requestsActionsName.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case requestsActionsName.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case requestsActionsName.FETCHING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case requestsActionsName.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
