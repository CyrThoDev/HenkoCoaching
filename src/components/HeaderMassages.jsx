import Image from "next/image";
import ButtonBlack from "./ButtonBlack";
import ButtonSable from "./ButtonSable";
import { PortableText } from "next-sanity";

const HeaderMassages = ({ photosmassages, textemassages }) => {
	
	if (!photosmassages || !photosmassages.photos?.length || !textemassages) return null;


	return (
		<div className="px-10 lg:px-20 flex flex-col gap-10">
			{/* Affichage dynamique des photos */}
			<div className="lg:px-40 grid grid-cols-2 lg:grid-cols-4 gap-4">
				{photosmassages.photos.map((photo, index) => (
					<Image
						key={index}
						src={photo.asset.url}
						alt={photo.alt || `Photo massage ${index + 1}`}
						width={400}
						height={300}
						className={`rounded-sm ${
							index === 1 ? "mt-20" : ""
						} ${index === 2 ? "hidden lg:block lg:mt-8" : ""} ${
							index === 3 ? "hidden lg:block" : ""
						}`}
					/>
				))}
			</div>

			{/* Texte descriptif */}
			<div className="flex flex-col gap-10 lg:px-40">
    
      <div className="prose max-w-none  text-black">
        <PortableText value={textemassages.contenu} />
      </div>

			</div>

			{/* Boutons */}
			<div className="flex flex-col md:flex-row gap-10 justify-center items-center">
				<ButtonSable
					title="JE RESERVE UN MASSAGE"
					width="w-[15rem] lg:w-[18rem]"
					link="/massages/#prestations"
				/>
				<ButtonBlack
					title="J'OFFRE UN MASSAGE"
					width="w-[15rem] lg:w-[18rem]"
					link="/cadeaux"
				/>
			</div>
		</div>
	);
};

export default HeaderMassages;
