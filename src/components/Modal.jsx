import React from 'react'

const Modal = ({ firstteam, secondteam, bet, date, time }) => {
	return (
		<div className='modal-bg'>
			<div className='modal'>
				<h4>Спасибо, ваша ставка</h4>
				<div className='modal-info'>
					<div className='modal-team'>
						<h2>{firstteam}</h2>
						<span>-</span>
						<h2>{secondteam}</h2>
					</div>
					<div className='modal-date'>
						<p>{date}</p>
						<span>{time}</span>
					</div>
					<span>ставка {bet}</span>
				</div>
				<span>принята</span>
			</div>
		</div>
	)
}

export default Modal
