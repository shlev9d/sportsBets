import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { data } from '../data'
import '../style.css'

const Home = ({ match, setMatch, modalActive, setModalActive, bet }) => {
	useEffect(() => {
		document.title = `Ставки на спорт`

		const timeout = setTimeout(() => {
			setModalActive(false)
		}, 2000)
		return () => clearTimeout(timeout)
	}, [modalActive, setModalActive])

	const navigate = useNavigate()

	const changeMatch = item => {
		setMatch(item)
		navigate(`/sportsbets/${item.id}`)
	}

	return (
		<div className='container'>
			{modalActive && <Modal {...match} bet={bet} />}
			<Header />
			<article className='matches'>
				{data.map(item => (
					<div
						key={item.id}
						onClick={() => changeMatch(item)}
						className='match block-item'
					>
						<div>
							{item.firstteam} - {item.secondteam}
						</div>
						<div className='details'>Подробнее</div>
					</div>
				))}
			</article>
			<Footer />
		</div>
	)
}

export default Home
