import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<header
			className='
				z-[9999]
				fixed top-0
				w-full px-[10%] py-4 bg-indigo-400 
				flex items-center justify-between shadow-sm shadow-indigo-500'
		>
			<h1 className='text-4xl text-white font-bold'>LOGO</h1>

			<ul className='flex items-center gap-x-[30px]'>
				<li>
					<Link className='text-white text-xl font-medium' to={'/'}>
						Home
					</Link>
				</li>
				<li>
					<Link className='text-white text-xl font-medium' to={'/posts'}>
						Posts
					</Link>
				</li>
				<li>
					<Link className='text-white text-xl font-medium' to={'/users'}>
						Users
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Navbar
