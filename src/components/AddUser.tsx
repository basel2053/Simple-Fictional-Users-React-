import React, { useState } from 'react';
import Button from './UI/Button';
import ErrorModal from './ErrorModal';

const AddUser = (props: { onAddUser: Function }) => {
	const [inputs, setInputs] = useState({ username: '', age: '' });
	const [hasError, setHasError] = useState(false);
	const [errContent, setErrContent] = useState('');
	const editUserHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs(prevState => ({ ...prevState, username: e.target.value }));
	};
	const editAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs(prevState => ({ ...prevState, age: e.target.value }));
	};
	const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (+inputs.age < 0) {
			setErrContent('Please enter a valid age(> 0)');
		} else if (!(inputs.username && inputs.age)) {
			setErrContent('Please enter a valid name and age (non-empty values).');
			setHasError(!hasError);
		} else {
			const user = { id: Date.now(), username: inputs.username, age: +inputs.age };
			props.onAddUser(user);
		}
		setInputs({ username: '', age: '' });
	};
	return (
		<div className='bg-gray-50 py-5 px-5 rounded'>
			<form onSubmit={addUserHandler}>
				<div className='form-control'>
					<label className='block text-left'>Username</label>
					<input
						className='shadow  border rounded w-full py-1 px-3 my-2 text-gray-700'
						type='text'
						onChange={editUserHandler}
						value={inputs.username}
					/>
				</div>
				<div className='form-control'>
					<label className='block text-left'>Age (Years)</label>
					<input
						className='shadow border rounded w-full py-1 px-3 my-2 text-gray-700'
						type='number'
						onChange={editAgeHandler}
						value={inputs.age}
					/>
				</div>
				<Button type={'submit'}>Add User</Button>
			</form>
			{hasError && (
				<ErrorModal
					gotTheError={() => {
						setHasError(!hasError);
					}}
					errorContent={errContent}
				/>
			)}
		</div>
	);
};

export default AddUser;
