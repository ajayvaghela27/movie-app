import { Outlet, Navigate } from "react-router-dom";

const Protected = () => {
  let login = localStorage.getItem("login");

  if (login) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }

  // return <Outlet />;
};

export default Protected;
