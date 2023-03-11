import {
  Typography,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { RemoveWatchListItem } from "../Redux/Action/Action";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const MovieList = useSelector((state) => state.MovieReducer.WatchList);

  // Remove WatchList
  const dispatch = useDispatch();

  const deleteItem = (a) => {
    dispatch(RemoveWatchListItem(a));
    console.log(a);
  };

  const navigate = useNavigate();

  const HandleDownload = () => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  };

  useEffect(() => {
    HandleDownload();
  });

  // console.log("WatchList ", MovieList);
  return (
    <>
      <Box sx={{ margin: "7px", textAlign: "center" }}>
        <Grid container spacing={2}>
          {MovieList?.map((data, i) => {
            return (
              <Grid item xs={6} md={3} key={i}>
                <Card sx={{ maxWidth: 300 }}>
                  <Typography
                    component='div'
                    sx={{
                      margin: 1.5,
                      display: "flex",
                      float: "right",
                      color: "white",
                    }}
                  >
                    <IconButton
                      onClick={() => deleteItem(data.id)}
                      sx={{
                        color: "white",
                        "&:hover": { color: "#f44336" },
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Typography>

                  <CardMedia sx={{ height: 400 }} image={data.Poster} />
                  <CardContent>
                    <Typography variant='h6' component='div'>
                      {data.Title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        "&:hover": {
                          backgroundColor: "#4caf50",
                          color: "white",
                          fontWeight: "500",
                        },
                      }}
                      onClick={HandleDownload}
                      variant='outlined'
                      endIcon={<DownloadForOfflineIcon />}
                    >
                      Download
                    </Button>
                    <Button
                      sx={{
                        "&:hover": {
                          backgroundColor: "#4caf50",
                          color: "white",
                          fontWeight: "500",
                        },
                      }}
                      variant='outlined'
                      endIcon={<PlayCircleOutlineIcon />}
                    >
                      Online
                    </Button>
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

export default WatchList;
