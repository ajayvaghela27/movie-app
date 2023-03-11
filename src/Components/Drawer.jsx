import RoofingIcon from "@mui/icons-material/Roofing";
import { IconButton, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import MovieIcon from "@mui/icons-material/Movie";
import LoginIcon from "@mui/icons-material/Login";

// ********   Drawer's Links (Parts)
const items = [
  {
    name: "Home",
    icon: <RoofingIcon />,
    link: "home/dashboard",
  },
  { name: "Watch List", icon: <ListIcon />, link: "home/watchlist" },
  { name: "Movies", icon: <MovieIcon /> },
  { name: "Login", icon: <LoginIcon />, link: "/login" },
];

const SideDrawer = () => {
  const [sideDrawer, setsideDrawer] = useState(false);

  const getList = () => (
    <Typography
      component='div'
      style={{ width: 250 }}
      onClick={() => setsideDrawer(false)}
    >
      {items.map((item) => (
        <Link to={item.link} style={{ color: "black", textDecoration: "none" }}>
          <ListItem>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      ))}
    </Typography>
  );
  return (
    <Typography component='div'>
      <IconButton sx={{ color: "white" }} onClick={() => setsideDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={sideDrawer}
        anchor={"left"}
        onClose={() => setsideDrawer(false)}
      >
        {getList()}
      </Drawer>
    </Typography>
  );
};

export default SideDrawer;
