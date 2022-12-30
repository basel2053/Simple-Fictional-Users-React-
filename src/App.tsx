import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import { UsersList, IUser } from './components/UsersList';

function App() {
	const [users, setUsers] = useState([]);
	const addNewUser = (user: IUser) => {
		setUsers((prevState: any) => {
			return [...prevState, user];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addNewUser} />
			{users.length > 0 && <UsersList users={users} />}
		</div>
	);
}

export default App;
