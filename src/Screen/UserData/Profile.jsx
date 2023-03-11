import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardHeader } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardActions from "@mui/material/CardActions";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  return (
    <Box>
      <Card sx={style}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              A
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='UserName'
        />
        <CardContent>
          <CardMedia
            component='img'
            height='100'
            image='/static/images/cards/paella.jpg'
            alt='Paella dish'
          />

          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <NavLink to='/login'>
            <IconButton aria-label='log out'>
              <LogoutIcon onClick={() => localStorage.clear()} />
            </IconButton>
          </NavLink>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Profile;
