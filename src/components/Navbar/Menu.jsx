// Menu.jsx
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

function Menu(props) {
	const activeClassName = 'underline'

	const data = props.nav
	const listItem = data.map((item) => (
		<li key={item.link} className="menu__item">
			<NavLink
				to={item.link}
				className={({ isActive }) =>
					cn('menu__link', {
						[activeClassName]: isActive,
					})
				}
			>
				{item.text}
			</NavLink>
		</li>
	))

	return (
		<div className="nav__menu menu">
			<ul className="menu__list">{listItem}</ul>
		</div>
	)
}

export default Menu
