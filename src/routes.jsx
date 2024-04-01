import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import NotFound from './pages/not-found'
import UserPlaylist from './components/Centreblock/UserPlaylist'
import Layout from './components/Layout'
import Category1 from './pages/category1/Category1'
import Category2 from './pages/category2/Category2'
import Category3 from './pages/category3/Category3'
import ProtectedRoute from './components/protected-route/ProtectedRoute'

function AppRoutes() {
	return (
		<Routes>
			<Route element={<ProtectedRoute />}>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="userlist" element={<UserPlaylist />} />
					<Route path="category1" element={<Category1 />} />
					<Route path="category2" element={<Category2 />} />
					<Route path="category3" element={<Category3 />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Route>

			<Route path="signup" element={<SignUp />} />
			<Route path="signin" element={<SignIn />} />
		</Routes>
	)
}

export default AppRoutes
