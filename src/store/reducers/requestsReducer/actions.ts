import axios from "axios";
import { Dispatch } from "redux";
import { TRequest } from "../../../models/request";
import {
  errorCreator,
  fetchingCreator,
  getAllRequestsCreator,
  getRequestCreator,
  deleteRequestCreator,
  updateRequestCreator,
  TRequestsActions,
} from "./actionCreators";

export const getAllRequestsAction =
  (): any => async (dispatch: Dispatch<TRequestsActions>) => {
    try {
      dispatch(fetchingCreator());

      const { data } = await axios.get<TRequest[]>(
        "https://crm-server.glitch.me/requests"
      );

      dispatch(getAllRequestsCreator(data));
    } catch {
      dispatch(errorCreator("Error in fetch all requests"));
    }
  };

export const getRequestAction =
  (id: number): any => async (dispatch: Dispatch<TRequestsActions>) => {
    try {
      dispatch(fetchingCreator());

      const { data } = await axios.get<TRequest>(
        "https://crm-server.glitch.me/requests/" + id
      );

      dispatch(getRequestCreator(data));
    } catch {
      dispatch(errorCreator("Error in fetch one request"));
    }
  };

export const deleteRequestAction =
  (id: number): any => async (dispatch: Dispatch<TRequestsActions>) => {
    try {
      dispatch(fetchingCreator());

      const { data } = await axios.delete<TRequest>(
        "https://crm-server.glitch.me/requests/" + id
      );

      dispatch(deleteRequestCreator(data));
    } catch {
      dispatch(errorCreator("Error in deleting request"));
    }
  };

export const updateRequestAction =
  (request: TRequest): any => async (dispatch: Dispatch<TRequestsActions>) => {
    try {
      dispatch(fetchingCreator());

      const { data } = await axios.delete<TRequest>(
        "https://crm-server.glitch.me/requests/" + request.id
      );

      dispatch(updateRequestCreator(data));
    } catch {
      dispatch(errorCreator("Error in updating request"));
    }
  };
