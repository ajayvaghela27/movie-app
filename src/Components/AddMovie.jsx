import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "inline-grid",
  rowGap: "12px",
  "& > :not(style)": { m: 1 },
};

const btn = {
  display: "flex",
  gap: "5px",
  justifyContent: "center",
};

const AddMovie = (props) => {
  const { handleClose, changeMovie, addMovies } = props;

  // --> USE-STATE FOR HANDLE CHANGE

  return (
    <>
      <Typography component='div'>
        <Box sx={style} noValidate autoComplete='off' component='form'>
          <Typography component='div' variant='header'>
            Add Movie
          </Typography>
          <TextField
            label='Movie Name'
            variant='outlined'
            name='Title'
            placeholder='ADD-NAME'
            onChange={changeMovie}
          />
          <TextField
            onChange={changeMovie}
            label='Poster'
            name='Poster'
            placeholder='ADD-URL'
            variant='outlined'
          />
          <Typography component='div' style={btn}>
            <Button
              onClick={() => addMovies()}
              variant='contained'
              type='reset'
              color='success'
            >
              ADD
            </Button>

            <Button
              onClick={() => {
                handleClose();
              }}
              variant='contained'
              type='reset'
              color='error'
            >
              Close
            </Button>
          </Typography>
        </Box>
      </Typography>
    </>
  );
};

export default AddMovie;
