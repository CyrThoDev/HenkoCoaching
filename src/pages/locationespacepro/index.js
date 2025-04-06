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

const SEO_QUERY = defineQuery(`
	*[_type == "pageSeo" && slug == "locationespacepro"][0]{
		slug,
		title,
		description,
		keywords,
		"ogImageUrl": ogImage.asset->url
	}
		`);

export async function getServerSideProps() {
	try {
		const seolocation = await client.fetch(SEO_QUERY);

		return {
			props: {
				seolocation,
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				seolocation: null,
			},
		};
	}
}

function LocationEspacePro({ seolocation }) {
	return (
		<>
			<Head>
				<title>Henko Coaching - Sport, bien-être et récupération</title>
				<meta name="description" content={seolocation.description} />
				<meta name="keywords" content={seolocation.keywords} />
				{/* Facebook */}
				<meta property="og:title" content={seolocation.title} />
				<meta property="og:description" content={seolocation.description} />
				<meta
					property="og:url"
					content="https://www.henkocoachingmimizan.fr/locationespacepro"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://www.henkocoachingmimizan.fr/images/HomePagereseaux.jpg"
				/>
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:alt" content="Logo Henko Coaching" />
				<meta name="robots" content="index, follow" />
			</Head>
			<div className="flex flex-col gap-20 ">
				<div className="bg-white bg-opacity-75 flex flex-col gap-20 bg-center bg-cover bg-[url('/images/location.webp')] min-h-[30rem]">
					<NavBar logo={logoSable} bgbutton="bg-sand" />
					<HeadPages title="LOCATION ESPACE PRO" />
					<WaveSable />
				</div>

				<div className="flex flex-col md:flex-row gap-10 px-10 lg:px-20 items-center">
					<div className="flex flex-col gap-10 ">
						<p>
							Le local HENKO COACHING peut être disponible à la location
							ponctuellement sur demande et sur devis pour les professionnels du
							même domaine d’activité sport & bien-être (yoga, pilâtes,
							massages, réflexologie, etc.)
						</p>
						<p>Demi-journée / journée / week-end</p>
						<p>
							Vous pouvez organiser des stages, des cours individuels ou
							collectifs (6 pers max)
						</p>
						<p>N’hésitez pas !</p>
					</div>

					<div className=" grid grid-col-1 lg:grid-cols-2 gap-4">
						<Image
							src={espaceprosalle}
							width={"auto"}
							height={"auto"}
							className=" shadow-persoreverse shadow-sand  rounded-sm "
							alt="Salle de sport"
						/>
						<Image
							src={espacepromassage}
							width={"auto"}
							height={"auto"}
							className=" shadow-perso shadow-sand  rounded-sm mt-18 lg:mt-20 "
							alt="Salle de sport"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-0">
					<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20">
						<span className="text-3xl z-10">
							Je souhaite avoir plus d&#39;informations
						</span>
						<div className="w-[12rem] h-3  bg-sand -mt-3 -z-1" />
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
