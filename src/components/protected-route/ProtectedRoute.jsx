import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
	const auth = true
	return auth ? <Outlet /> : <Navigate to="signin" />
}

export default ProtectedRoute
