import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
	const [isHidden, setIsHidden] = useState(false);

	const handleClick = () => {
		setIsHidden(!isHidden);
	};

	return (
		<>
			<div className="lg:hidden">
				<button className={isHidden ? "" : "hidden"} onClick={handleClick}>
					<XIcon className="h-6 w-6" />
				</button>
				<button className={isHidden ? "hidden" : ""} onClick={handleClick}>
					<MenuIcon className="h-6 w-6" />
				</button>
			</div>

			<div
				id="navbar"
				className={`flex lg:flex-row lg:block flex-col list-none gap-10 py-8 text-center text-white cursor-pointer ${
					isHidden ? "" : "hidden"
				}`}>
				<a href="#" id="nav-link">
					About Us
					<ul id="submenu-1" className="flex flex-col">
						<a href="#">Our Team</a>
						<a href="#">Mission and Values</a>
						<a href="#">Sustainability Commitment</a>
						<a href="#">Contact Us</a>
						<a href="#">Help Center</a>
					</ul>
				</a>
				<a href="#" id="nav-link">
					Products and Services
					<ul id="submenu-2" className="flex flex-col">
						<a href="#">Solar Panel Installation</a>
						<a href="#">Commercial Solar Financing</a>
						<a href="#">Battery Storage</a>
						<a href="#">Maintenance Services</a>
						<a href="#">Consultation</a>
						<a href="#">FAQs</a>
					</ul>
				</a>

				<a href="#" id="nav-link">
					Client Portal
					<ul id="submenu-3" className="flex flex-col">
						<a href="#">Access Your Account</a>
						<a href="#">Dashboard</a>
						<a href="#">Request Demo</a>
					</ul>
				</a>
				<a href="#" id="nav-link">
					Resources
					<ul id="submenu-4" className="flex flex-col">
						<a href="#">Commercial Benefits</a>
						<a href="#">Financing Options</a>
						<a href="#">Tax Incentives and Rebates</a>
						<a href="#">Environmental Impact of Solar</a>
					</ul>
				</a>
				<a href="#" id="nav-link">
					Pricing
					<ul id="submenu-5" className="flex flex-col">
						<a href="#">Billing Information</a>
						<a href="#">System Pricing</a>
						<a href="#">Customized Solutions</a>
						<a href="#">Request a Quotation</a>
						<a href="#">Generate Invoice</a>
					</ul>
				</a>
				<a href="#" id="nav-link">
					Login
					<ul id="submenu-6" className="flex flex-col">
						<a href="#">User Login</a>
						<a href="#">New User</a>
						<a href="#">Profile Settings</a>
						<a href="#">Auto-Pay Setup</a>
						<a href="#">Payment History</a>
					</ul>
				</a>
			</div>
		</>
	);
};

export default Navbar;
