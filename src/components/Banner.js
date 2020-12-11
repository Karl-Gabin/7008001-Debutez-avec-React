import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
	const title = 'La maison jungle'
	return (
		<div className='lmj-banner'>
			<img src={logo} alt='logo-la-maison-jungle' />
			<h1 className='lmj-title'>{title}</h1>
		</div>
	)
}

export default Banner