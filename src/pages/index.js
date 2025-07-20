import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import Head from "next/head";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import logoOrange from "../../public/images/logoHenkoOrange.svg";
import { QUERY_ICONS, SEO_QUERY, presentationQuery, resumeQuery } from "@/queries/accueilqueries";

export async function getServerSideProps() {
	try {
		const [seoaccueil, iconaccueil,resumeaccueil, presentationaccueil] = await Promise.all([
    client.fetch(SEO_QUERY),
    client.fetch(QUERY_ICONS),
		client.fetch(resumeQuery),
		client.fetch(presentationQuery),
  ]);

		return {
			props: {
				seoaccueil,
				iconaccueil,
				resumeaccueil,
				presentationaccueil
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				seoaccueil: null,
				iconaccueil: null,
				resumeaccueil :null,
				presentationaccueil :null,

			},
		};
	}
}

export default function Home({ seoaccueil, iconaccueil , resumeaccueil, presentationaccueil}) {


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
			<HomePage iconaccueil={iconaccueil} resumeaccueil={resumeaccueil} presentationaccueil={presentationaccueil}/>
		</>
	);
}
