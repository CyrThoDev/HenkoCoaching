import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBasketShopping } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";

// Composant de liens partagés
const MenuLinks = ({ onClick }) => {
	return (
		<div className="flex flex-col lg:flex-row gap-8 lg:gap-4 xl:gap-6 items-center">
			<Link href="/" onClick={onClick}>
				ACCUEIL
			</Link>
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
const MobileMenu = ({ isNavOpen, toggleNav, logo, bgbutton }) => {
	return (
		<div
			className={`${
				isNavOpen
					? "fixed inset-0 w-full h-screen z-50 flex flex-col justify-center gap-10 items-center bg-white"
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
					<title>cross</title>
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>
			<Link href="/" onClick={toggleNav}>
				<Image
					src={logo}
					height={75}
					width={"auto"}
					alt="logo de Henko Coaching"
				/>
			</Link>
			<MenuLinks onClick={toggleNav} />
			<Link
				href="/cadeaux"
				className={`${bgbutton} py-3 px-4 text-white rounded-lg`}
			>
				OFFRIR UNE CARTE CADEAU
			</Link>
		</div>
	);
};

// Composant NavBar principal
function NavBar({ logo, bgbutton }) {
	const { cartCount } = useCart();
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
				} px-6 md:px-10 flex items-center justify-between py-2  min-[1150px]:hidden z-20 transition-all duration-300 `}
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
						src={logo}
						alt="logo Orange Henko"
						width={"auto"}
						height={70}
					/>
				</Link>
				<MobileMenu
					isNavOpen={isNavOpen}
					toggleNav={toggleNav}
					logo={logo}
					bgbutton={bgbutton}
				/>

				<Link href="/panier" aria-label="cliquer pour accéder au panier">
					<div className="relative inline-block">
						<FaBasketShopping className="text-2xl text-black" />
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-darkorange text-white rounded-full text-xs px-1.5 py-0.5">
								{cartCount}
							</span>
						)}
					</div>
				</Link>
			</div>

			{/* Desktop Header */}
			<div
				className={`hidden ${
					isSticky ? "sticky top-0 bg-white shadow-md" : ""
				} min-[1150px]:flex justify-between  px-10 xl:px-20 py-2 z-20`}
			>
				<Link href="/">
					<Image
						src={logo}
						alt="logo Orange Henko"
						width={"auto"}
						height={75}
					/>
				</Link>
				<MenuLinks />
				<div className="flex items-center gap-2 xl:gap-4">
					<Link
						href="/cadeaux"
						className={`${bgbutton} py-3 px-4 text-white rounded-lg`}
					>
						OFFRIR UNE CARTE CADEAU
					</Link>
					<Link href="/panier" aria-label="cliquer pour accéder au panier">
						<div className="relative inline-block">
							<FaBasketShopping
								className="text-2xl text-black"
								alt="panier"
								aria-label="Cliquer pour accéder au panier"
							/>
							{cartCount > 0 && (
								<span className="absolute -top-2 -right-2 bg-darkorange text-white rounded-full text-xs px-1.5 py-0.5">
									{cartCount}
								</span>
							)}
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavBar;
