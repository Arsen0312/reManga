import axios from "axios";
import {API_URL} from "../../../../5shered/api";

const $api = axios.create({
    withCredentials: true,
    baseURL: "https://server-re-manga.vercel.app"
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})

export default $api
