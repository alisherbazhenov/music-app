import { useEffect, useState } from 'react'
import PlayerControls from './PlayerControls'
import TrackPlay from './TrackPlay'

function Player() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Симулируйте загрузку данных (здесь может быть ваша реальная загрузка данных)
		setTimeout(() => {
			setLoading(false)
		}, 2000) // Пример задержки в 2 секунды
	}, [])

	return (
		<div className="bar__player player">
			<PlayerControls />
			<TrackPlay loading={loading} />
		</div>
	)
}

export default Player
