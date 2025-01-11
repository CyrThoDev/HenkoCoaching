import { useRef } from "react";
import salle from "../../public/images/salle3.jpg";
import Image from "next/image";
import vector from "../../public/images/vector.svg";
import CalendlyModal from "@/components/Calendly";
import { FaCheck } from "react-icons/fa6";
import PlanningHenkoDesktopv2 from "@images/PlanningHenkoDesktopv2.png";
import PlanningHenkoMobile from "@images/PlanningHenkoMobile.png";
import ButtonOrange from "./ButtonOrange";

const coachingBenefits = [
	"Se remettre en forme et/ou perdre du poids, reprendre confiance en soi",
	"Réduire le stress, améliorer la qualité du sommeil ou combattre la dépression pour vous aider à retrouver énergie, équilibre et sérénité au quotidien. ",
	"Réduire les risques pouvant entraîner une maladie cardiovasculaire (tabagisme, diabète, cholestérol, sédentarité, obésité, etc.)",
	"Développer ses capacités physiques (renforcement, tonification, prise de masse musculaire, gain de force)",
	"Éviter les blessures",
];

const trainingDetails = [
	"Planning du 1er février au 06 juillet inclus.",
	"Accès libre : Sur réservation jusqu'à la dernière minute. *Si un créneau destiné au Coaching/massage n'est pas réservé il sera disponible pour l'accès libre *",
	"Coaching / Massage : Sur réservation minimum 24h avant pour le coaching & 6h avant pour le massage.",
];

function MainCoaching() {
	const dialogRef = useRef(null);
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
								non sportifs souhaitant :
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
							className="max-h-[30rem] w-auto shadow-perso shadow-darkorange rounded-sm"
							alt="Salle de sport"
						/>
					</div>
				</div>

				{/* Vectors en arrière-plan */}
				<div className="absolute hidden -mt-56 -inset-10 lg:-inset-20 lg:flex flex-col items-center justify-center z-0">
					<Image
						src={vector}
						width={"auto"}
						height={"auto"}
						className="rotate-180 -mb-4"
						alt="Vector 1"
					/>
					<Image
						src={vector}
						width={"auto"}
						height={"auto"}
						className="-mt-2"
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
						<div className="space-y-4 flex flex-col gap-4">
							<Image
								src={PlanningHenkoDesktopv2}
								alt="Planning Henko"
								width={"auto"}
								height={"auto"}
								onClick={openDialog}
								className="hidden lg:block"
							/>
							<Image
								src={PlanningHenkoMobile}
								alt="Planning Henko"
								width={"auto"}
								height={"auto"}
								onClick={openDialog}
								className=" lg:hidden"
							/>
							<dialog ref={dialogRef} className=" bg-white rounded-lg p-6  ">
								<button
									type="button"
									className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
									onClick={closeDialog}
								>
									&times;
								</button>
								<div className=" lg:w-[70vw]">
									<Image
										src={PlanningHenkoDesktopv2}
										alt="Planning Henko"
										width={"auto"}
										height={"auto"}
										className="hidden lg:block"
									/>
									<Image
										src={PlanningHenkoMobile}
										alt="Planning Henko"
										width={"auto"}
										height={"auto"}
										onClick={openDialog}
										className=" lg:hidden w-[80svw]"
									/>
								</div>
							</dialog>
							<div className="flex flex-col gap-2 ">
								{trainingDetails.map((detail, index) => (
									<p key={index}>{detail}</p>
								))}
							</div>
							<div className="flex  flex-col justify-center lg:justify-start">
								{/* <CalendlyModal
									url="https://calendly.com/henkocoaching/coaching-essai-1h"
									title="RESERVER MA SEANCE D'ESSAI"
									color="bg-darkorange"
									width="w-[18rem] lg:=w-[20rem]"
								/> */}
								<ButtonOrange
									title="RESERVER MA SEANCE"
									link="https://calendly.com/henkocoaching/reservation-creneau-coaching"
									target="_blank"
									width="w-[18rem]"
								/>
								<p className="font-semibold">
									*Ce lien de réservation est réservé aux clients existants.
								</p>
							</div>
						</div>
					</div>
					<div className="basis-1/2 flex justify-center">
						<Image
							src={salle}
							width={"auto"}
							height={"auto"}
							className="max-h-[30rem] w-auto shadow-perso shadow-darkorange rounded-sm"
							alt="Salle de sport"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainCoaching;
