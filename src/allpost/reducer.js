import { fetchCompleted, handleLoadMore, handleQuery } from "./eventHandlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "fetchCompleted":
      return fetchCompleted(state, action);
    case "LOAD_MORE":
      return handleLoadMore(state, action);
    case "QUERY_CHANGE":
      return handleQuery(state, action);
    default:
      throw new Error();
  }
};
