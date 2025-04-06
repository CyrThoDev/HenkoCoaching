import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import CoachingHeader from "@/components/CoachingHeader";
import Seance from "@/components/Seance";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonBlack from "@/components/ButtonBlack";
import MainCoaching from "@/components/MainCoaching";
import logoOrange from "@images/logoHenkoOrange.svg";
import WaveOrange from "@/components/WaveOrange";
import HeadPages from "@/components/HeadPages";
import FAQ from "@/components/FAQ";
import Formules from "@/components/Formules";
// import Planning from "@/components/Planning";
import Tarifs from "@/components/Tarifs";

const TARIFSCOACHING_QUERY = defineQuery(`
  *[_type=="tarifs"] {
    id, label, price
  }`);

const SEO_QUERY = defineQuery(`
		*[_type == "pageSeo" && slug == "coaching"][0]{
  slug,
  title,
  description,
  keywords,
  "ogImageUrl": ogImage.asset->url
}
	`);

export async function getServerSideProps() {
	try {
		const [tarifs, seo] = await Promise.all([
			client.fetch(TARIFSCOACHING_QUERY),
			client.fetch(SEO_QUERY),
		]);

		return {
			props: {
				tarifs,
				seo,
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				tarifs: [],
				seo: null,
			},
		};
	}
}

function Coaching({ tarifs, seo }) {
	return (
		<>
			<Head>
				<title>Henko Coaching - Sport, bien-être et récupération</title>
				<meta name="description" content={seo.description} />
				<meta name="keywords" content={seo.keywords} />
				{/* Facebook */}
				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.description} />
				<meta
					property="og:url"
					content="https://www.henkocoachingmimizan.fr/coaching"
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
			<NavBar logo={logoOrange} bgbutton="bg-darkorange" />
			<div className="px-10 lg:px-20 flex flex-col gap-20">
				<div className="flex flex-col gap-10">
					<HeadPages title="COACHING EN SOLO OU EN DUO" />
					<WaveOrange />
				</div>
				<CoachingHeader />
				<MainCoaching />
				<Seance />
				<WaveOrange />
			</div>
			<div>
				<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20 mb-10">
					<span className="text-3xl z-10">LES TARIFS</span>
					<div className="w-[8rem] h-3 bg-darkorange -mt-3 -z-1" />
				</h2>
				<div className="bg-darkorange lg:px-10 mx-auto pb-10">
					<Tarifs tarifs={tarifs} />
					<p className="px-10">
						Pour des résultats durables en coaching sportif privé, un engagement
						<strong> d&#39;au moins 4 mois est nécessaire</strong>. Cela permet
						au corps de s&#39;adapter, d&#39;installer de nouvelles habitudes et
						de progresser efficacement. Cette période permet également au coach
						d&#39;ajuster les séances à vos objectifs pour un changement
						durable.
					</p>
				</div>
			</div>
			<FAQ />
		</>
	);
}

export default Coaching;
