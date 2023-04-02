import StockGraph from './components/stockGraph/stockGraph';
import AppCSS from "./App.module.css"

const App:React.FC = () => {
	return (
		<div className={AppCSS.container}>
			<StockGraph/>
		</div>
	)
}

export default App