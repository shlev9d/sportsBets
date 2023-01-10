import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Details from './pages/Details'
import Home from './pages/Home'

function App() {
	const [match, setMatch] = useState({})
	const [modalActive, setModalActive] = useState(false)
	const [bet, setBet] = useState('')

	return (
		<div className='App'>
			<Routes>
				<Route
					path='/sportsbets/'
					element={
						<Home
							match={match}
							setMatch={setMatch}
							modalActive={modalActive}
							setModalActive={setModalActive}
							bet={bet}
						/>
					}
				/>
				<Route
					path={`/sportsbets/:id`}
					element={
						<Details
							setModalActive={setModalActive}
							setBet={setBet}
							bet={bet}
						/>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
