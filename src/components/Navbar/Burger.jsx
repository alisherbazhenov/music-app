// Burger.jsx
/* eslint-disable */

function Burger({ onClick }) {
	return (
		<div className="nav__burger burger" onClick={onClick}>
			<span className="burger__line" />
			<span className="burger__line" />
			<span className="burger__line" />
		</div>
	)
}

export default Burger
