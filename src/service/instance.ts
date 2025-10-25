
import axios from "axios"
import { BASE_URL } from "./urls"
import { API_KEY, token } from "../utils/constants"


const Client = axios.create()
Client.defaults.baseURL=BASE_URL
Client.defaults.params={
    api_key:API_KEY,
    language:"tr-TR",
    page:1
    
}

Client.defaults.headers={
    Authorization:`Bearer ${token}`,
    Accept:"application/json",
    "Content-Type": "application/json"
}

Client.interceptors.request.use(
    function(config) {
        //config.params={
           // api_key:API_KEY,
            //language:"tr-TR",
            //page:1
        //}

        return config
    },
    function(error){
        return Promise.reject(error)
    }
)



export default Client;