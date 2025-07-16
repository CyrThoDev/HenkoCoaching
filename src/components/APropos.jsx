import Link from "next/link";
import Image from "next/image";

import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/client";

const APropos = ({presentationaccueil}) => {
	
	return (
		<div className="px-10 lg:px-20 flex flex-col gap-8">
			<h2 className="relative flex flex-col text-lg md:text-xl font-tanker">
				<span className=" text-3xl z-10">{presentationaccueil.titre || "Présentation de la coach"}</span>
				<div className="w-[12rem] h-3 bg-darkorange -mt-3 -z-1" />
			</h2>
			<div className=" flex flex-col md:flex-row gap-10  justify-between items-center">
				<div className="flex flex-col gap-4 basis-4/5 ">
					<p className="font-pinyon text-4xl">Jessica Perestrelo</p>
				<PortableText value={presentationaccueil.contenu} />
				</div>
				<div className="basis-2/5">
				{presentationaccueil.image && (
					<Image
					src={urlFor(presentationaccueil.image).width(500).height(500).url()}
						width={500}
						height={500}
						className="w-auto shadow-perso shadow-darkorange rounded-sm"
						alt="Photo d'un sportive à la montagne"
					/>
				)}
				</div>
			</div>
		</div>
	);
};

export default APropos;
