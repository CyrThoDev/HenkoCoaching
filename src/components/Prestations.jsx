import Link from "next/link";
import { useRef } from "react";
import Calendly from "../components/Calendly";
import Image from "next/image";
import massage4 from "@images/massage4.jpg";

const Prestations = () => {
	const dialogRef = useRef(null);
	const prestations = [
		{
			id: 1,
			title: "Massage suédois relaxant",
			description:
				"Le massage suédois relaxant est une technique de massage très populaire, idéale pour détendre en profondeur le corps tout en apaisant l'esprit. Il se compose de mouvements longs et fluides, de pétrissages, de frictions et de tapotements, réalisés à un rythme modéré pour favoriser la relaxation musculaire et améliorer la circulation sanguine. L’objectif principal est de réduire le stress, soulager les tensions musculaires et favoriser un bien-être général. Ce massage aide également à libérer les toxines tout en apportant une sensation de légèreté et de calme profond. Il est particulièrement recommandé pour ceux qui recherchent une détente totale et un moment de calme absolu.",
			prix1: "Zone -  30 min :  40€ ",
			prix2: "Corps entier -  60 min : 65€",
			calendlyUrl:
				"https://calendly.com/henkocoaching/massage-suedois?back=1&month=2025-01",
			button: "RESERVER",
		},
		{
			id: 2,
			title: "Massage suédois sportif",
			description:
				"Le massage suédois sportif est une variante du massage suédois classique, spécifiquement conçu pour répondre aux besoins des sportifs, avant ou après l'effort. Ce type de massage vise à préparer les muscles à l’exercice, à améliorer la performance et à accélérer la récupération. Il combine des techniques de pétrissage, de frictions profondes, de tapotements et d'étirements, qui ciblent les groupes musculaires sollicités par l'activité physique.",
			details:
				"Avant l'effort, il aide à échauffer les muscles et à augmenter la circulation sanguine, réduisant ainsi le risque de blessures. Après l'exercice, il permet de détendre les muscles, d'éliminer les tensions accumulées et de réduire les douleurs post-effort, tout en favorisant la récupération en optimisant l'élimination des déchets métaboliques (comme l'acide lactique). Ce massage est donc idéal pour les sportifs de tous niveaux, qu’ils pratiquent régulièrement ou occasionnellement, et contribue à maintenir la performance et la flexibilité.",

			prix1: "Zone -  30 min :  45€",
			prix2: "Corps entier -  60 min : 70€",
			calendlyUrl:
				"https://calendly.com/henkocoaching/massage-sportif?back=1&month=2025-01",
			button: "RESERVER",
		},
		{
			id: 3,
			title: "Massage avec ventouses",
			description:
				"Le massage ventouse, ou cupping, est une technique de thérapie manuelle ancestrale, utilisée pour stimuler la circulation sanguine, soulager les tensions musculaires et favoriser la détoxification du corps. Il consiste à appliquer des ventouses (généralement en verre, silicone ou plastique) sur la peau, créant ainsi un vide partiel qui attire la peau et les tissus sous-jacents vers l'intérieur de la ventouse. Ce phénomène génère une sorte de 'suction' qui active la circulation sanguine, aide à dissoudre les nœuds musculaires et favorise l'élimination des toxines.",
			details:
				"Les ventouses sont souvent posées sur des zones stratégiques du corps, comme le dos, les épaules ou les cuisses, pendant environ 10 à 15 minutes. Bien que cette pratique soit très appréciée des sportifs pour la récupération musculaire, elle est aussi utilisée pour traiter des problèmes tels que les douleurs chroniques, les tensions, l'anxiété, ou encore la cellulite. Les marques laissées par les ventouses (souvent de couleur rouge ou pourpre) sont temporaires et témoignent de la stimulation des vaisseaux sanguins sous la peau.",

			prix1: "Prestation à venir pour 2025",
			prix2: "",
			calendlyUrl: "https://calendly.com/your-calendar-link-3",
			button: "ME CONTACTER",
		},
		{
			id: 4,
			title: "Bottes de compression & pressothérapie",
			description:
				"C’est dispositif de récupération utilisé principalement dans le domaine sportif, mais également pour améliorer la circulation sanguine et traiter diverses problématiques de santé. Elles fonctionnent grâce à un système de compression graduée appliquée sur les jambes, généralement autour des cuisses, des mollets et des pieds. Les bottes de compression Compex utilisent des chambres d'air qui se gonflent et se dégonflent successivement, créant une pression ciblée sur les muscles et les tissus. Ce processus est conçu pour imiter les effets d'un massage profond en favorisant la circulation sanguine et lymphatique. La compression progressive aide à éliminer les déchets métaboliques (comme l'acide lactique) accumulés dans les muscles après un effort, à réduire les œdèmes (gonflements) et à soulager les tensions musculaires.",

			details:
				"Les bottes de compression Compex sont un excellent complément aux méthodes de récupération traditionnelles, comme les massages ou l'étirement, en offrant une approche technologique et ciblée pour améliorer la circulation et réduire la fatigue musculaire.",
			prix1: "20 min : 30€ ",
			prix2: "",
			calendlyUrl:
				"https://calendly.com/henkocoaching/pressotherapie?back=1&month=2025-01",
			button: "RESERVER",
		},
		{
			id: 5,
			title: "Massage spécifique 100% personnalisé",
			description:
				"Offrez-vous une expérience de bien-être unique avec un massage personnalisé sur mesure. Conçu spécifiquement en fonction de vos besoins et de vos attentes, ce massage combine différentes techniques pour répondre à vos objectifs de relaxation, de soulagement des tensions ou de récupération musculaire. Que vous cherchiez à diminuer le stress, apaiser des douleurs chroniques ou simplement vous accorder un moment de détente totale, notre praticien s’adapte à votre corps et à vos sensations. Lors de votre séance, nous prenons le temps d’évaluer vos besoins et vos préférences pour créer un soin sur mesure, en choisissant les mouvements, l'intensité et les zones à traiter. Vous pourrez ainsi profiter d’un massage véritablement personnalisé, qui vous offrira une sensation de bien-être immédiate et durable. Offrez-vous ce moment de sérénité, car chaque corps mérite d’être écouté et traité avec soin.",
			prix1: "Sur devis",
			prix2: "",
			calendlyUrl: "/#contact",
			button: "ME CONTACTER",
		},
	];

	const openDialog = () => {
		if (dialogRef.current) {
			dialogRef.current.showModal();
		}
	};

	const closeDialog = () => {
		if (dialogRef.current) {
			dialogRef.current.close();
		}
	};

	return (
		<section className=" " id="prestations">
			<div className="mx-auto">
				<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20 py-10">
					<span className="text-3xl z-10">LES PRESTATIONS ET TARIFS</span>
					<div className="w-[12rem] h-3  bg-sand -mt-3 -z-1" />
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-sand px-10 lg:px-20 py-10">
					{prestations.map((prestation) => (
						<div
							key={prestation.id}
							className="flex flex-col gap-2 rounded-md bg-white p-10 h-full"
						>
							<div className="flex flex-col items-center gap-4">
								<Image
									src={massage4}
									width={"auto"}
									height={"250"}
									className="rounded-md"
									alt="Photo d'un massage"
								/>
								<h3 className="w-[17rem] text-xl font-tanker bg-sand -mt-12 text-white text-center rounded-md border border-sand  p-4">
									{prestation.title}
								</h3>
							</div>
							<div className="flex flex-col gap-6 flex-grow">
								<div className="flex flex-col gap-2">
									<p className="text-black line-clamp-6">
										{prestation.description}
									</p>
									<button
										type="button"
										onClick={openDialog}
										className="self-start font-semibold text-sm text-sand"
									>
										Lire plus
									</button>
									<dialog
										ref={dialogRef}
										className="bg-lightgreen rounded-lg p-6"
									>
										<button
											type="button"
											className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
											onClick={closeDialog}
										>
											&times;
										</button>
										<p className="text-justify p-4">{prestation.description}</p>
									</dialog>
								</div>
								<div className="mt-auto flex flex-col gap-2">
									<div>
										<p className="text-black font-semibold">
											{prestation.prix1}
										</p>
										{prestation.prix2 && (
											<p className="text-black font-semibold">
												{prestation.prix2}
											</p>
										)}
									</div>
									{prestation.button === "RESERVER" ? (
										<Calendly
											url={prestation.calendlyUrl}
											title={prestation.button}
											color="bg-black"
											width="w-[14rem]"
										/>
									) : (
										<Link
											href="/#contact"
											className="bg-black text-white text-center rounded-md p-3 hover:bg-opacity-80 w-[14rem] block"
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
