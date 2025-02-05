import { useRef } from "react";
import PlanningHenkoDesktopv2 from "@images/PlanningHenkoDesktopv2.png";
import PlanningHenkoMobile from "@images/PlanningHenkoMobile.png";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonBlack from "./ButtonBlack";
import Image from "next/image";
import salle from "../../public/images/salle3.jpg";
import Heure from "@images/Heure.png";
import photocoach from "@images/photocoach.webp";

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
			<div className="flex flex-col gap-20">
				<div className="flex flex-col gap-4 ">
					<div className="lg:flex lg:flex-row lg:gap-4 lg:justify-between ">
						<div className="hidden md:block basis-1/2 self-center">
							<Image
								src={Heure}
								alt="Planning Henko"
								width={"auto"}
								height={"auto"}
								onClick={openDialog}
								className="  "
							/>
							<div className="flex flex-row  gap-8 justify-center  pt-4 text-white ">
								<p className="bg-sand p-2 rounded-sm">Accès libre</p>
								<p className="bg-darkorange p-2 rounded-sm">
									Coaching/massages
								</p>
							</div>
						</div>
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
							<div className="self-center lg:w-[70vw]">
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
									className="lg:hidden w-[80svw]"
								/>
							</div>
						</dialog>
						<div className="">
							<Image
								src={photocoach}
								width={"auto"}
								height={"auto"}
								className=" hidden lg:block mr-20 max-h-[30rem] w-auto shadow-perso shadow-darkorange rounded-sm"
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
