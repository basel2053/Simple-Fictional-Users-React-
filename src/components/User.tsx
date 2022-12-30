const User = (props: { username: string; age: number }) => {
	return (
		<li className='w-full text-left border border-gray-300 py-2 px-3 text-gray-900 font-semibold mb-3'>
			{props.username} ({props.age} years old)
		</li>
	);
};

export default User;
