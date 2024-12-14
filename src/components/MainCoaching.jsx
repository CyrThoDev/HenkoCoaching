import salle from "../../public/images/salle3.jpg";
import Image from "next/image";
import vector from "../../public/images/vector.svg";
import CalendlyModal from "@/components/Calendly";
import { FaCheck } from "react-icons/fa6";

function MainCoaching() {
	return (
		<>
			<div className="relative">
				{/* Contenu principal */}
				<div className="flex flex-col lg:flex-row relative z-10 gap-10">
					<div className="basis-1/2 flex flex-col gap-8">
						<h2 className="relative flex flex-col text-lg md:text-xl font-tanker">
							<span className=" text-3xl z-10">
								A QUI S’ADRESSE LE COACHING PRIVE ?
							</span>
							<div className="w-[12rem] h-3 bg-darkorange -mt-3 -z-1" />
						</h2>
						<div className="space-y-4 flex flex-col">
							<p>
								La séance de coaching sportif privé d’adresse aux sportifs et
								non sportifs souhaitant pratiquer seul ou en binôme pour :
							</p>
							<div className="flex flex-col gap-4">
								<div className="flex flex-row gap-2 items-start">
									<FaCheck className="text-xl" />
									<p>
										Se remettre en forme et/ou perdre du poids, reprendre
										confiance en soi
									</p>
								</div>
								<div className="flex flex-row gap-2 items-start">
									<FaCheck className="text-xl" />
									<p>
										Sortir de la dépression et du stress en reprenant goût à la
										vie et à l’effort
									</p>
								</div>
								<div className="flex flex-row gap-2 items-start">
									<FaCheck className="text-xl" />
									<p>
										Réduire les risques pouvant entraîner une maladie
										cardiovasculaire (tabagisme, diabète, cholestérol,
										sédentarité, obésité, etc.)
									</p>
								</div>
								<div className="flex flex-row gap-2 items-start">
									<FaCheck className="text-xl" />
									<p>
										Développer ses capacités physiques (renforcement,
										tonification, prise de masse musculaire, gain de force)
									</p>
								</div>
								<div className="flex flex-row gap-2 items-start">
									<FaCheck className="text-xl" />
									<p>
										Réduire les blessures et améliorer la qualité de sommeil
									</p>
								</div>
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

				{/* Vectors en arrière-plan */}
				<div className="absolute hidden lg:pb-12 -inset-10 lg:-inset-20 lg:flex flex-col items-center justify-center z-0">
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
				<div className="flex flex-col lg:flex-row relative z-10 pt-32 gap-10">
					<div className="basis-1/2 flex flex-col gap-8">
						<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
							<span className="text-3xl z-10">
								QUAND EST-CE QUE JE PEUX M’ENTRAINER AVEC LA COACH ?
							</span>
							<div className="w-[12rem] h-3  bg-darkorange -mt-3 -z-1" />
						</h2>
						<div className="space-y-4 flex flex-col gap-10">
							<div className="flex flex-col gap-4">
								<div className="flex flex-row gap-2 items-start">
									<FaCheck className="text-xl" />
									<p>Du lundi au vendredi</p>
								</div>
								<div className="flex flex-row gap-2 items-start">
									<FaCheck className="text-xl" />
									<p>1, 2 ou 3 fois par semaine pendant 1h</p>
								</div>
								<div className="flex flex-row gap-2 items-start">
									<FaCheck className="text-xl" />
									<p>Créneaux sur réservation</p>
								</div>
							</div>
							<div className="flex justify-center">
								<CalendlyModal
									url="https://calendly.com/henkocoaching/coaching-essai-1h"
									title="RESERVER MA SEANCE D'ESSAI"
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
