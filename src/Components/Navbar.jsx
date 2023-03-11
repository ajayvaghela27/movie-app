import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "./Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <Drawer />
          </IconButton>
          <Typography component='div' sx={{ flexGrow: 1 }}>
            <NavLink style={{ textDecoration: "none", color: "white" }}>
              <IconButton sx={{ color: "white" }}>
                <MovieCreationIcon /> Market
              </IconButton>
            </NavLink>
          </Typography>

          <IconButton sx={{ color: "white" }}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to='/login'
            >
              <LogoutIcon onClick={() => localStorage.clear()} />
            </NavLink>

            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to='home/profile'
            >
              <AccountBoxIcon />
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
