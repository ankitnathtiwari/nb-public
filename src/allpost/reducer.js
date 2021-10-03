import {
  fetchCompleted,
  handleLoadMore,
  handleQuery,
  handleErr,
} from "./eventHandlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "fetchCompleted":
      return fetchCompleted(state, action);
    case "LOAD_MORE":
      return handleLoadMore(state, action);
    case "QUERY_CHANGE":
      return handleQuery(state, action);
    case "ERR":
      return handleErr(state, action);
    default:
      throw new Error();
  }
};
