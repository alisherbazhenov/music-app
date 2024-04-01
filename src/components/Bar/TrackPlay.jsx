import SkeletonPlayer from '../sceletons/SkeletonPlayer'
import LikeDislikeIcons from './LikeDislikeIcons'

function TrackPlay(props) {
	return (
		<div className="player__track-play track-play">
			{props.loading ? (
				<SkeletonPlayer />
			) : (
				<div className="track-play__contain">
					<div className="track-play__image">
						<svg className="track-play__svg" alt="music">
							<use xlinkHref="img/icon/sprite.svg#icon-note" />
						</svg>
					</div>
					<div className="track-play__author">
						<a className="track-play__author-link" href="http://">
							Ты та...
						</a>
					</div>
					<div className="track-play__album">
						<a className="track-play__album-link" href="http://">
							Баста
						</a>
					</div>
				</div>
			)}
			<LikeDislikeIcons />
		</div>
	)
}

export default TrackPlay
