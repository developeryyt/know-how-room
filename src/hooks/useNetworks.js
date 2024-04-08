import {useMemo, useState} from "react";
import axios from "axios";



const baseURL  = `${process.env.REACT_APP_API_BASE_URL}`


const useNetworks = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);


    const apiClient = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            ...token && {'Authorization': `Bearer ${token?.token}`},
        }
    })

    const axiosController = async (config) => {
        const { url, method, data } = config
        return new Promise((resolve, reject) => {
            try {
                apiClient?.[method.toLowerCase()](url, {
                    ...data
                }).then((res) => {
                    setData(res?.data)
                    resolve(true)
                })

            }catch(err) {
                reject(err)
            }
        })
    }

    // const results = useMemo(() => ({
    // }), [data])


    return [data, axiosController]
}

export default useNetworks