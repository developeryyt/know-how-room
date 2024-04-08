import axios from "axios";


const baseURL  = `${process.env.REACT_APP_API_BASE_URL}`

const apiClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})


export default api