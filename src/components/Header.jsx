import Image from "next/image";
import Link from "next/link";
import ButtonOrange from "./ButtonOrange";
import ButtonBlack from "./ButtonBlack";

function Header({ accueilheader }) {
	if (!accueilheader) return null;

	const { titre, sousTitre, bouton1, bouton2 } = accueilheader;

	// On découpe le titre en plusieurs lignes (saut de ligne dans Sanity = \n)
	const lignesTitre = titre?.split("\n") || [];

	return (
		<div>
			<div
				className="
					bg-[url('/images/HomePage.jpg')] 
					lg:bg-[url('/images/HomePage.jpg')] 
					md:bg-[url('/images/HomePage.jpg')] 
					bg-no-repeat bg-cover bg-center h-[80vh] lg:h-[90vh]
				"
			>
				<div className="px-10 md:px-20 flex flex-col justify-center gap-4 lg:gap-10 h-full">
					<h1 className="flex flex-col gap-2 md:gap-4 lg:gap-4 text-4xl min-[375px]:text-5xl md:text-[64px] lg:text-[5rem] font-tanker text-black">
						{lignesTitre.map((ligne, i) => (
							<span key={i}>{ligne}</span>
						))}
					</h1>

					{Boolean(sousTitre) && (
						<p className="font-poppins text-2xl">{sousTitre}</p>
					)}

					<div className="flex flex-col md:flex-row gap-4 font-poppins">
						{bouton1?.label && bouton1?.url && (
							<ButtonOrange
								title={bouton1.label}
								link={bouton1.url}
								target="_blank"
								width="w-[18rem]"
							/>
						)}

						{bouton2?.label && bouton2?.url && (
							<ButtonBlack
								title={bouton2.label}
								link={bouton2.url}
								target="_blank"
								width="w-[18rem]"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
