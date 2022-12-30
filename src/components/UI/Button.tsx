import { ReactNode } from 'react';

interface IBtn {
	children: ReactNode;
	onClick?: React.MouseEventHandler;
	type?: 'submit' | 'reset' | 'button';
}
const Button = (props: IBtn) => {
	return (
		<button
			type={props.type}
			className='button bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-3 rounded mt-3'
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
