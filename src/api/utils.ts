import { StockData } from "./types"

export const createChartData = (data: StockData) => {
    let ohlcArr:number[][] = [];
    let volumeArr:number[][] = [];
        for (const date in data) {
          const open = parseFloat(data[date]["1. open"]);
          const high = parseFloat(data[date]["2. high"]);
          const low = parseFloat(data[date]["3. low"]);
          const close = parseFloat(data[date]["4. close"]);
          const volume = parseFloat(data[date]["6. volume"]);
          ohlcArr.push([new Date(date).getTime(), open, high, low, close]);
          volumeArr.push([new Date(date).getTime(), volume])
        }
        
    const sortedOhlc = sortDataByUtcDate(ohlcArr)
    const sortedVolume = sortDataByUtcDate(volumeArr)

    return {
        ohlc: sortedOhlc,
        volume: sortedVolume
    }
}

const sortDataByUtcDate = (dataArr: number[][]) => {
    return dataArr.sort((a: number[], b:number[]) => a[0] - b[0])
}