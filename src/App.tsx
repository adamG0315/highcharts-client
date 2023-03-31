import StockGraph from './components/stockGraph/stockGraph'

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100vh',
		backgroundColor: 'rgb(124,181,236)'
	}
}

const App:React.FC = () => {
	return (
		<div style={styles.container}>
			<StockGraph/>
		</div>
	)
}

export default App