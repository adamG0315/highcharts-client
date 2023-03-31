import axios from "axios"
import { productionApi } from "../config"



const stocksApi = axios.create({
    baseURL: productionApi,
    headers: { 'Content-Type': 'application/json' },
})

const getStocksData = async () => {
    const response = await stocksApi.get("/get-data")
    if(response.data['Error Message']) {
        throw new Error("Error while fetching data")
    }
    return response.data
}

export { getStocksData }