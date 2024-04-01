import SidebarPersonal from './SidebarPersonal'
import PERSONALDATA from '../../Data/PersonalData'
import SidebarList from './SidebarList'
import SIDEBARITEMS from '../../Data/SidebarItemsData'

function Sidebar() {
	return (
		<div className="main__sidebar sidebar">
			<SidebarPersonal data={PERSONALDATA} />
			<div className="sidebar__block">
				<SidebarList items={SIDEBARITEMS} />
			</div>
		</div>
	)
}

export default Sidebar
