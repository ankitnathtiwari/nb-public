export const fetchCompleted = (state, action) => {
  return {
    ...state,
    loading: false,
    initLoading: false,
    posts: [...state.posts, ...action.payload],
  };
};

export const handleLoadMore = (state, action) => {
  return {
    ...state,
    page: state.page + 1,
    loading: true,
  };
};

export const handleQuery = (state, action) => {
  return {
    ...state,
    query: action.payload,
    posts: [],
    page: 1,
    loading: true,
  };
};
