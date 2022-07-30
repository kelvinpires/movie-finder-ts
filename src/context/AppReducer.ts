type StateT = {
  watchlist: Array<{ id: number; media_type: string }>;
};

type ActionType = {
  type: "ADD_TO_WATCHLIST" | "REMOVE_FROM_WATCHLIST";
  payload: { id: number; media_type: string };
};

export default (state: StateT, action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHLIST":
      const contentFiltered = state.watchlist.filter(
        (content) =>
          content.id === action.payload.id &&
          content.media_type === action.payload.media_type
      );

      const index = state.watchlist.indexOf(contentFiltered[0]);

      state.watchlist.splice(index, 1);

      return {
        watchlist: state.watchlist,
      };
    default:
      return {
        ...state,
      };
  }
};
