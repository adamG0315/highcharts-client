import axios from "axios"

const stocksApi = axios.create({
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