import salle from "../../public/images/salle3.jpg";
import Image from "next/image";
import vector from "../../public/images/vector.svg";
import CalendlyModal from "@/components/Calendly";
import { FaCheck } from "react-icons/fa6";

const coachingBenefits = [
	"Se remettre en forme et/ou perdre du poids, reprendre confiance en soi",
	"Sortir de la dépression et du stress en reprenant goût à la vie et à l’effort",
	"Réduire les risques pouvant entraîner une maladie cardiovasculaire (tabagisme, diabète, cholestérol, sédentarité, obésité, etc.)",
	"Développer ses capacités physiques (renforcement, tonification, prise de masse musculaire, gain de force)",
	"Réduire les blessures et améliorer la qualité de sommeil",
];

const trainingDetails = [
	"Du lundi au vendredi",
	"1, 2 ou 3 fois par semaine pendant 1h",
	"Créneaux sur réservation",
];
function MainCoaching() {
	return (
		<>
			<div className="relative">
				{/* Contenu principal */}
				<div className="flex flex-col md:flex-row z-10 gap-10 relative items-center lg:pb-20">
					<div className="basis-1/2 flex flex-col gap-8">
						<h2 className="relative flex flex-col text-lg md:text-xl font-tanker">
							<span className=" text-3xl z-10">
								A QUI S’ADRESSE LE COACHING PRIVE ?
							</span>
							<div className="w-[12rem] h-3 bg-darkorange -mt-3 -z-1" />
						</h2>
						<div className="space-y-4 flex flex-col">
							<p>
								La séance de coaching sportif privé s’adresse aux sportifs et
								non sportifs souhaitant pratiquer seul ou en binôme pour :
							</p>
							<ul className="flex flex-col gap-4 list-disc list-inside">
								{coachingBenefits.map((benefit, index) => (
									<li key={index}>{benefit}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="basis-1/2 flex justify-center">
						<Image
							src={salle}
							width={"auto"}
							height={"auto"}
							className="max-h-[25rem] w-auto shadow-perso shadow-darkorange"
							alt="Salle de sport"
						/>
					</div>
				</div>

				{/* Vectors en arrière-plan */}
				<div className="absolute hidden -inset-10 lg:-inset-20 lg:flex flex-col items-center justify-center z-0">
					<Image
						src={vector}
						width={"auto"}
						height={"auto"}
						className="rotate-180"
						alt="Vector 1"
					/>
					<Image
						src={vector}
						width={"auto"}
						height={"auto"}
						className=""
						alt="Vector 2"
					/>
				</div>

				{/* Deuxième section */}
				<div className="flex flex-col md:flex-row z-10 pt-20 relative gap-10 items-center">
					<div className="basis-1/2 flex flex-col gap-8">
						<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
							<span className="text-3xl z-10">
								QUAND EST-CE QUE JE PEUX M’ENTRAINER AVEC LA COACH ?
							</span>
							<div className="w-[12rem] h-3  bg-darkorange -mt-3 -z-1" />
						</h2>
						<div className="space-y-4 flex flex-col gap-10">
							<ul className="flex flex-col gap-4 list-disc list-inside">
								{trainingDetails.map((detail, index) => (
									<li key={index}>{detail}</li>
								))}
							</ul>
							<div className="flex justify-center lg:justify-start">
								<CalendlyModal
									url="https://calendly.com/henkocoaching/coaching-essai-1h"
									title="RESERVER MA SEANCE D'ESSAI"
									color="bg-darkorange"
									width="w-[18rem] lg:=w-[20rem]"
								/>
							</div>
						</div>
					</div>
					<div className="basis-1/2 flex justify-center">
						<Image
							src={salle}
							width={"auto"}
							height={"auto"}
							className="max-h-[25rem] w-auto shadow-perso shadow-darkorange"
							alt="Salle de sport"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainCoaching;
