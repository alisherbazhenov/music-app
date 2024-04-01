function PlaylistTitle(props) {
	const prop = props.data

	return (
		<div className="content__title playlist-title">
			<div className="playlist-title__col col01">{prop.track}</div>
			<div className="playlist-title__col col02">{prop.author}</div>
			<div className="playlist-title__col col03">{prop.album}</div>
			<div className="playlist-title__col col04">
				<svg className="playlist-title__svg" alt={prop.alt}>
					<use xlinkHref={prop.icon} />
				</svg>
			</div>
		</div>
	)
}

export default PlaylistTitle
