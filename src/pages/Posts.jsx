import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	useEffect(() => {
		setLoading(true)
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				setPosts(res.data)
			})
			.finally(() => setLoading(false))
	}, [])

	function createPost(e) {
		e.preventDefault()

		const data = {
			title: title,
			body: body,
			userId: '1',
		}

		if (title) {
			axios
				.post('https://jsonplaceholder.typicode.com/posts', data)
				.then(res => {
					console.log('success', res)
				})
				.catch(err => {
					console.log(err)
				})
				.finally(() => {
					setTitle('')
					setBody('')
				})
		}
	}

	return (
		<div className='grid lg:grid-cols-4 w-[80%] mx-auto mt-[100px] gap-[2rem] md:grid-cols-2 sm:grid-cols-1'>
			{loading ? (
				<h1 className='text-3xl text-gray-500 font-medium'>Loading....</h1>
			) : (
				posts?.map(item => (
					<div
						className='p-4 shadow-md rounded-md min-h-[200px] bg-green-200'
						key={item?.id}
					>
						<h2 className='text-xl font-medium drop-shadow-md text-gray-700'>
							{item.title}
						</h2>
					</div>
				))
			)}

			<button className='fixed bottom-[100px] right-[50px] py-2 px-4 rounded-md bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition duration-200'>
				New post
			</button>

			<Modal />
		</div>
	)
}

export default Posts
