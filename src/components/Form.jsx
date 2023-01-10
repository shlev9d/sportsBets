import React from 'react'
import { useNavigate } from 'react-router-dom';

const Form = ({bet, setBet, setModalActive}) => {
  const navigate = useNavigate()

  	const changeBet = e => {
			setBet(e.target.value)
		}

    	const sendBet = e => {
				e.preventDefault()
				setModalActive(true)
				navigate('/sportsbets/')
			}
  return (
		<form action='#' id='selectMatch' className='form'>
			<div className='variants'>
				<span>выберите один из вариантов для того, чтобы сделать ставку</span>
				<div className='input'>
					<input
						type='radio'
						name='bet'
						id='input1'
						value={'на победу хозяев'}
						onChange={e => changeBet(e)}
					/>
					<label className='block-item' htmlFor='input1'>
						на победу хозяев
					</label>
				</div>
				<div className='input'>
					<input
						type='radio'
						name='bet'
						value={'на ничью'}
						onChange={e => changeBet(e)}
						id='input2'
					/>
					<label className='block-item' htmlFor='input2'>
						на ничью
					</label>
				</div>
				<div className='input'>
					<input
						type='radio'
						name='bet'
						id='input3'
						value={'на победу гостей'}
						onChange={e => changeBet(e)}
					/>
					<label className='block-item' htmlFor='input3'>
						на победу гостей
					</label>
				</div>
			</div>

			<button
				id='selectMatch'
				onClick={e => sendBet(e)}
				disabled={bet === ''}
				className='form-button block-item'
			>
				Сделать ставку
			</button>
		</form>
	)
}

export default Form