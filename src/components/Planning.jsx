import { useRef } from "react";

import PlanningHenkoMobile from "@images/PlanningHenkoMobile.webp";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonBlack from "./ButtonBlack";
import Image from "next/image";
import salle from "../../public/images/salle3.jpg";
import Heure from "@images/Heure.webp";

// const trainingDetails = [
// 	{
// 		title: "Planning du 15 juillet au 15 septembre inclus.",
// 	},
// 	{
// 		title: "Accès libre : ",
// 		description:
// 			"Sur réservation jusqu'à la dernière minute. Si un créneau destiné au Coaching/massage n'est pas réservé il sera disponible pour l'accès libre.",
// 		type: "coaching",
// 	},
// 	{
// 		title: "Coaching / Massage : ",
// 		description:
// 			"Sur réservation minimum 24h avant pour le coaching & 6h avant pour le massage.",
// 		type: "libre",
// 	},
// ];

function Planning({ planning, page }) {


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

	const {
		details = [],
		imageDesktop,
		imageMobile,
		imageCoaching,
		imageLibreAcces,
		ctaButtons = [],
	} = planning;

	if (!planning) return null;
	

	const imagePage = page === "coaching" ? imageCoaching : imageLibreAcces;


const filteredDetails =
		page === "coaching"
			? details.filter((item) => item.type !== "libre")
			: details.filter((item) => item.type !== "coaching");


	return (
		<div>
			<div className="flex flex-col gap-20">
				<div className="flex flex-col gap-4 ">
					<div className="lg:flex lg:flex-row lg:gap-20  lg:pt-10 ">
						<div className="hidden md:flex md:flex-col basis-1/2">
							{imageDesktop && (
					<Image
						src={imageDesktop}
						alt={`Illustration page ${page}`}
						width={600}
						height={400}
							onClick={openDialog}
						className="rounded-md shadow-md z-10"
					/>
				)}
							<div className="flex flex-row  gap-8 justify-center  pt-4 text-white ">
								<p className="bg-sand p-2 rounded-sm">Accès libre</p>
								<p className="bg-darkorange p-2 rounded-sm">
									Coaching/massages
								</p>
							</div>
						</div>
						<Image
							src={imageMobile}
							alt="Planning Henko"
							width={500}
							height={500}
							onClick={openDialog}
							className="md:hidden "
						/>
						<dialog ref={dialogRef} className=" bg-white rounded-lg p-6  ">
							<button
								type="button"
								className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
								onClick={closeDialog}
							>
								&times;
							</button>
							<div className="flex justify-center items-center ">
								<Image
									src={imageDesktop}
									alt="Planning Henko"
									width={400}
							height={400}
									className="hidden lg:block lg:w-[60vw] h-auto"
								/>
								<Image
									src={imageMobile}
									alt="Planning Henko"
									width={500}
							height={500}
									onClick={openDialog}
									className="lg:hidden w-[80svw]"
								/>
							</div>
						</dialog>
						<div className="basis-1/2 flex justify-center">
							<Image
								src={imagePage}
								width={500}
							height={500}
								className=" hidden lg:flex  shadow-perso max-h-[24rem] w-auto shadow-darkorange rounded-sm"
								alt="Salle de sport"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2 ">
						{filteredDetails.map((detail, index) => (
							<div key={index} className="flex flex-col lg:flex-row">
								<p className="font-semibold">{detail.title}</p>
								{detail.description && (
									<p className="pl-2">{detail.description}</p>
								)}
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
							link="https://calendly.com/henkocoaching/coaching-essai-1h"
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
