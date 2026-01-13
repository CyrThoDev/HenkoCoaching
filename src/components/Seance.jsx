import Image from "next/image";
import Strength from "../../public/images/Strength.webp";
import lift from "../../public/images/lift.webp";
import workout from "../../public/images/Workout.webp";
import curls from "../../public/images/Curls.webp";
import CalendlyModal from "@/components/Calendly";
import ButtonOrange from "./ButtonOrange";

import {
	PiNumberCircleOneLight,
	PiNumberCircleTwoLight,
	PiNumberCircleThreeLight,
	PiNumberCircleFourLight,
} from "react-icons/pi";
import WaveOrange from "./WaveOrange";

const images = [Strength, lift, workout, curls];
const icons = [
	PiNumberCircleOneLight,
	PiNumberCircleTwoLight,
	PiNumberCircleThreeLight,
	PiNumberCircleFourLight,
];

function Seance({seancesteps, coachingpresentation}) {


	return (
		<div className="flex flex-col gap-10">
			<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
				<span className="text-3xl z-0">DEROULE D’UNE SEANCE DE COACHING</span>
				<div className="w-[12rem] h-3 bg-darkorange -mt-3 -z-1" />
			</h2>
			<div className="relative flex flex-col gap-10 max-w-4xl mx-auto my-10 ">
				{/* Ligne verticale au milieu */}
				<div className="absolute inset-y-0 left-1/2 w-[2px] rounded-sm bg-darkorange -translate-x-1/2" />

				{/* Contenu */}
		{seancesteps?.map((step, index) => {
					const Icon = icons[index] || PiNumberCircleOneLight;
					const image = images[index] || null;
					const isLeft = step.cote === "left";

					return (
						<div key={step._id} className="grid grid-cols-12 gap-2 items-center">
							{isLeft ? (
								<>
									<div className="col-span-5 flex flex-col md:flex-row gap-4 items-center">
										<Icon className="text-3xl md:text-4xl lg:text-4xl text-darkorange" />
										<p>{step.contenu}</p>
									</div>
									<div className="col-span-2 flex justify-center">
										{image && (
											<Image
												src={image}
												alt={`Étape ${index + 1}`}
												width={50}
												height={50}
												className="relative"
											/>
										)}
									</div>
									<span className="col-span-5" />
								</>
							) : (
								<>
									<span className="col-span-5" />
									<div className="col-span-2 flex justify-center">
										{image && (
											<Image
												src={image}
												alt={`Étape ${index + 1}`}
												width={50}
												height={50}
												className="relative"
											/>
										)}
									</div>
									<div className="col-span-5 flex flex-col md:flex-row gap-4 items-center">
										<Icon className="text-3xl md:text-4xl lg:text-4xl text-darkorange" />
										<p>{step.contenu}</p>
									</div>
								</>
							)}
						</div>
					);
				})}
			</div>
			<div className="flex justify-center">
			
				<ButtonOrange
  title="RESERVEZ VOTRE SEANCE D'ESSAI"
  link={coachingpresentation?.cta?.url || "#"}
  width="w-fit lg:w-[18rem]"
/>

			</div>
		</div>
	);
}

export default Seance;
