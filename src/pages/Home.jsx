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

		setTimeout(() => {
			setModalActive(false)
		}, 3000)
	}, [modalActive, setModalActive])

	const navigate = useNavigate()

	const changeMatch = item => {
		setMatch(item)
		navigate(`/sportsBets/${item.id}`)
	}

	return (
		<div className='container'>
			{modalActive && <Modal {...match} bet={bet} />}
			<Header />
			<div className='matches'>
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
			</div>
			<Footer />
		</div>
	)
}

export default Home
