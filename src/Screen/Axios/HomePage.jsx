import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Stack,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Grid,
  IconButton,
  Button,
  Modal,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToWatchList,
  GetDetail,
  LikeMovie,
  displayData,
  AddMovies,
} from "../../Redux/Action/Action";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import DetailModal from "../../Components/DetailModal";
import SearchIcon from "@mui/icons-material/Search";
import StarRating from "../../Other/StarRating";
import AddMovie from "../../Components/AddMovie";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import axios from "axios";

// ******  Start
const baseURL = "https://63fee278c5c800a723874d87.mockapi.io/moviename";

const HomePage = () => {
  //*** FUNCTION  FOR API
  const callAPI = () => {
    axios.get(baseURL).then((res) => setCallApi(res.data));
  };

  //  --> USE-DISPATCH
  const dispatch = useDispatch();

  //***   USESTATE   ***//

  // --> FOR API
  const [callApi, setCallApi] = useState([]);

  //  --> FOR ON-CHANGE IN TEXTFIELD
  const [movieName, setMovieName] = useState();

  // --> SEARCH REQUEST FUNCTION
  const [movieList, setMovieList] = useState();

  // --> FOR DETAIL MODAL OPEN & CLOSE
  const [openModal, setOpenModal] = useState(false);
  const handleModalClose = () => setOpenModal(false);

  // --> ICON COLOR CHANGE
  const [colorList, setColorList] = useState();
  const [likeButton, setLikeButton] = useState();

  // --> FOR ADD MOVIE
  const [addMovie, setAddMovie] = useState(false);

  // --> FOR STORE DATA IN "MAIN-API" ARRAY
  const main = useSelector((state) => state.MovieReducer.mainApi);
  const added = useSelector((state) => state.MovieReducer.WatchList);

  //  --> CALL-API AND ADD A LIKES KEY FOR LIKE FUNCTIONALITY
  useEffect(() => {
    callAPI();
    setCallApi([{ ...callApi, likes: 0, Genre: " " }]);
  }, []);

  // --> USE FOR A STORE A API DATA IN "MAIN-API" ARRAY
  useEffect(() => {
    // console.log("callApi", callApi);
    dispatch(displayData(callApi));
  }, [callApi]);

  //  --> SERACH REQUEST FUNCTION
  useEffect(() => {
    setMovieList(callApi);
  }, [callApi]);

  // --> COLOR CHANGE
  useEffect(() => {
    setColorList(added);
  }, [added]);

  useEffect(() => {
    setLikeButton(main);
  }, [main]);

  // --> ON-CHANGE FOR SEARCH REQUEST
  const handleChange = (a) => {
    setMovieName(a.target.value);
    SearchMovie(movieName);
  };

  // --> SEARCH MOVIE REQUEST
  const SearchMovie = (movieName) => {
    const obj = callApi.filter((x) =>
      x.Title.toLowerCase().includes(movieName.toLowerCase())
    );
    setMovieList(obj);
    // console.log("obj", obj);
  };

  // --> BUTTON FOR SEARCH REQUEST
  const handleSearch = () => {
    SearchMovie(movieName);
  };

  //  --> FOR ADD IN WATCH-LIST
  const addToWatchList = (a) => {
    dispatch(AddToWatchList(a));
  };

  // --> MODAL DETAIL POPUP
  const handleDetail = (a) => {
    dispatch(GetDetail(a));
    //  console.log(a);
    setOpenModal(true);
  };

  // --> LIKE BUTTON
  const likeMovieHandle = (a) => {
    dispatch(LikeMovie(a));
    // console.log("Home ->  ", a);
  };

  //  --> ADD NEW MOVIE

  const handleOpen = () => setAddMovie(true);
  const handleClose = () => setAddMovie(false);

  const [changeVal, setChangeVal] = useState();

  const changeMovie = (a) => {
    setChangeVal({ ...changeVal, [a.target.name]: a.target.value });
  };

  const addMovies = () => {
    axios.post(baseURL, {
      Title: changeVal.Title,
      Poster: changeVal.Poster,
      mobileNo: changeVal.mobileNo,
      likes: 0,
      Count: 0,
      Rate: 45,
      id: 0,
    });

    setMovieList([...movieList, changeVal]);

    dispatch(AddMovies());

    callAPI();
  };

  return (
    <>
      {/* CALL STAR RATING COMPONENT   */}
      <DetailModal openModal={openModal} handleModalClose={handleModalClose} />

      {/* /* ADD MOVIE BOX */}

      <Modal
        open={addMovie}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <AddMovie
          handleOpen={handleOpen}
          handleClose={handleClose}
          changeMovie={changeMovie}
          addMovies={addMovies}
        />
      </Modal>

      <Box sx={{ alignItems: "center", margin: 3 }}>
        <Typography component='div' sx={{ float: "left" }}>
          <Button
            variant='contained'
            endIcon={<SlideshowIcon />}
            onClick={handleOpen}
          >
            ADD MOVIE
          </Button>
        </Typography>

        <Typography component='div' sx={{ float: "right" }}>
          <Box
            sx={{ "& > :not(style)": { width: "15ch" } }}
            noValidate
            autoComplete='off'
          >
            <TextField
              label='Search Movie'
              variant='outlined'
              name='moviename'
              onChange={handleChange}
            />
          </Box>
        </Typography>
      </Box>

      <Box sx={{ marginLeft: 6, textAlign: "center" }}>
        <Grid container spacing={5}>
          {movieList?.map((data, i) => {
            return (
              <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 300, alignItems: "center" }}>
                  <CardMedia
                    onClick={() => handleDetail(data)}
                    sx={{ height: 400 }}
                    image={data.Poster}
                  />
                  <CardContent>
                    <Typography variant='h6' component='div'>
                      {data.Title}
                    </Typography>
                  </CardContent>
                  <Typography>
                    <StarRating />
                  </Typography>

                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography component='div'>
                      <IconButton
                        onClick={() => likeMovieHandle(data)}
                        style={{
                          color:
                            likeButton &&
                            likeButton?.length > 0 &&
                            likeButton?.find((x) => x.id !== data.id)
                              ? "green"
                              : "gray",
                        }}
                        size='small'
                      >
                        <ThumbUpIcon
                          sx={{
                            "&:hover": { color: "#388e3c" },
                          }}
                        />
                        {data.likes}
                      </IconButton>
                      <IconButton size='small'>
                        <ThumbDownIcon
                          sx={{ "&:hover": { color: "#d32f2f" } }}
                        />
                      </IconButton>
                    </Typography>

                    <IconButton
                      onClick={() => addToWatchList(data)}
                      style={{
                        color:
                          colorList &&
                          colorList?.length > 0 &&
                          colorList?.find((x) => x.id == data.id)
                            ? "green"
                            : "grey",
                      }}
                      size='small'

                      // sx={{ color: watchlistIcon }}
                    >
                      <PlaylistAddCheckIcon
                        sx={{
                          "&:hover": { color: "#ffc107" },
                        }}
                      />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
