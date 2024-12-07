import Image from "next/image";
import Link from "next/link";
import { FaBasketShopping } from "react-icons/fa6";

function NavBar() {
	return (
		<div className="flex flex-row justify-between px-20 py-4 ">
			<div className="flex flex-row font-poppins gap-12 items-center">
				<Link href="/">
					<Image
						src="/images/logoOrangeHenko.svg"
						alt="Logo Orange Henko"
						width={100}
						height={100}
					/>
				</Link>
				<div className="flex flex-row gap-8">
					<Link href="/coaching">COACHING</Link>
					<Link href="/massages">MASSAGES</Link>
					<Link href="/acceslibre">ACCES LIBRE</Link>
					<Link href="/locationespacepro">LOCATION ESPACE PRO</Link>
					<Link href="/#contact">CONTACT</Link>
				</div>
			</div>
			<div className="flex flex-row gap-8 items-center">
				<Link href="/" className="bg-black p-4 text-white rounded-lg">
					OFFRIR UNE CARTE CADEAU
				</Link>
				<Link href="/" aria-label="cliquer pour accéder au panier">
					<FaBasketShopping
						alt="panier"
						aria-label="Cliquer pour accéder au panier"
						className="text-2xl"
					/>
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
