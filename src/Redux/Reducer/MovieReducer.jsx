const InitialValue = {
  mainApi: [],
  WatchList: [],
  MovieDetail: [],
  // likes: 0,
};

const MovieReducer = (state = InitialValue, action) => {
  switch (action.type) {
    case "DISPLAY_DATA":
      const data = action.payload;
      data.map((x) => (x.likes = 0));
      data.map((x) => (x.Genre = " "));
      // console.log("displayData", data);
      return { ...state, mainApi: data };

    case "ADD_TO_WATCHLIST": {
      let item = state.WatchList.filter((x) => x.id === action.payload.id);
      let arr = [];
      if (item && item?.length > 0) {
        arr = state.WatchList.map((x) => {
          if (x.id == action.payload.id) {
            alert("Item Exist");
          }
          return x;
        });
      } else {
        arr = [...state.WatchList, action.payload];
      }

      //  console.log("Index", index);
      return {
        ...state,
        WatchList: arr,
      };
    }

    case "GET_DETAIL": {
      let detail = action.payload;
      console.log("Reducer ", detail);
      return {
        ...state,
        MovieDetail: [detail],
      };
    }

    case "LIKE_MOVIE":
      // console.log(action.payload);

      const list = state.mainApi.map((x) => {
        if (x.id === action.payload.id) {
          x.likes = x.likes + 1;
        }
        return x;
      });

      return { ...state, mainApi: list };

    case "REMOVE_ITEAM": {
      const Deleteitem = state.WatchList.filter((ele) => ele.id !== action.id);
      return {
        ...state,
        WatchList: Deleteitem,
      };
    }

    case "ADD_MOVIE": {
    }

    default:
      return state;
  }
};
export default MovieReducer;
