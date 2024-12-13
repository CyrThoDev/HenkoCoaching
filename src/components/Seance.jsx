import Image from "next/image";
import Strength from "../../public/images/Strength.webp";
import lift from "../../public/images/lift.webp";
import workout from "../../public/images/Workout.webp";
import curls from "../../public/images/Curls.webp";

function Seance() {
	return (
		<>
			<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
				<span className="text-3xl z-0">DEROULE D’UNE SEANCE DE COACHING</span>
				<div className="w-[12rem] h-3 bg-darkorange -mt-3 -z-1" />
			</h2>
			<div className="relative flex flex-col gap-10 max-w-4xl mx-auto ">
				{/* Ligne verticale au milieu */}
				<div className="absolute inset-y-0 left-1/2 w-[2px] rounded-sm bg-darkorange -translate-x-1/2" />

				{/* Contenu */}
				<div className="grid grid-cols-12 gap-2 items-center">
					<p className="col-span-5">
						1- Briefing et explication du déroulé de la séance à venir
					</p>
					<div className="col-span-2 flex justify-center">
						<Image
							src={Strength}
							alt="Briefing"
							width={50}
							height={50}
							className="relative "
						/>
					</div>
					<span className="col-span-5" />
				</div>
				<div className="grid grid-cols-12 gap-2 items-center">
					<span className="col-span-5" />
					<div className="col-span-2 flex justify-center">
						<Image
							src={lift}
							alt="Échauffement"
							width={50}
							height={50}
							className="relative "
						/>
					</div>
					<p className="col-span-5">
						2- Échauffement : mobilité, activation cardiovasculaire & musculaire
					</p>
				</div>
				<div className="grid grid-cols-12 gap-2 items-center">
					<p className="col-span-5">
						3- Corps de séance en fonction de l’objectif et de la planification
					</p>
					<div className="col-span-2 flex justify-center">
						<Image
							src={workout}
							alt="Corps de séance"
							width={50}
							height={50}
							className="relative "
						/>
					</div>
					<span className="col-span-5" />
				</div>
				<div className="grid grid-cols-12 gap-2 items-center">
					<span className="col-span-5" />
					<div className="col-span-2 flex justify-center">
						<Image
							src={curls}
							alt="Retour au calme"
							width={50}
							height={50}
							className="relative "
						/>
					</div>
					<p className="col-span-5">4- Retour au calme et échange</p>
				</div>
			</div>
		</>
	);
}

export default Seance;
