export interface StockData {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "6. volume": string;
    };
  }

export interface ErrorResponse {
    "Error Message": string;
}
