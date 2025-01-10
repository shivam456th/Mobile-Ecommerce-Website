import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonserver.reactbd.com/'
})

export default instance