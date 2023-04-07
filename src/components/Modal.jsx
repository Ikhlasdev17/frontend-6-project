import React from 'react'

const Modal = () => {
	return (
		<div className='fixed flex items-center justify-center bg-[rgba(0,0,0,.7)] top-0 left-0 w-full h-screen z-[9999999]'>
			<form className='bg-white flex flex-col p-6 rounded-md shadow-md w-[400px] min-h-[500px]'>
				<input type='text' placeholder='Enter title' />
				<textarea placeholder='Enter description'></textarea>
				<button className='py-2 px-4 rounded-md bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition duration-200'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default Modal
