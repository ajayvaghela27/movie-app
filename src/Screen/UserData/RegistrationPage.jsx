import { Typography, Box, TextField, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#e8eaed",
  boxShadow: 24,
  p: 4,
  "& > :not(style)": { m: 1, width: "25ch" },
};

const baseURL = "https://63fee278c5c800a723874d87.mockapi.io/Auth";

const Registration = () => {
  const navigate = useNavigate();

  const CallURL = () => {
    // axios.get(baseURL).then((res) => console.log(res.data));
    axios.get(baseURL).then((res) => setNewVal(res.data));
  };

  useEffect(() => {
    CallURL();
    // console.log("newVal", newVal);
  }, []);

  //  USE-STATE FOR ON CHANGE

  const [regData, setRegData] = useState([]);

  const HandleChangle = (a) => {
    setRegData({ ...regData, [a.target.name]: a.target.value });
  };

  //  FOR DUPLICATION ENTRY

  const [newVal, setNewVal] = useState();

  const HandleSingUp = () => {
    let value = newVal.find(
      (x) =>
        x.email === regData.email ||
        x.mobile === regData.mobile ||
        x.username === regData.username
    );

    const username = regData.username;
    const mobile = regData.mobile;
    const email = regData.email;
    const password = regData.password;

    if (value) {
      alert("Data is Exist");
      navigate("/registration");
    } else if (
      (username == undefined,
      mobile == undefined,
      email == undefined,
      password == undefined)
    ) {
      alert("Please Fill This Form ")
      return;
    } else {
      axios.post(baseURL, {
        username: regData.username,
        email: regData.email,
        mobile: regData.mobile,
        password: regData.password,
      });

      navigate("/login");
    }
  };

  const mobileRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <Box component='form' sx={style} noValidate autoComplete='off'>
      <Typography
        component='div'
        sx={{
          display: "grid",
          rowGap: 4,
          columnGap: 4,
          justifyContent: "center",
          alignItems: "center",
          margin: 4,
        }}
      >
        <TextField
          label='UserName'
          name='username'
          type='name'
          placeholder='Enter Name...'
          onChange={HandleChangle}
          onKeyPress={(a) => {
            if (a.key === "Enter") {
              mobileRef.current.focus();
            }
          }}
          variant='outlined'
        />

        <TextField
          placeholder='000-000-0000'
          label='Mobile-No.'
          name='mobile'
          type='number'
          onChange={HandleChangle}
          variant='outlined'
          inputRef={mobileRef}
          onKeyPress={(a) => {
            if (a.key === "Enter") {
              emailRef.current.focus();
            }
          }}
        />
        <TextField
          placeholder='example@gmail.com'
          label='Email'
          name='email'
          type='email'
          onChange={HandleChangle}
          variant='outlined'
          inputRef={emailRef}
          onKeyPress={(a) => {
            if (a.key === "Enter") {
              passwordRef.current.focus();
            }
          }}
        />
        <TextField
          placeholder='Must be Strong'
          type='password'
          label='Password'
          name='password'
          onChange={HandleChangle}
          variant='outlined'
          inputRef={passwordRef}
          onKeyPress={(a) => {
            if (a.key === "Enter") {
              HandleSingUp();
            }
          }}
        />
        <Button
          sx={{ "&:hover": { bgcolor: "green" } }}
          variant='contained'
          onClick={() => HandleSingUp()}
          type='reset'
        >
          Sign Up
        </Button>
      </Typography>
    </Box>
  );
};

export default Registration;
