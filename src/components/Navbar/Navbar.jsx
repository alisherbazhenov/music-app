import { useState } from 'react'
import Logo from './Logo'
import Burger from './Burger'
import Menu from './Menu'

function Navbar(props) {
	const [menuOpen, setMenuOpen] = useState(false)
	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<nav className="main__nav nav">
			<Logo logo={props.data.navLogo} />
			<Burger onClick={toggleMenu} />
			{menuOpen && <Menu nav={props.data.nav} />}
		</nav>
	)
}

export default Navbar
