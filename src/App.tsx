import "./App.css";

function App() {
	return (
		<div className='bg-[url("https://images.unsplash.com/photo-1483982258113-b72862e6cff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ2NDA2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit")] h-screen bg-no-repeat bg-cover'>
			<div className='flex h-screen justify-center items-center'>
				<div className='w-2/5 h-96 bg-gray-50 p-10 opacity-70 rounded-tl-lg rounded-bl-lg'>
					<p className='text-3xl font-semibold border-b-2 border-green-700 pb-2 mr-24'>Your Name</p>
					<div className='flex p-4 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-green-700'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
							<path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z' />
						</svg>
						<p className='ml-2 font-semibold'>what you do</p>
					</div>
					<div className='flex px-4 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-green-700'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
							/>
						</svg>
						<p className='ml-2 text-sm text-gray-600'>Your Location - 25.0000° N, 71.0000° W</p>
					</div>
					<p className='px-4 mt-8'>
						Totally optional short description about yourself, what you do and so on.
					</p>
					<button className='bg-green-700 text-white rounded-full p-2 mt-4 ml-2'>Get more</button>
					<div className='flex justify-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 hover:text-green-700'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
							/>
						</svg>
					</div>
				</div>
				<div className='w-1/5 h-96'>
					<img
						className='rounded-lg -mt-11 '
						src='https://images.unsplash.com/photo-1535982368253-05d640fe0755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDM5MzAyNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
