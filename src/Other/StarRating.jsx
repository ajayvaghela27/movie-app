import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (a) => {
    setRating(a);
  };

  const handleEnter = (a) => {
    setHover(a);
  };

  const handleLeave = (a) => {
    setHover(a);
  };

  return (
    <Typography className='star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Typography key={index} sx={{ display: "inline-flex" }}>
            <IconButton component='span'>
              <StarRateIcon
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  "&.on": { color: "#ffa534" },
                  "&.off": { color: "#ccc" },
                }}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => handleRating(index)}
                onMouseEnter={() => handleEnter(index)}
                onMouseLeave={() => handleLeave(rating)}
              />
            </IconButton>
          </Typography>
        );
      })}
    </Typography>
  );
};

export default StarRating;
