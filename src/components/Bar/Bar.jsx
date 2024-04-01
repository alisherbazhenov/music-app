import PlayProgress from './PlayProgress'
import PlayerBlock from './PlayerBlock'

function Bar() {
	return (
		<div className="bar">
			<div className="bar__content">
				<PlayProgress />
				<PlayerBlock />
			</div>
		</div>
	)
}

export default Bar
