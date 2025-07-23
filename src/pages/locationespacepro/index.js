import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import Head from "next/head";
import logoSable from "@images/logoSableHenko.webp";
import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import WaveSable from "@/components/WaveSable";
import Formulaire from "@/components/Formulaire";
import location from "../../../public/images/location.png";
import espaceprosalle from "@images/espacepro-salle.webp";
import espacepromassage from "@images/massage-espacepro.webp";
import Image from "next/image";
import { ESPACE_PRO_QUERY, SEO_QUERY } from "@/queries/espaceproqueries";
import { PortableText } from "next-sanity";


export async function getServerSideProps() {
	try {
		const [seolocation, espacepro] = await Promise.all([
			client.fetch(SEO_QUERY),
			client.fetch(ESPACE_PRO_QUERY),
		]);

		return {
			props: {
				seolocation,
				espacepro,
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des données :", error);
		return {
			props: {
				seolocation: null,
				espacepro: null,
			},
		};
	}
}


function LocationEspacePro({ seolocation, espacepro }) {
	return (
		<>
			<Head>
				<title>{seolocation?.title ?? "Henko Coaching"}</title>
				<meta name="description" content={seolocation?.description} />
				<meta name="keywords" content={seolocation?.keywords} />
				<meta property="og:title" content={seolocation?.title} />
				<meta property="og:description" content={seolocation?.description} />
				<meta property="og:url" content="https://www.henkocoachingmimizan.fr/locationespacepro" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={seolocation?.ogImageUrl} />
			</Head>

			<div className="flex flex-col gap-20">
				<div
					className="bg-white bg-opacity-75 flex flex-col gap-20 bg-center bg-cover min-h-[30rem]"
					style={{ backgroundImage: `url(${espacepro?.photoHeroUrl})` }}
				>
					<NavBar logo={logoSable} bgbutton="bg-sand" />
					<HeadPages title="LOCATION ESPACE PRO" />
					<WaveSable />
				</div>

				<div className="flex flex-col md:flex-row gap-10 px-10 lg:px-20 items-center">
					<div className="prose max-w-xl">
						<PortableText value={espacepro?.texte} />
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<Image
							src={espacepro?.photo1Url}
							width={600}
							height={400}
							className="shadow-persoreverse shadow-sand rounded-sm"
							alt={espacepro?.photo1Alt || "Photo 1"}
						/>
						<Image
							src={espacepro?.photo2Url}
							width={600}
							height={400}
							className="shadow-perso shadow-sand rounded-sm mt-10 lg:mt-20"
							alt={espacepro?.photo2Alt || "Photo 2"}
						/>
					</div>
				</div>

				<div className="flex flex-col gap-0">
					<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20">
						<span className="text-3xl z-10">Je souhaite avoir plus d'informations</span>
						<div className="w-[12rem] h-3 bg-sand -mt-3 -z-1" />
					</h2>
					<Formulaire
						bgColor="bg-white"
						labelColor="text-black"
						borderColor="border-gray-400"
					/>
				</div>

				<WaveSable />
				<span className="mb-10" />
			</div>
		</>
	);
}


export default LocationEspacePro;
