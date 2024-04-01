function Logo(props) {
	return (
		<div className="nav__logo logo">
			<img className="logo__image" src={props.logo} alt="logo" />
		</div>
	)
}

export default Logo
