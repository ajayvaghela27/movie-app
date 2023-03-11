import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#e8eaed",
  boxShadow: 24,
  p: 4,
};

const baseURl = "https://63fee278c5c800a723874d87.mockapi.io/Auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState();

  const [defaultValue, setDefaultValue] = useState([]);

  const callURL = () => {
    axios.get(baseURl).then((x) => setDefaultValue(x.data));
  };

  useEffect(() => {
    callURL();
  }, []);

  const ValueOnChange = (a) => {
    setLoginValue({ ...loginValue, [a.target.name]: a.target.value });
    console.log(loginValue);
  };

  const HandleLogin = () => {
    let value = defaultValue?.filter(
      (x) =>
        (x.email == loginValue.emailandnumber ||
          x.mobile.toString() == loginValue.emailandnumber) &&
        x.password == loginValue.password
    );

    if (value.length > 0) {
      localStorage.setItem("login", true);
      navigate("/home/dashboard");
    }

  
  };

  const passwordRef = useRef();

  return (
    <>
      <Box sx={style}>
        <Typography
          sx={{
            display: "grid",
            rowGap: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
          component='div'
        >
          <TextField
            label='Email'
            placeholder='example@gmail.com'
            variant='standard'
            name='emailandnumber'
            onChange={ValueOnChange}
            onKeyDown={(a) => {
              if (a.key === "Enter") {
                passwordRef.current.focus();
              }
            }}
          />
          <TextField
            label='Password'
            variant='standard'
            placeholder='Enter Here...'
            name='password'
            type='password'
            onChange={ValueOnChange}
            inputRef={passwordRef}
            onKeyDown={(a) => {
              if (a.key === "Enter") {
                HandleLogin();
              }
            }}
          />

          <Button
            sx={{ "&:hover": { bgcolor: "green" } }}
            variant='contained'
            type='reset'
            onClick={() => HandleLogin()}
          >
            Login
          </Button>
          <Typography
            sx={{
              textAlign: "center",
              "&:hover": { color: "green" },
              color: "#4091e3",
              cursor: "pointer",
            }}
          >
            <Link to='/registration' style={{ textDecoration: "none" }}>
              Create Account
            </Link>
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default LoginPage;
