import "./App.css";
import "flowbite";
import Navbar from "./components/Nav";
import EnergyEco from "./assets/EnergyEco.jpg";
import Technician1 from "./assets/Technician1.jpg";
import Space from "./assets/Space.jpg";
import SolarPanel from "./assets/SolarPanel.jpg";
import { useState } from "react";
import Modal from "./components/Modal";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";

const App = () => {
	const [opened, setOpened] = useState(false);
	const [show, setShow] = useState(false);

	const navbar = document.getElementById("navbar");

	const onclose = () => {
		setShow(false);
		setOpened(!opened);
	};

	window.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			navbar?.classList.add("scrolled");
		} else {
			navbar?.classList.remove("scrolled");
		}
	});

	window.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			navbar?.classList.add("scrolled");
		} else {
			navbar?.classList.remove("scrolled");
		}
	});

	return (
		<>
			<Modal opened={opened} onclose={onclose} show={show} />
			<div className=" bg-gray-800 min-h-screen">
				<Navbar />

				<div
					id="default-carousel"
					className="relative w-full"
					data-carousel="slide">
					{/* Carousel wrapper */}
					<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
						{/* Item 1  */}

						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img
								src={EnergyEco}
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
								alt="..."></img>
						</div>
						{/* Item 2 */}
						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img
								src={Technician1}
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
								alt="..."></img>
						</div>
						{/* Item 3 */}
						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img
								src={Space}
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
								alt="..."></img>
						</div>
						{/* Item 4 */}
						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img
								src={SolarPanel}
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
								alt="..."></img>
						</div>
					</div>
					{/* Slider indicators */}
					<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
						<button
							type="button"
							className="w-3 h-3 rounded-full"
							aria-current="true"
							aria-label="Slide 1"
							data-carousel-slide-to="0"></button>
						<button
							type="button"
							className="w-3 h-3 rounded-full"
							aria-current="false"
							aria-label="Slide 2"
							data-carousel-slide-to="1"></button>
						<button
							type="button"
							className="w-3 h-3 rounded-full"
							aria-current="false"
							aria-label="Slide 3"
							data-carousel-slide-to="2"></button>
						<button
							type="button"
							className="w-3 h-3 rounded-full"
							aria-current="false"
							aria-label="Slide 4"
							data-carousel-slide-to="3"></button>
						<button
							type="button"
							className="w-3 h-3 rounded-full"
							aria-current="false"
							aria-label="Slide 5"
							data-carousel-slide-to="4"></button>
					</div>
					{/* Slider controls */}
					<button
						type="button"
						className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
						data-carousel-prev>
						<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
							<svg
								className="w-4 h-4 text-white dark:text-gray-800"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 1 1 5l4 4"
								/>
							</svg>
							<span className="sr-only">Previous</span>
						</span>
					</button>
					<button
						type="button"
						className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
						data-carousel-next>
						<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
							<svg
								className="w-4 h-4 text-white dark:text-gray-800"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 9 4-4-4-4"
								/>
							</svg>
							<span className="sr-only">Next</span>
						</span>
					</button>
				</div>

				<div id="main-content">
					<div className=" text-center text-white  serif">
						<p className="text-3xl py-8">Sonne Technology</p>
					</div>
					<div className="text-white justify-center text-center py-5">
						<p className="py-3 text-5xl">About Us</p>

						<p id="about-us" className="text-xl">
							Welcome to Sonne Technology Solutions, your ultimate partner for
							efficient renewable energy data processing and analysis. We're
							dedicated to revolutionizing energy practices through data,
							empowering energy analysts, engineers, and researchers to make
							informed decisions and leverage design technology.
						</p>
					</div>
					<div className="flex flex-row gap-8 text-center justify-center items-center py-8">
						<button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
							Schedule A Demo
						</button>
						{/* <!-- Modal Trigger Button --> */}
						<button
							id="openModal"
							className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded"
							onClick={() => {
								setShow(true);
								setOpened(true);
							}}>
							Sign Up
						</button>
					</div>
				</div>

				<Cards />

				<Faqs />
			</div>
			<Footer />
		</>
	);
};

export default App;
