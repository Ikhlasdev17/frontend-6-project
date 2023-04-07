import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Users from '../pages/Users'

const MyRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/users' element={<Users />} />
			</Routes>
		</>
	)
}

export default MyRoutes
