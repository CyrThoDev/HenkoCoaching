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
						<strong> d'au moins 4 mois est nécessaire</strong>. Cela permet au
						corps de s'adapter, d'installer de nouvelles habitudes et de
						progresser efficacement. Cette périoe permet également au coach
						d'ajuster les séances à vos objectifs pour un changement durable.
					</p>
				</div>
				{/* <div className="bg-darkorange lg:px-20">
					<div className=" mx-auto p-6  text-white ">
				
						<div className="mt-6 space-y-4">
							
							<div className="flex justify-between border-b border-white/50 pb-2">
								<span>La séance</span>
								<span className="font-semibold">45€</span>
							</div>

							<div className="flex justify-between border-b border-white/50 pb-2">
								<span>10 séances</span>
								<span className="font-semibold">350€</span>
							</div>

							<div className="flex justify-between border-b border-white/50 pb-2">
								<span>1 x semaine</span>
								<span className="font-semibold">140€/mois</span>
							</div>

							<div className="flex justify-between border-b border-white/50 pb-2">
								<span>2 x semaine</span>
								<span className="font-semibold">240€/mois</span>
							</div>

							<div className="flex justify-between border-b border-white/50 pb-2">
								<span>3 x semaine</span>
								<span className="font-semibold">300€/mois</span>
							</div>

							<div className="flex justify-between">
								<span>Séance d’essai</span>
								<span className="font-semibold">25€</span>
							</div>
						</div>
					</div>
				</div> */}
			</div>

			{/* <Formules /> */}
			<FAQ />
		</>
	);
}

export default Coaching;
