import VolumeProgress from './VolumeProgress'

function VolumeBlock() {
	return (
		<div className="bar__volume-block volume">
			<div className="volume__content">
				<div className="volume__image">
					<svg className="volume__svg" alt="volume">
						<use xlinkHref="img/icon/sprite.svg#icon-volume" />
					</svg>
				</div>
				<VolumeProgress />
			</div>
		</div>
	)
}

export default VolumeBlock
