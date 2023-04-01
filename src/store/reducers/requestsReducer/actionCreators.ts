import { TRequest } from "../../../models/request";
import { requestsActionsName } from "./requestsReducer";

export const getAllRequestsCreator = (requests: TRequest[]) => ({
  type: requestsActionsName.GET_ALL_REQUESTS as requestsActionsName.GET_ALL_REQUESTS,
  payload: requests,
});

// I'm using that constructions, because ReturnType return one general requestActionsName type
// for typing i need only one current type

type getAllRequestsAction = ReturnType<typeof getAllRequestsCreator>;

export const getRequestCreator = (request: TRequest) => ({
  type: requestsActionsName.GET_REQUEST as requestsActionsName.GET_REQUEST,
  payload: request,
});

type getRequestCreator = ReturnType<typeof getRequestCreator>;

export const deleteRequestCreator = (request: TRequest) => ({
  type: requestsActionsName.DELETE_REQUEST as requestsActionsName.DELETE_REQUEST,
  payload: request,
});

type deleteRequestCreator = ReturnType<typeof deleteRequestCreator>;

export const updateRequestCreator = (request: TRequest) => ({
  type: requestsActionsName.UPDATE_REQUEST as requestsActionsName.UPDATE_REQUEST,
  payload: request,
});

type updateRequestCreator = ReturnType<typeof updateRequestCreator>;

export const setProdcutCreator = (product: string) => ({
  type: requestsActionsName.SET_PRODUCT as requestsActionsName.SET_PRODUCT,
  payload: product,
});

type setProdcutCreator = ReturnType<typeof setProdcutCreator>;

export const setStatusCreator = (status: string) => ({
  type: requestsActionsName.SET_STATUS as requestsActionsName.SET_STATUS,
  payload: status,
});

type setStatusCreator = ReturnType<typeof setStatusCreator>;

export const fetchingCreator = () => ({
  type: requestsActionsName.FETCHING as requestsActionsName.FETCHING,
});

type fetchingCreator = ReturnType<typeof fetchingCreator>;

export const errorCreator = (error: string) => ({
  type: requestsActionsName.ERROR as requestsActionsName.ERROR,
  payload: error,
});

type errorCreator = ReturnType<typeof errorCreator>;

export type TRequestsActions =
  | getAllRequestsAction
  | getRequestCreator
  | updateRequestCreator
  | setStatusCreator
  | setProdcutCreator
  | deleteRequestCreator
  | errorCreator
  | fetchingCreator;
