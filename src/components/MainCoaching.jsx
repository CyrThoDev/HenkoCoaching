import { useRef } from "react";
import salle from "../../public/images/salle3.jpg";
import Image from "next/image";
import vector from "../../public/images/vector.svg";
import CalendlyModal from "@/components/Calendly";
import { FaCheck } from "react-icons/fa6";
import PlanningHenkoDesktopv2 from "@images/PlanningHenkoDesktopv2.png";
import PlanningHenkoMobile from "@images/PlanningHenkoMobile.webp";
import ButtonOrange from "./ButtonOrange";
import ButtonBlack from "./ButtonBlack";
import Planning from "./Planning";
import WaveOrange from "./WaveOrange";
import photocoach from "@images/photocoach.webp";


function MainCoaching({coachingpourquoi, planning}) {

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

	if (!coachingpourquoi) return null;
	const { titre, intro, benefits, imageUrl } = coachingpourquoi;

	return (
		<>
			<div className="relative">
				{/* Contenu principal */}
				<div className="flex flex-col md:flex-row z-10 gap-10 relative items-center pb-40">
					<div className="basis-1/2 flex flex-col gap-8">
						<h2 className="relative flex flex-col text-lg md:text-xl font-tanker">
							<span className=" text-3xl z-10">
								{titre}
							</span>
							<div className="w-[12rem] h-3 bg-darkorange -mt-3 -z-1" />
						</h2>
						<div className="space-y-4 flex flex-col">
							<p>
								{intro}
							</p>
							<ul className="flex flex-col gap-4 list-disc list-inside">
								{benefits?.map((benefit, index) => (
									<li key={index}>{benefit}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="basis-1/2 flex justify-center">
						<Image
							src={imageUrl}
							width={500}
							height={500}
							className="shadow-perso shadow-darkorange rounded-sm"
							alt="Salle de sport"
						/>
					</div>
				</div>
				{/* Vectors en arrière-plan */}
				<div className="absolute hidden mt-96 -inset-10 lg:-inset-20 lg:flex flex-col items-center justify-center z-0">
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
						className="-mt-2 "
						alt="Vector 2"
					/>
				</div>
			</div>
			{/* <div className="-mt-32 flex flex-col ">
				<div className="flex flex-col gap-2 pb-10 lg:pb-0">
					<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
						<span className="text-3xl z-10 ">
							QUAND EST-CE QUE JE PEUX M’ENTRAINER AVEC LA COACH ?
						</span>
						<div className="w-[12rem] h-3  bg-darkorange -mt-3 -z-1" />
					</h2>
				</div>
				<Planning planning={planning} page="coaching" />
				<WaveOrange />
			</div> */}
		</>
	);
}

export default MainCoaching;
