import { Route, Routes } from 'react-router'
import Login from './Login'
import Register from './Register'
import Home from './home'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import AdminRoute from './AdminRoute'
import CinemaMgt from './CinemaMgt'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true

function App() {
	return (
		<>
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/cinema-mgt"
					element={
						<AdminRoute>
							<CinemaMgt />
						</AdminRoute>
					}
				/>
				<Route
					path="/movie-mgt"
					element={
						<AdminRoute>
							<CinemaMgt />
						</AdminRoute>
					}
				/>
			</Routes>
		</>
	)
}

export default App
