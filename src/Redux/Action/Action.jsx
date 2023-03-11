export const displayData = (data) => {
  return {
    type: "DISPLAY_DATA",
    payload: data,
  };
};

export const AddToWatchList = (obj) => {
  // console.log("Action", obj);
  return {
    type: "ADD_TO_WATCHLIST",
    payload: obj,
  };
};

export const OnSearch = () => {
  return {
    type: "SEARCH_ITEM",
  };
};

export const GetDetail = (obj) => {
  return {
    type: "GET_DETAIL",
    payload: obj,
  };
};

export const LikeMovie = (obj) => {
  return {
    type: "LIKE_MOVIE",
    payload: obj,
  };
};

export const RemoveWatchListItem = (id) => {
  return {
    type: "REMOVE_ITEAM",
    id,
  };
};

export const AddMovies = (obj) => {
  // const { Title, Poster, likes } = obj;
  return {
    type: "ADD_MOVIE",
    payload: obj,
  };
};
