import { useState, useEffect } from 'react'
import SkeletonTracks from '../sceletons/SkeletonTracks'

function PlaylistContent(props) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}, [])

	const itemsPlaylist = props.items.map((item) => (
		<div className="playlist__item" key={item.id}>
			<div className="playlist__track track">
				<div className="track__title">
					<div className="track__title-image">
						<svg className="track__title-svg" alt={item.altMusic}>
							<use xlinkHref={item.trackSvg} />
						</svg>
					</div>
					<div className="track__title-text">
						<a className="track__title-link" href={item.trackTitleLink}>
							{item.track} <span className="track__title-span" />
						</a>
					</div>
				</div>
				<div className="track__author">
					<a className="track__author-link" href={item.trackAuthorLink}>
						{item.album}
					</a>
				</div>
				<div className="track__album">
					<a className="track__album-link" href={item.trackAuthorLink}>
						{item.album}
					</a>
				</div>
				<div className="track__time">
					<svg className="track__time-svg" alt={item.altTime}>
						<use xlinkHref={item.timeSvg} />
					</svg>
					<span className="track__time-text">{item.trackTime}</span>
				</div>
			</div>
		</div>
	))

	return (
		<div className="content__playlist playlist">
			{loading
				? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <SkeletonTracks key={n} />)
				: itemsPlaylist}
		</div>
	)
}

export default PlaylistContent
