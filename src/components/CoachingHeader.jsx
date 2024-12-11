import Image from "next/image";
import Dumbbell from "../../public/images/Dumbbell.webp";
import salle from "../../public/images/salle3.jpg";
import ButtonOrange from "./ButtonOrange";

function CoachingHeader() {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col lg:flex-row">
				<div className="basis-1/2 flex justify-center">
					<Image src={salle} width={300} height={200} className="" />
				</div>
				<div className="lg:basis-1/2 flex flex-col gap-4 items-left">
					<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker">
						<span className=" z-10">Boostez votre forme en solo ou en duo</span>
						<div className="w-[12rem] h-2 md:h-3 bg-darkorange -mt-3 -z-1" />
					</h2>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Image src={Dumbbell} width={30} height={30} />
							<p>Matériel professionnel</p>
						</div>
						<div className="flex items-center gap-2">
							<Image src={Dumbbell} width={30} height={30} />
							<p>Matériel professionnel</p>
						</div>
						<div className="flex items-center gap-2">
							<Image src={Dumbbell} width={30} height={30} />
							<p>Matériel professionnel</p>
						</div>
						<div className="flex items-center gap-2">
							<Image src={Dumbbell} width={30} height={30} />
							<p>Matériel professionnel</p>
						</div>
						<div className="flex items-center gap-2">
							<Image src={Dumbbell} width={30} height={30} />
							<p>Matériel professionnel</p>
						</div>
						<div className="flex items-center gap-2">
							<Image src={Dumbbell} width={30} height={30} />
							<p>Matériel professionnel</p>
						</div>
					</div>
					<ButtonOrange
						title="RESERVEZ VOTRE SEANCE D'ESSAI"
						link="https://calendly.com/henkocoaching/coaching-essai-1h"
						width="w-[18rem]"
					/>
				</div>
			</div>
		</div>
	);
}

export default CoachingHeader;
