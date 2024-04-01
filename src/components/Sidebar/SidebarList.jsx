import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SkeletonSelections from '../sceletons/SkeletonSelections'

function SidebarList(props) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Симулируйте загрузку данных (здесь может быть ваша реальная загрузка данных)
		setTimeout(() => {
			setLoading(false)
		}, 2000) // Пример задержки в 2 секунды
	}, [])

	const sidebarItems = props.items.map((item) => (
		<div className="sidebar__item" key={item.id}>
			<Link className="sidebar__link" to={item.link}>
				<img className="sidebar__img" src={item.img} alt={item.alt} />
			</Link>
		</div>
	))

	return (
		<div className="sidebar__list">
			{loading
				? [1, 2, 3].map((n) => <SkeletonSelections key={n} />)
				: sidebarItems}
		</div>
	)
}

export default SidebarList
