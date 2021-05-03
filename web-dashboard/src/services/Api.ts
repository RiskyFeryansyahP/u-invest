import axios from "redaxios";

let urls = {
    development: 'http://localhost:8080/api/v1',
}

const api = axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})

export default api