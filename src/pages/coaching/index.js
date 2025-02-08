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
import Planning from "@/components/Planning";
import Tarifs from "@/components/Tarifs";

const tarifscoaching = [
	{ label: "La séance", price: "45€" },
	{ label: "10 séances", price: "350€" },
	{ label: "1 x semaine", price: "140€/mois" },
	{ label: "2 x semaine", price: "240€/mois" },
	{ label: "3 x semaine", price: "300€/mois" },
	{ label: "Séance d’essai", price: "25€" },
];

function Coaching() {
	return (
		<>
			<Head>
				<title>Henko Coaching - Sport, bien-être et récupération</title>
				<meta name="description" content="Henko Coaching" />
				<meta
					name="keywords"
					content="coaching sportif, entraînement personnalisé, sport, fitness, performance, objectifs"
				/>
				{/* Facebook */}
				<meta
					property="og:title"
					content="Henko Coaching - Coaching Sportif - Atteignez vos Objectifs"
				/>
				<meta
					property="og:description"
					content="Des séances de coaching sportif adaptées à vos besoins pour améliorer votre condition physique et atteindre vos objectifs."
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
					<Tarifs tarifs={tarifscoaching} />
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
