import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import Head from "next/head";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import logoOrange from "../../public/images/logoHenkoOrange.svg";

const SEO_QUERY = defineQuery(`
	*[_type == "pageSeo" && slug == "accueil"][0]{
		slug,
		title,
		description,
		keywords,
		"ogImageUrl": ogImage.asset->url
	}
		`);

export async function getServerSideProps() {
	try {
		const seoaccueil = await client.fetch(SEO_QUERY);

		return {
			props: {
				seoaccueil,
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				seoaccueil: null,
			},
		};
	}
}

export default function Home({ seoaccueil }) {
	return (
		<>
			<Head>
				<title>Henko Coaching - Sport, bien-être et récupération</title>
				<meta name="description" content={seoaccueil.description} />
				<meta name="keywords" content={seoaccueil.keywords} />
				{/* Facebook */}
				<meta property="og:title" content={seoaccueil.title} />
				<meta property="og:description" content={seoaccueil.description} />
				<meta property="og:url" content="https://www.henkocoachingmimizan.fr" />
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
			<NavBar logo={logoOrange} bgbutton="bg-darkorange" />
			<HomePage />
		</>
	);
}
