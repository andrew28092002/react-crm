import { createSelector } from "reselect";
import { TState } from "../reducers/rootReducer";

export const getRequests = createSelector(
  (state: TState) => state.request.requests,
  (state: TState) => state.request.product,
  (state: TState) => state.request.status,
  (requests, product, status) =>
    requests.filter((req) => {
      let isFits = false

      if (req.product === product || product === 'all') {
        isFits = true

        if (req.status === status){
          isFits = true
        } else if (status === 'all'){
          isFits = true
        } else {
          isFits = false
        }
      }

      return isFits && req
    })
);
