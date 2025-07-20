import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import Head from "next/head";
import HeadPages from "@/components/HeadPages";
import logoOrange from "@images/logoHenkoOrange.svg";
import NavBar from "@/components/NavBar";
import WaveSable from "@/components/WaveSable";
import WaveOrange from "@/components/WaveOrange";
import Image from "next/image";
import acceslibre from "@images/acceslibre.jpg";
import FormulesLibres from "@/components/FormulesLibres";
import ButtonBlack from "@/components/ButtonBlack";
import espacepro from "@images/espacepro-salle.webp";

import Planning from "@/components/Planning";
import Tarifs from "@/components/Tarifs";
import { PortableText } from "next-sanity";

import { PLANNING_QUERY} from "@/queries/coachingqueries";
import { ACCESLIBRE_SEO_QUERY, TARIFSACCESLIBRE_QUERY, TEXTETARIFSACCESLIBRE_QUERY, TEXTE_ACCES_LIBRE_QUERY, PHOTO_BANDEAU_ACCES_LIBRE_QUERY } from "@/queries/acceslibrequeries";





export async function getServerSideProps() {
	try {

const [seolibre, planninglibre, acceslibretarifs, textetarifacceslibre, contenutexteacceslibre, photobandeauacceslibre] = await Promise.all([
			client.fetch(ACCESLIBRE_SEO_QUERY),
		client.fetch(PLANNING_QUERY),
		client.fetch(TARIFSACCESLIBRE_QUERY), 
		client.fetch(TEXTETARIFSACCESLIBRE_QUERY), 
		client.fetch(TEXTE_ACCES_LIBRE_QUERY), 
		client.fetch(PHOTO_BANDEAU_ACCES_LIBRE_QUERY)
		]);
	
		return {
			props: {
				seolibre,
				planninglibre, 
				acceslibretarifs, 
				textetarifacceslibre, 
				contenutexteacceslibre, 
				photobandeauacceslibre
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				seolibre: null,
				planninglibre : {},
				acceslibretarifs : [], 
				textetarifacceslibre : {}, 
				contenutexteacceslibre : [], 
				photobandeauacceslibre: {}
			},
		};
	}
}

function AccesLibre({ seolibre, planninglibre, acceslibretarifs,textetarifacceslibre,  contenutexteacceslibre, photobandeauacceslibre }) {


	return (
		<>
			<Head>
				<title>Henko Coaching - Sport, bien-être et récupération</title>
				<meta name="description" content={seolibre.description} />
				<meta name="keywords" content={seolibre.keywords} />
				<meta property="og:title" content={seolibre.title} />
				<meta property="og:description" content={seolibre.description} />
				<meta
					property="og:url"
					content="https://www.henkocoachingmimizan.fr/acceslibre"
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
			<div className="mb-20">
				<NavBar logo={logoOrange} bgbutton="bg-darkorange" />
				<div className="flex flex-col gap-20 mb-20 ">
					<div className="flex flex-col gap-10 ">
						<HeadPages title="ACCES LIBRE" />
						<WaveOrange />
					</div>
					<div
  className="bg-white bg-opacity-75 -inset-10 lg:-inset-20 flex flex-col gap-20 bg-center bg-cover min-h-[30rem]"
  style={{
    backgroundImage: `url(${photobandeauacceslibre?.imageUrl})`,
  }}
  aria-label={photobandeauacceslibre?.alt}
/>
					<div className=" flex flex-col gap-10 px-10 lg:px-40">
						{/* <h3 className="font-tanker text-center text-2xl">
							DISPO A PARTIR DE FEVRIER 2025
						</h3> */}
						<PortableText value={contenutexteacceslibre.contenu} />
					</div>
					<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20 -mb-10">
						<span className="text-3xl z-10">LES TARIFS</span>
						<div className="w-[8rem] h-3 bg-darkorange -mt-3 -z-1" />
					</h2>
					<div className="bg-darkorange lg:px-10  pb-10">
						<Tarifs tarifs={acceslibretarifs} />
						<div className="px-10">
						 <PortableText value={textetarifacceslibre.text} />
						</div>
					</div>
					{/* <FormulesLibres /> */}
					<div className="self-center -mt-10">
						<ButtonBlack
							title="JE SOUHAITE AVOIR PLUS D'INFOS"
							link="/#contact"
							width="w-[15rem] md:w-[20rem]"
						/>
					</div>
					<div className=" px-10 lg:px-20">
						<div className="flex flex-col gap-2">
							<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
								<span className="text-3xl z-10 ">
									QUAND EST-CE QUE JE PEUX M’ENTRAINER EN ACCES LIBRE?
								</span>
								<div className="w-[12rem] h-3  bg-darkorange -mt-3 -z-1" />
							</h2>
						</div>
						<Planning planning={planninglibre} page="libre" />
					</div>
				</div>

				<WaveOrange />
			</div>
		</>
	);
}

export default AccesLibre;
