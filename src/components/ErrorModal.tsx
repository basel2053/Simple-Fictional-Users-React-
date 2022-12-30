import Button from './UI/Button';

const ErrorModal = (props: { gotTheError: Function; errorContent: string }) => {
	return (
		<div>
			<div className='w-screen h-screen fixed z-10 top-0 left-0 bg-black opacity-60'></div>
			<div className='fixed z-20 h-1/4 w-1/2 m-auto inset-x-0 -inset-y-0  bg-white rounded-lg text-left'>
				<div className='top bg-purple-500 rounded-t-lg text-white  py-4 px-4 text-lg'>
					<h2 className='font-bold w-full'>Invalid input</h2>
				</div>
				<div className='bottom mt-9 ml-3'>
					<p>{props.errorContent}</p>
				</div>
				<div className='text-right pr-6'>
					<Button type='button' onClick={props.gotTheError}>
						Okay
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ErrorModal;
