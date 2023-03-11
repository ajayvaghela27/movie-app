import { Typography } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Axios/HomePage";
import WatchList from "../../Components/WatchList";
import Protected from "../../Routes/Protected";
import LoginPage from "../UserData/LoginPage";
import RegistrationPage from "../UserData/RegistrationPage";
import Profile from "../../Screen/UserData/Profile";

const RouteUser = () => {
  return (
    <Typography component='div'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path='login' index element={<LoginPage />} />

          <Route path='home' element={<Protected />}>
            <Route path='dashboard' index element={<HomePage />} />
            <Route path='watchlist' element={<WatchList />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Typography>
  );
};

export default RouteUser;
