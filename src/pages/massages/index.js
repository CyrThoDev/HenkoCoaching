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

const SEO_QUERY = defineQuery(`
	*[_type == "pageSeo" && slug == "massages"][0]{
		slug,
		title,
		description,
		keywords,
		"ogImageUrl": ogImage.asset->url
	}
		`);

export async function getServerSideProps() {
	try {
		const seomassages = await client.fetch(SEO_QUERY);

		return {
			props: {
				seomassages,
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				seomassages: null,
			},
		};
	}
}

function Massages({ seomassages }) {
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
				<HeaderMassages />
				<Prestations />
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
