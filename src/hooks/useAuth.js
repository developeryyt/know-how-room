import {useState} from "react";

const useAuth = () => {

    const [token, setToken] = useState(localStorage.getItem('myAuthToken')??"")







    return [token]
}

export default useAuth;