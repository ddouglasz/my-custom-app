import Plan from "../assets/Plan.jpg";
import Bulb from "../assets/Bulb.jpg";

function Cards() {
	return (
		<>
			<div className="text-center text-white text-2xl py-8 font-bold">
				<p>Services and Products</p>
			</div>
			<div className="pl-8 py-4 flex lg:flex-row sm:flex-wrap gap-8">
				<img src={Plan} alt="" className=" h-72 w-96" />
				<div className="text-white w-1/2">
					<p>
						Our experienced solar consultants are here to guide you through the
						entire solar journey. We'll assess your energy requirements,
						evaluate your site's solar potential, and provide you with
						personalized recommendations to maximize your solar investment.
					</p>
					<p className="py-5">
						To ensure your solar system operates at peak efficiency, we provide
						routine maintenance services. Our team will inspect and clean your
						solar panels, check system performance, and address any issues
						promptly. Our advanced monitoring systems allow you to track your
						system's performance in real-time.
						<div className="py-3">
							<button className=" bg-gray-700 hover:bg-gray-700 text-white py-2 px-4 rounded">
								Read More
							</button>
						</div>
					</p>
				</div>
			</div>

			<div className="pl-8 py-6 pt-8 flex flex-row gap-8">
				<div className="text-white w-1/2">
					<p>
						Our experienced solar consultants are here to guide you through the
						entire solar journey. We'll assess your energy requirements,
						evaluate your site's solar potential, and provide you with
						personalized recommendations to maximize your solar investment.
					</p>
					<p className="py-5">
						To ensure your solar system operates at peak efficiency, we provide
						routine maintenance services. Our team will inspect and clean your
						solar panels, check system performance, and address any issues
						promptly. Our advanced monitoring systems allow you to track your
						system's performance in real-time.
						<div className="py-3">
							<button className=" bg-gray-700 hover:bg-gray-700 text-white py-2 px-4 rounded">
								Read More
							</button>
						</div>
					</p>
				</div>
				<img src={Bulb} alt="" className=" h-72 w-96" />
			</div>
		</>
	);
}

export default Cards;
