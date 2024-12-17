import Link from "next/link";
import Calendly from "../components/Calendly";

const Prestations = () => {
	const prestations = [
		{
			id: 1,
			title: "Massage suédois relaxant",
			description:
				"Massage profond relaxant à action drainante, dénoue les tensions musculaires et nerveuses du corps et de l’esprit, relaxation profonde.",
			bienfaits: [
				"Lâcher prise",
				"Reconnexion corps et esprit",
				"Détente musculaire",
			],
			prix: "Zone 30 MIN 40€ | Corps entier 60 MIN 65€",
			calendlyUrl: "https://calendly.com/your-calendar-link-1",
			button: "RESERVER",
		},
		{
			id: 2,
			title: "Massage suédois sportif",
			description:
				"Le massage suédois sportif réduit les tensions et les microdéchirures, prévenant ainsi courbatures et crampes. Il améliore la circulation veineuse et aide à éliminer les toxines.",
			details:
				"Sportifs confirmés ou non, personnes exerçant un métier avec des contraintes physiques importantes, personnes stressées ou simplement adeptes des massages en profondeur.",
			bienfaits: [
				"Soulager la sensation de fatigue",
				"Favoriser la récupération en éliminant les toxines accumulées",
				"Soulagement des articulations",
				"Lâcher prise",
			],
			prix: "Zone 30 MIN 45€ | Corps entier 60 MIN 70€",
			calendlyUrl: "https://calendly.com/your-calendar-link-2",
			button: "RESERVER",
		},
		{
			id: 3,
			title: "Massage avec ventouses",
			description:
				"Les ventouses permettent de traiter rapidement des zones extrêmement nouées. Elles favorisent la circulation sanguine et ainsi la récupération musculaire.",
			details:
				"Ce soin consiste à la pose de ventouses sur des endroits spécifiques du corps.",
			bienfaits: [
				"Traitement des douleurs musculaires et articulaires",
				"Récupération favorisée",
				"Amélioration de la circulation sanguine et lymphatique",
			],
			prix: "Prestation à venir pour 2025",
			calendlyUrl: "https://calendly.com/your-calendar-link-3",
			button: "ME CONTACTER",
		},
		{
			id: 4,
			title: "Massage spécifique 100% personnalisé",
			description:
				"Type, zones et durée personnalisés selon vos besoins. Massage conçu sur devis.",
			prix: "Sur devis",
			calendlyUrl: "https://calendly.com/your-calendar-link-4",
			button: "ME CONTACTER",
		},
	];

	return (
		<section className="bg-sand px-10 lg:px-20" id="prestations">
			<div className="mx-auto">
				<h2 className="font-tanker text-2xl font-bold text-black pt-10">
					LES PRESTATIONS ET TARIFS
				</h2>
				<div className="flex flex-col  pb-10">
					{prestations.map((prestation) => (
						<div key={prestation.id} className="border-b border-black pb-6">
							<div className="flex flex-col lg:flex-row py-10 gap-8">
								<div className="lg:basis-2/5 lg:pr-20">
									<h3 className="text-lg font-bold text-black mb-2">
										{prestation.title}
									</h3>
									<p className="text-black mb-2">{prestation.description}</p>
									{prestation.details && (
										<p className="text-black mb-2">{prestation.details}</p>
									)}
								</div>

								<div className="lg:basis-2/5 flex flex-col gap-8">
									{prestation.bienfaits ? (
										<>
											<span className="font-semibold">Les bienfaits:</span>
											<ul className="text-black list-disc list-inside mb-2">
												{prestation.bienfaits.map((bienfait, index) => (
													<li key={index}>{bienfait}</li>
												))}
											</ul>
										</>
									) : (
										""
									)}
									<p className="text-black font-semibold">{prestation.prix}</p>
								</div>
								<div className="lg:basis-1/5 flex justify-center items-center">
									{prestation.button === "RESERVER" ? (
										<Calendly
											url={prestation.calendlyUrl}
											title={prestation.button}
											color="bg-black"
											width="w-[18rem]"
										/>
									) : (
										<Link
											href="/#contact"
											className="bg-black text-white text-center rounded-md p-3 hover:bg-opacity-80 w-[18rem] block"
										>
											{prestation.button}
										</Link>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Prestations;
