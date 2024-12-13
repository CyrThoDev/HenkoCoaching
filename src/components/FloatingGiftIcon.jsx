import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGift } from "react-icons/fa6";

const FloatingGiftIcon = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="fixed bottom-4 right-4 z-50"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link href="/cadeaux">
				<div className="relative cursor-pointer">
					{/* Icône cadeau */}
					<div className="w-12 h-12 bg-darkorange rounded-full flex items-center justify-center shadow-lg">
						<span className="text-white text-xl">
							<FaGift />
						</span>
					</div>

					{/* Contenu affiché au survol */}
					{isHovered && (
						<div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-md p-4 w-64">
							<Image
								src="/path/to/your/image.jpg"
								alt="Description de l'image"
								width={250}
								height={150}
								className="rounded-md"
							/>
							<p className="mt-2 text-gray-800 text-sm">
								Offrez un cadeau unique à vos proches ! Cliquez ici pour
								découvrir plus.
							</p>
						</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default FloatingGiftIcon;
