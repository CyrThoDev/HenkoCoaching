import Image from "next/image";
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
				<meta name="keywords" content="" />
				<meta
					property="og:title"
					content="Bienvenue sur le site de Henko Coaching"
				/>
				<meta property="og:description" content="" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://henkocoachingmimizan.fr/images/LOGO-4.png"
				/>
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:alt" content="Logo Henko Coaching" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* <meta name="robots" content="index, follow" /> */}
			</Head>
			<NavBar logo={logoOrange} bgbutton="bg-darkorange" />
			<HomePage />
		</>
	);
}
