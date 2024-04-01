function SidebarPersonal(props) {
	return (
		<div className="sidebar__personal">
			<p className="sidebar__personal-name">{props.data.name}</p>
			<div className="sidebar__icon">
				<svg alt={props.data.alt}>
					<use xlinkHref={props.data.icon} />
				</svg>
			</div>
		</div>
	)
}

export default SidebarPersonal
