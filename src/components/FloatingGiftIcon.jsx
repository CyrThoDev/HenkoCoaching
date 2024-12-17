import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGift } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import cartecadeaurecto from "@images/cartecadeaurecto.png";

const FloatingGiftIcon = () => {
	const [isWindowOpen, setIsWindowOpen] = useState(false);

	const toggleWindow = () => {
		setIsWindowOpen(!isWindowOpen);
	};

	const closeWindow = () => {
		setIsWindowOpen(false);
	};

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{/* Icône cadeau */}
			<div className="relative cursor-pointer" onClick={toggleWindow}>
				<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
					<span className="text-gray text-xl">
						<FaGift />
					</span>
				</div>
			</div>

			{/* Fenêtre statique */}
			{isWindowOpen && (
				<div className="absolute bottom-20 right-0 bg-white shadow-lg rounded-md p-4 w-64">
					{/* Bouton pour fermer */}
					<div className="flex justify-end">
						<button
							type="button"
							onClick={closeWindow}
							className="text-gray-800 "
						>
							<FaTimes />
						</button>
					</div>
					{/* Contenu de la fenêtre */}
					<Link href="/cadeaux">
						<div className="cursor-pointer">
							<Image
								src={cartecadeaurecto}
								alt="Description de l'image"
								width={250}
								height={150}
								className="rounded-md mt-2"
							/>
							<p className="mt-2 text-gray-800 text-sm ">
								Offrez un cadeau unique à vos proches !
							</p>
							<p className="mt-2 text-gray-800 text-sm font-semibold">
								Cliquez ici pour découvrir plus.
							</p>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default FloatingGiftIcon;
