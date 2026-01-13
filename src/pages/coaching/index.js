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
import { TEXTETARIFS_QUERY, TARIFSCOACHING_QUERY, SEO_QUERY , COACHINGPRESENTATION_QUERY, COACHING_MAIN_QUERY, PLANNING_QUERY, FAQ_QUERY, SEANCE_QUERY} from "@/queries/coachingqueries";
import { PortableText } from "next-sanity";

export async function getServerSideProps() {

	try {
		const [tarifs, seo, coachingpresentation, coachingpourquoi, planning, faq, seancesteps,textetarifs] = await Promise.all([
			client.fetch(TARIFSCOACHING_QUERY),
			client.fetch(SEO_QUERY),
			client.fetch(COACHINGPRESENTATION_QUERY),
			client.fetch(COACHING_MAIN_QUERY),
			client.fetch(PLANNING_QUERY), 
			client.fetch(FAQ_QUERY), 
client.fetch(SEANCE_QUERY),
client.fetch(TEXTETARIFS_QUERY)
		]);

		return {
			props: {
				tarifs,
				seo,
				coachingpresentation, 
				coachingpourquoi, planning, faq, seancesteps, textetarifs
			},
		};
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		return {
			props: {
				tarifs: [],
				seo: null,
				coachingpresentation:null, 
				coachingpourquoi:null, 
				planning:null, 
				faq:{}, seancesteps : [], 
				textetarifs : []
			},
		};
	}
}

function Coaching({ tarifs, seo , coachingpresentation, coachingpourquoi, planning, faq, seancesteps, textetarifs}) {

	

	return (
		<>
			<Head>
				<title>Henko Coaching - Sport, bien-être et récupération</title>
				<meta name="keywords" content={seo?.keywords || "coaching sportif, Mimizan, sport bien-être"} />
<meta property="og:title" content={seo?.title || "Henko Coaching - Coaching personnalisé"} />
<meta property="og:description" content={seo?.description || "Coaching sur mesure à Mimizan"} />

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
				<CoachingHeader coachingpresentation={coachingpresentation}/>
				<MainCoaching coachingpourquoi={coachingpourquoi} planning={planning}/>
				<Seance seancesteps={seancesteps}  coachingpresentation={coachingpresentation}/>
				<WaveOrange />
			</div>
			<div>
				<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20 mb-10">
					<span className="text-3xl z-10">LES TARIFS</span>
					<div className="w-[8rem] h-3 bg-darkorange -mt-3 -z-1" />
				</h2>
				<div className="bg-darkorange lg:px-10 mx-auto py-10">
					<Tarifs tarifs={tarifs} />
					  <div className="prose max-w-none px-10 text-black">
     
      <div className="max-w-7xl mx-auto">
			<PortableText value={textetarifs?.contenu} />
			</div>
    </div>
				</div>
			</div>
			<FAQ faq={faq}/>
		</>
	);
}

export default Coaching;
