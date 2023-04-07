import React from 'react'

const Modal = ({
	setModalIsOpen,
	title,
	setTitle,
	body,
	setBody,
	createPost,
}) => {
	return (
		<div className='fixed flex items-center justify-center bg-[rgba(0,0,0,.7)] top-0 left-0 w-full h-screen z-[9999999]'>
			<form
				onSubmit={createPost}
				className='bg-white flex flex-col p-6 gap-4 rounded-md shadow-md w-[400px] min-h-[500px]'
			>
				<input
					className='border-2 border-gray-400 py-2 px-4 rounded-md'
					type='text'
					placeholder='Enter title'
					onChange={e => setTitle(e.target.value)}
					value={title}
				/>
				<textarea
					className='border-2 border-gray-400 py-2 px-4 rounded-md'
					placeholder='Enter description'
					onChange={e => setBody(e.target.value)}
					value={body}
				></textarea>
				<button className='py-2 px-4 rounded-md bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition duration-200'>
					Submit
				</button>
			</form>

			<button
				className='fixed top-[70px] right-[70px] text-6xl text-white'
				onClick={e => setModalIsOpen(false)}
			>
				x
			</button>
		</div>
	)
}

export default Modal
