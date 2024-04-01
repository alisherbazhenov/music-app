import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import NAVBARDATA from '../Data/NavbarData'
import Bar from './Bar/Bar'
import Sidebar from './Sidebar/Sidebar'
import '../App.css'

function Layout() {
	return (
		<div className="wrapper">
			<div className="container">
				<main className="main">
					<Navbar data={NAVBARDATA} />
					<Outlet />
					<Sidebar />
				</main>
				<Bar />
				<footer className="footer" />
			</div>
		</div>
	)
}

export default Layout
