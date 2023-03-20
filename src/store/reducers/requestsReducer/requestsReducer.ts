import { TRequest } from "../../../models/request";
import { TRequestsActions } from "./actionCreators";

type TRequestState = {
  requests: TRequest[];
  request: TRequest | null;
  sortedByProduct: TRequest[];
  sortedByStatus: TRequest[];
  isLoading: boolean;
  error: string;
};

const initialState: TRequestState = {
  requests: [],
  request: null,
  sortedByProduct: [],
  sortedByStatus: [],
  isLoading: false,
  error: "",
};

export enum requestsActionsName {
  GET_ALL_REQUESTS = "GET_ALL_REQUESTS",
  GET_REQUEST = "GET_REQUEST",
  DELETE_REQUEST = "DELETE_REQUEST",
  SORT_BY_PRODUCT = "SORT_BY_PRODUCT",
  SORT_BY_STATUS = "SORT_BY_STATUS",
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
    case requestsActionsName.SORT_BY_PRODUCT:
      return {
        ...state,
        isLoading: false,
        error: "",
        requests: [...state.requests].filter((request) => {
          if (request.product === action.payload) return request;
        }),
      };
    case requestsActionsName.SORT_BY_STATUS:
      return {
        ...state,
        isLoading: false,
        error: "",
        requests: [...state.requests].filter((request) => {
          if (request.status === action.payload) return request;
        }),
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
  }
};
