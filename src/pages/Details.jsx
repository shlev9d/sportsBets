import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import '../style.css'
import { data } from './../data'

const Details = ({ setModalActive, setBet, bet }) => {
	const navigate = useNavigate()
	const { id } = useParams()

	const actualMatch = data.filter(item => item.id === +id)[0]

	useEffect(() => {
		if (data.map(item => item.id).includes(+id)) {
			document.title = `${actualMatch.firstteam}-${actualMatch.secondteam}`
		}
		setBet('')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	return (
		<div className='container'>
			<Header />
			<article className='content'>
				{data.map(item => item.id).includes(+id) ? (
					<>
						<div className='team'>
							<h1>{actualMatch.firstteam}</h1>
							<p>против</p>
							<h1>{actualMatch.secondteam}</h1>
						</div>
						<div className='info'>
							<span>{actualMatch.date}</span>
							<span>{actualMatch.time}</span>
						</div>
						<Form bet={bet} setModalActive={setModalActive} setBet={setBet} />
					</>
				) : (
					<h1 className='no-match'>Такого матча нет</h1>
				)}
				<button
					className='button block-item'
					onClick={() => navigate('/sportsbets/')}
				>
					Вернуться назад
				</button>
			</article>
			<Footer />
		</div>
	)
}

export default Details
