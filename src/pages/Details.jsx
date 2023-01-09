import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import '../style.css'

const Details = ({
	firstteam,
	secondteam,
	date,
	time,
	setModalActive,
	setBet,
	bet,
}) => {
	const navigate = useNavigate()

	useEffect(() => {
		document.title = `${firstteam}-${secondteam}`
		setBet('')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='container'>
			<Header />
			<div className='content'>
				<div className='team'>
					<h1>{firstteam}</h1>
					<p>против</p>
					<h1>{secondteam}</h1>
				</div>
				<div className='info'>
					<span>{date}</span>
					<span>{time}</span>
				</div>
				<Form bet={bet} setModalActive={setModalActive} setBet={setBet} />
				<button
					className='button block-item'
					onClick={() => navigate('/sportsBets/')}
				>
					Вернуться назад
				</button>
			</div>

			<Footer />
		</div>
	)
}

export default Details
