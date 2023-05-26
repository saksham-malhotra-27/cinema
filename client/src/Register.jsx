import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
	const navigate = useNavigate()
	const [errorsMessage, setErrorsMessage] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = async (data) => {
		try {
			const response = await axios.post('/auth/register', data)
			console.log(response.data)
			toast.success('Registration successful!')
			navigate('/')
		} catch (error) {
			console.error(error.response.data)
			setErrorsMessage(error.response.data)
			toast.error('Error')
		}
	}

	const inputClasses = () => {
		return 'appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500'
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-4 drop-shadow-2xl">
				<div>
					<h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">Register</h2>
				</div>
				<form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<input
						name="username"
						type="text"
						autoComplete="username"
						{...register('username', { required: true })}
						className={inputClasses`${errors.username ? 'border-red-500' : ''}`}
						placeholder="Username"
					/>
					{errors.username && <span className="text-sm text-red-500">Username is required</span>}
					<input
						name="email"
						type="email"
						autoComplete="email"
						{...register('email', { required: true })}
						className={inputClasses`${errors.email ? 'border-red-500' : ''}`}
						placeholder="Email"
					/>
					{errors.username && <span className="text-sm text-red-500">Email is required</span>}
					<input
						name="password"
						type="password"
						autoComplete="current-password"
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters long'
							}
						})}
						className={inputClasses`${errors.password ? 'border-red-500' : ''}`}
						placeholder="Password"
					/>
					{errors.password && <span className="text-sm text-red-500">{errors.password?.message}</span>}
					<div>
						{errorsMessage && <span className="text-sm text-red-500">{errorsMessage}</span>}
						<button
							type="submit"
							className="mt-4 w-full rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Register
						</button>
					</div>
					<p className="text-right">
						Already have an account?{' '}
						<Link to={'/login'} className="font-bold text-blue-600">
							Login here
						</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Register
