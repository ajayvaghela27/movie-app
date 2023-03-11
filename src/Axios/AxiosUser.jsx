import axios from "axios";

const AxiosUser = axios.create({
  baseURL: "https://63fee278c5c800a723874d87.mockapi.io/moviename",
});

export default AxiosUser; 
