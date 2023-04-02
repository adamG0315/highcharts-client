import { getStocksData } from '../../api/stocksApi'
import { useQuery } from "react-query";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { REFETCH_INTERVAL } from '../../api/constants';
import SpinnerComponent from '../spinner/Spinner';
import {createChartData} from "../../api/utils"
import ErrorComponent from '../error/ErrorComponent';
import StockGraphCSS from "./StockgGraph.module.css"

const StockGraph:React.FC = () => {
	const {isLoading, isError, data} = useQuery(
		'stocks', 
		getStocksData, 
		{refetchInterval: REFETCH_INTERVAL}
	)
	
	if(isLoading) {
		return <SpinnerComponent size={60} />
	}

	if(isError) {
		return <ErrorComponent/>
	}

	
	const { ohlc, volume }: any = createChartData(data)

	const options: Highcharts.Options = {
		title: {
			text: 'AAPL Stock Price',
		},
		scrollbar: {
			enabled: false
		},
		yAxis: [
			{
				title: {
					text: 'OHLC',
				},
				height: '60%',
				lineWidth: 2,
			},
			{
				title: {
					text: 'Volume',
				},
				top: '65%',
				height: '35%',
				offset: 0,
				lineWidth: 2,
			},
		],
		series: [
			{
				type: "candlestick",
				name: "AAPL",
				data: ohlc,
			},
			{
				type: "column",
				name: "volume",
				data: volume,
				yAxis: 1,
			}
		],
	};	

	return (
		<div className={StockGraphCSS.container}>
			<HighchartsReact 
				options={options}
				highcharts={Highcharts}
				constructorType={'stockChart'}
			/>
		</div>

	)
}

export default StockGraph