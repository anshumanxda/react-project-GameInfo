const initialState = { game: { platforms: [] }, isloading: true };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        isloading: false,
      };

    case "LOADING_DETAIL":
      return {
        ...state,
        isloading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
