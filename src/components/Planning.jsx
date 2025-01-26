import { useRef } from "react";
import PlanningHenkoDesktopv2 from "@images/PlanningHenkoDesktopv2.png";
import PlanningHenkoMobile from "@images/PlanningHenkoMobile.png";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonBlack from "./ButtonBlack";
import Image from "next/image";
import salle from "../../public/images/salle3.jpg";

const trainingDetails = [
	{
		title: "Planning du 1er février au 06 juillet inclus.",
	},
	{
		title: "Accès libre : ",
		description:
			"Sur réservation jusqu'à la dernière minute. Si un créneau destiné au Coaching/massage n'est pas réservé il sera disponible pour l'accès libre.",
	},
	{
		title: "Coaching / Massage : ",
		description:
			"Sur réservation minimum 24h avant pour le coaching & 6h avant pour le massage.",
	},
];

function Planning() {
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
		<div>
			<div className="flex flex-col gap-2">
				<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
					<span className="text-3xl z-10 ">
						QUAND EST-CE QUE JE PEUX M’ENTRAINER AVEC LA COACH ?
					</span>
					<div className="w-[12rem] h-3  bg-darkorange -mt-3 -z-1" />
				</h2>
			</div>
			<div className="flex flex-col gap-20">
				<div className="flex flex-col gap-4  pt-10">
					<div className="flex flex-row">
						<Image
							src={PlanningHenkoDesktopv2}
							alt="Planning Henko"
							width={"800"}
							height={"auto"}
							onClick={openDialog}
							className="hidden md:block "
						/>
						<Image
							src={PlanningHenkoMobile}
							alt="Planning Henko"
							width={"auto"}
							height={"auto"}
							onClick={openDialog}
							className="lg:hidden "
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
					<div className="flex flex-col gap-2 ">
						{trainingDetails.map((detail, index) => (
							<div key={index} className="flex flex-col lg:flex-row ">
								<p className="font-semibold">{detail.title} </p>
								<p className="pl-2">{detail.description}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col lg:flex-row  lg:px-40 gap-8 lg:gap-20">
					<div className="flex flex-col gap-2 lg:w-1/2 ">
						<ButtonBlack
							title="RESERVER MON CRENEAU"
							link="https://calendly.com/henkocoaching/reservation-creneau-coaching"
							target="_blank"
							width="w-[18rem]"
						/>
						<p className="italic ">
							*Vous payez déjà votre abonnement. Vous êtes ici pour réserver
							votre/vos créneaux de coaching pour les prochains jours ou
							semaines.
						</p>
					</div>
					<div className="flex flex-col gap-2 lg:w-1/2 ">
						<ButtonOrange
							title="RESERVER MA PREMIERE SEANCE"
							link="https://calendly.com/henkocoaching/reservation-creneau-coaching"
							target="_blank"
							width="w-[18rem]"
						/>
						<p className="italic ">
							*Vous souhaitez découvrir le coaching avec moi avant de faire
							votre choix. Réservez et payez votre séance ici.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Planning;
