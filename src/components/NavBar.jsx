import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBasketShopping } from "react-icons/fa6";
import logoHenkoOrange from "/public/images/logoHenkoOrange.svg";

// Composant de liens partagés
const MenuLinks = ({ onClick }) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
			<Link href="/coaching" onClick={onClick}>
				COACHING
			</Link>
			<Link href="/massages" onClick={onClick}>
				MASSAGES
			</Link>
			<Link href="/acceslibre" onClick={onClick}>
				ACCES LIBRE
			</Link>
			<Link href="/locationespacepro" onClick={onClick}>
				LOCATION ESPACE PRO
			</Link>
			<Link href="/#contact" onClick={onClick}>
				CONTACT
			</Link>
		</div>
	);
};

// Composant pour le menu mobile
const MobileMenu = ({ isNavOpen, toggleNav }) => {
	return (
		<div
			className={`${
				isNavOpen
					? "fixed inset-0 w-full h-screen z-10 flex flex-col justify-evenly items-center bg-white"
					: "hidden"
			}`}
		>
			<button
				type="button"
				className="absolute top-4 right-4"
				onClick={toggleNav}
				aria-label="Fermer le menu"
			>
				<svg
					title="cross"
					alt="cross"
					className="h-8 w-8 text-black"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>
			<Link href="/" onClick={toggleNav}>
				<Image src={logoHenkoOrange} alt="Logo" height={100} width={100} />
			</Link>
			<MenuLinks onClick={toggleNav} />
			<Link href="/" className="bg-black p-4 text-white rounded-lg">
				OFFRIR UNE CARTE CADEAU
			</Link>
		</div>
	);
};

// Composant NavBar principal
function NavBar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleNav = () => setIsNavOpen((prev) => !prev);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Mobile Header */}
			<div
				className={`${
					isSticky ? "sticky top-0 bg-white shadow-md" : ""
				} px-6 md:px-10 flex items-center justify-between py-2 md:py-8 xl:hidden z-20 transition-all duration-300`}
			>
				<button
					type="button"
					className="space-y-2"
					onClick={toggleNav}
					aria-label="Ouvrir le menu mobile"
				>
					<span className="block h-0.5 w-8 bg-black" />
					<span className="block h-0.5 w-8 bg-black" />
					<span className="block h-0.5 w-8 bg-black" />
				</button>
				<Link href="/">
					<Image
						src={logoHenkoOrange}
						alt="Logo Orange Henko"
						width={100}
						height={100}
					/>
				</Link>
				<MobileMenu isNavOpen={isNavOpen} toggleNav={toggleNav} />
				<Link href="/" aria-label="cliquer pour accéder au panier">
					<FaBasketShopping className="text-2xl text-black" />
				</Link>
			</div>

			{/* Desktop Header */}
			<div
				className={`hidden ${
					isSticky ? "sticky top-0 bg-white shadow-md" : ""
				} xl:flex justify-between items-center px-20 py-2`}
			>
				<Link href="/">
					<Image
						src={logoHenkoOrange}
						alt="Logo Orange Henko"
						width={90}
						height={100}
					/>
				</Link>
				<MenuLinks />
				<div className="flex items-center gap-8">
					<Link href="/" className="bg-black p-4 text-white rounded-lg">
						OFFRIR UNE CARTE CADEAU
					</Link>
					<Link href="/" aria-label="cliquer pour accéder au panier">
						<FaBasketShopping className="text-2xl text-black" />
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavBar;
