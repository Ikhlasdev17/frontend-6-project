import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className='w-full h-screen bg-blue-100 flex flex-col items-center justify-center px-[20%] text-center'>
			<h1 className='text-8xl text-white drop-shadow-lg font-extrabold'>
				Welcome!
			</h1>
			<p className='text-lg text-indigo-400 font-semibold my-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex
				nesciunt perspiciatis a voluptatibus libero, architecto doloribus, quas
				laboriosam nemo veritatis sed maxime non unde, repudiandae laudantium
				ipsam asperiores magnam iste quibusdam eaque debitis vero? Assumenda,
				unde? Officia velit consequatur porro odit nostrum iusto iure
				consequuntur. Sapiente assumenda fugit at!
			</p>
			<div className='flex items-center gap-x-4 '>
				<Link
					className='px-6 py-2 rounded-md shadow-md bg-indigo-500 text-white font-semibold hover:bg-indigo-600 '
					to={'/posts'}
				>
					Read more
				</Link>
				<Link
					className='px-6 py-2 rounded-md shadow-md bg-white text-indigo-500 font-semibold hover:bg-gray-100'
					to={'/users'}
				>
					View users
				</Link>
			</div>
		</div>
	)
}

export default Home
