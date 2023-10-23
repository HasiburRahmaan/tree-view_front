import axios from "axios";

let axiosInstance = axios.create({});

// axiosInstance.defaults.headers.common["Authorization"] = `bearer ${
//   token ? JSON.parse(token) : null
// }`;


export default axiosInstance;
