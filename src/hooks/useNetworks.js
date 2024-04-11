import {useMemo, useState} from "react";
import axios from "axios";



const baseURL  = "http://localhost:7200"

class Networks {

    static AXIOS;
    static token = localStorage.getItem("myToken") ?? "";
    static refreshToken = localStorage.getItem("myRefreshToken") ?? ""

    constructor() {
        this.init()
    }

    init() {
        Networks.AXIOS = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                ...Networks.token && {'Authorization': `Bearer ${Networks?.token}`},
                ...Networks.token && {'Refresh-Token': `${Networks?.refreshToken}`},
            }
        })
    }

    static async callAPI (params) {
        const { method, url, data, token } = params
        console.log(method, url, data)
        return new Promise((resolve, reject) => {
            try {
                Networks.AXIOS({
                    method,
                    url,
                    data
                }).then((response) => {
                    console.log({ response })
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

new Networks()

export const useNetworks = async (data) => {
    return await Networks.callAPI(data)
}
