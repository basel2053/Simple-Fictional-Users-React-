import User from './User';

export interface IUser {
	id: Date;
	username: string;
	age: number;
}

export const UsersList = (props: { users: IUser[] }) => {
	return (
		<ul className='bg-gray-50 py-5 px-5 rounded mt-9'>
			{props.users.map(user => (
				<User key={String(user.id)} username={user.username} age={user.age} />
			))}
		</ul>
	);
};
