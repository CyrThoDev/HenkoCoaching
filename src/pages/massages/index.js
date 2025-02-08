import Head from "next/head";
import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import logoSable from "@images//logoSableHenko.webp";
import WaveSable from "@/components/WaveSable";
import Prestations from "@/components/Prestations";
import HeaderMassages from "@/components/HeaderMassages";
import Image from "next/image";
import basdepagemassage from "@images/basdepagemassage.jpg";

function Massages() {
	return (
		<>
			<Head>
				<title>Massages Bien-être - Relaxation et Récupération</title>
				<meta name="description" content="Henko Coaching" />
				<meta
					name="keywords"
					content="massages, relaxation, bien-être, détente, récupération, stress, soin du corp"
				/>
				{/* Facebook */}
				<meta
					property="og:title"
					content="Henko Coaching - Massages Bien-être - Relaxation et Récupération"
				/>
				<meta
					property="og:description"
					content="Profitez d'un moment de détente avec nos massages bien-être. Relaxation, récupération musculaire et anti-stress."
				/>
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
