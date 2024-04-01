import Player from './Player'
import VolumeBlock from './VolumeBlock'

function PlayerBlock() {
	return (
		<div className="bar__player-block">
			<Player />
			<VolumeBlock />
		</div>
	)
}

export default PlayerBlock
