import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import logoSable from "@images//logoSableHenko.webp";
import WaveSable from "@/components/WaveSable";
import Prestations from "@/components/Prestations";
import HeaderMassages from "@/components/HeaderMassages";
import Image from "next/image";
import basdepagemassage from "@images/basdepagemassage.jpg";

import { SEO_QUERY, MASSAGES_QUERY, PHOTOS_MASSAGES_QUERY, TEXTE_MASSAGES_QUERY} from "@/queries/massagequeries";


export async function getServerSideProps() {
	try {
		const [massages, seomassages,photosmassages, textemassages] = await Promise.all([
			client.fetch(MASSAGES_QUERY),
			client.fetch(SEO_QUERY),
			client.fetch(PHOTOS_MASSAGES_QUERY),
			client.fetch(TEXTE_MASSAGES_QUERY)
		]);

		return {
			props: {
				seomassages,
				massages,
				photosmassages, 
				textemassages
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				seomassages: null,
				massage: [],
				photosmassages : {}, 
				textemassages : {}
			},
		};
	}
}

function Massages({ seomassages, massages , photosmassages, textemassages}) {
	


	const prestations = massages.sort((a, b) => a.order - b.order);

	return (
		<>
			<Head>
				<title>Massages Bien-être - Relaxation et Récupération</title>
				<meta name="description" content={seomassages.description} />
				<meta name="keywords" content={seomassages.keywords} />
				{/* Facebook */}
				<meta property="og:title" content={seomassages.title} />
				<meta property="og:description" content={seomassages.description} />
				<meta
					property="og:url"
					content="https://www.henkocoachingmimizan.fr/massages"
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
			<NavBar logo={logoSable} bgbutton="bg-sand" />
			<div className="flex flex-col gap-10 mb-10">
				<HeadPages title="MASSAGES ET RECUPERATION" />
				<WaveSable />
				<HeaderMassages photosmassages={photosmassages} textemassages={textemassages} />
				<Prestations prestations={prestations}  />
				<Image
					src={basdepagemassage}
					width={600}
					height={"auto"}
					className="-mt-10 lg:m-auto"
					alt="Photo d'un massage"
				/>
				<WaveSable />
			</div>
		</>
	);
}

export default Massages;
