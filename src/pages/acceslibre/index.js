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

const tarifsacceslibre = [
	{ label: "Sans engagement", price: "49,99€" },
	{ label: "3 mois", price: "45€/mois" },
	{ label: "6 mois", price: "42,5€/mois" },
	{ label: "12 mois", price: "39,99€/mois" },
	{ label: "1,2 ou 3 semaines", price: "à partir de 70€" },
	{ label: "1 jour", price: "10€" },
];

const SEO_QUERY = defineQuery(`
*[_type == "pageSeo" && slug == "acceslibre"][0]{
  slug,
  title,
  description,
  keywords,
  "ogImageUrl": ogImage.asset->url
}
	`);

export async function getServerSideProps() {
	try {
		const seolibre = await client.fetch(SEO_QUERY);

		return {
			props: {
				seolibre,
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				seolibre: null,
			},
		};
	}
}

function AccesLibre({ seolibre }) {
	return (
		<>
			<Head>
				<title>Henko Coaching - Sport, bien-être et récupération</title>
				<meta name="description" content={seolibre.description} />
				<meta name="keywords" content={seolibre.keywords} />
				{/* Facebook */}
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
					<div className="bg-white bg-opacity-75 -inset-10 lg:-inset-20 flex flex-col gap-20 bg-center bg-cover bg-[url('/images/acceslibre.webp')] min-h-[30rem]" />
					<div className=" flex flex-col gap-10 px-10 lg:px-40">
						{/* <h3 className="font-tanker text-center text-2xl">
							DISPO A PARTIR DE FEVRIER 2025
						</h3> */}
						<p>
							Vous avez besoin d’accéder à une salle de sport à Mimizan plage
							pendant vos vacances ou même toute l’année et vous n’avez pas
							besoin de coach parce que vous avez déjà assez d’expérience pour
							pratiquer en autonomie et surtout en sécurité avec des poids
							libres, vous avez déjà votre programmation ou en souhaitez une en
							supplément de votre accès.
						</p>
						<p>
							Pour un bon déroulement des séances, cet espace d’environ 40 m2
							avec du matériel limité ne peut pas accueillir un nombre important
							de personnes en même temps. C’est pour cela que l’accès libre est
							limité à 3 personnes en même temps par créneau d’environ 1h30.{" "}
						</p>
						<p>
							<strong>10 personnes au total</strong> bénéficieront d’un pass
							permettant d’accéder librement à la salle en dehors des heures de
							coaching et massages. Une réservation de créneau sera nécessaire
							pour filtrer les entrées/sorties et avoir une bonne gestion de
							l’espace et du matériel autant pour vous que pour moi.
						</p>
						<p>
							Pour bénéficier du pass & en fonction de vos objectifs il faudra
							justifier de votre niveau d’autonomie dans ce type de lieu. Ex :
							savoir utiliser une barre de 10/15/20 kgs à charger/décharger avec
							des plates, utilisation des dumbells et kettlebell & rangement du
							rameur. Il n’y a aucune machine guidée.
						</p>
						<p>
							Je vous demande de laisser l’endroit comme vous l’avez trouvé,
							dans son état de propreté et de rangement initial.{" "}
							<strong>Cet espace est sous vidéo surveillance</strong> pour
							vérifier que les accès soient bien respectés et éviter tout
							débordement ou risque d’insécurité.
						</p>
					</div>
					<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20 -mb-10">
						<span className="text-3xl z-10">LES TARIFS</span>
						<div className="w-[8rem] h-3 bg-darkorange -mt-3 -z-1" />
					</h2>
					<div className="bg-darkorange lg:px-10  pb-10">
						<Tarifs tarifs={tarifsacceslibre} />
						<p className="px-10">
							<strong>-50% </strong> pour les clients en coaching privé
							engagement 4 mois minimum
						</p>
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
						<Planning image={espacepro} page="libre" />
					</div>
				</div>

				<WaveOrange />
			</div>
		</>
	);
}

export default AccesLibre;
