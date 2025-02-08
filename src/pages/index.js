import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import logoOrange from "../../public/images/logoHenkoOrange.svg";

export default function Home() {
	return (
		<>
			<Head>
				<title>Henko Coaching - Sport, bien-être et récupération</title>
				<meta name="description" content="Henko Coaching" />
				<meta
					name="keywords"
					content="coaching sportif, massages, bien-être, relaxation, fitness, entraînement"
				/>
				{/* Facebook */}
				<meta
					property="og:title"
					content="Henko Coaching - Sport, bien-être et récupération"
				/>
				<meta
					property="og:description"
					content="Coaching sportif et massages bien-être pour améliorer votre santé physique et mentale."
				/>
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
