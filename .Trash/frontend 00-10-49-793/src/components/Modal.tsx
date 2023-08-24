import { XIcon } from "@heroicons/react/solid";

const Modal = (props: {
		opened: boolean;
		onclose: () => void;
		show: boolean;
	}) => {
		if (!props.show) {
			return null;
		}
	
		return (
			<>
				<button onClick={props.onclose} className="pl-5">
					<XIcon className="h-6 w-6" />
				</button>
				<div className=" py-4 text-left px-6">
					<h2 className="text-2xl font-semibold mb-2">
						Welcome to Our Newsletter
					</h2>
					<p className="mb-4">
						Subscribe to our newsletter to receive updates about our latest
						products, prices, discounts and promotions.
					</p>
					<form className="flex flex-col">
						<input
							type="email"
							placeholder="Enter your email"
							className="mb-2 p-2 border rounded"
						/>
						<button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Subscribe
						</button>
					</form>
					<button
						id=""
						className="modal-close-btn absolute top-0 right-0 p-2"></button>
				</div>
			</>
		);
	};
	export default Modal;