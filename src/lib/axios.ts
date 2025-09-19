import axios from "axios";

const api = axios.create({
    baseURL: process.env.AXIOS_BASEURL
})

export default api