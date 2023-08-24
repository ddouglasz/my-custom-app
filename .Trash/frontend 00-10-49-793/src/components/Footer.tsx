import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<footer id="footer" className="text-white py-8">
			<div className="container mx-auto flex flex-row gap-8 items-center">
				{/* Company Information */}
				<div className="mb-4">
					<img src="" alt="Logo" className="" />
					<p className="text-center text-sm mt-2 py-4">
						1234 Main Street, City, Country
					</p>
					<p className="text-center text-sm">Phone: (123) 456-7890</p>
					<p className="text-center text-sm py-4">
						info@sonnetechsolutions.com
					</p>
				</div>

				{/* Navigation Links */}
				<div className="flex space-x-8 mt-4 justify-center">
					<a
						href="#"
						className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
						Home
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
						About
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
						Services
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
						Contact
					</a>
				</div>

				{/* Social Media Icons */}
				<div className="container mx-auto flex justify-center">
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4">
						<FontAwesomeIcon
							icon={faFacebook}
							size="lg"
							className="text-white"
						/>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4">
						<FontAwesomeIcon
							icon={faTwitter}
							size="lg"
							className="text-white"
						/>
					</a>

					<a
						href="https://www.linkedin.com"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={faLinkedin}
							size="lg"
							className="text-white"
						/>
					</a>
				</div>
			</div>
			<p className="text-center text-sm">
				© 2023 SonneTechologies. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
