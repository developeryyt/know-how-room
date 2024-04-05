import axios from "axios";



class ApiController {


    constructor() {
        this.instance = axios.create({

        })

    }


}


let api = new ApiController()

export default api