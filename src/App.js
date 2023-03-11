import Typography from "@mui/material/Typography";
import RouteUser from "./Screen/Routes/RouteUser";
import Store from "./Redux/Store/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={Store}>
        <Typography component='div'>
          <RouteUser />
        </Typography>
      </Provider>
    </>
  );
}

export default App;
