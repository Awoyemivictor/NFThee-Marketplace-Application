import axios from "axios";
const ServerInstance = axios.create({
  baseURL: `http://192.168.0.105:2022/api/nftteam/store`,
});

export default FormData;
