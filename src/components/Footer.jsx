import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'

const Footer = () => {
	return (
		<footer>
			<a
				href='https://github.com/shlev9d/sportsbets'
				target={'_blank'}
				rel='noreferrer'
			>
				<FiGithub />
			</a>
			<a
				href='https://www.linkedin.com/in/shlev9d/'
				target={'_blank'}
				rel='noreferrer'
			>
				<FiLinkedin />
			</a>
		</footer>
	)
}

export default Footer
