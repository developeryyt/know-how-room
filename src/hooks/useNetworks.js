import {useMemo, useState} from "react";
import axios from "axios";



const baseURL  = 'https://api-know-how.com'

class Networks {

    static AXIOS;

    constructor() {
        this.init()
    }

    init() {
        Networks.AXIOS = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
    }

    static async callAPI (params) {
        const { method, url, data, token } = params
        return new Promise((resolve, reject) => {
            try {
                Networks.AXIOS({
                    method,
                    url,
                    data,
                    headers: {
                        ...Networks.AXIOS.headers,
                        ...token && { "Authorization": `Bearer ${token}` }
                    }
                }).then((response) => {
                    if(response.statusCode === 200) {
                        resolve(response)
                    }
                }).catch((err) => {
                    reject(err)
                })

            }catch(err) {
                reject(err)
            }
        })
    }

}



const useNetworks = async () => {
    return await Networks.callAPI()
}

export default useNetworks