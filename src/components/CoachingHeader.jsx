import Image from "next/image";
import Dumbbell from "../../public/images/Dumbbell.webp";
import salle from "../../public/images/salle3.jpg";
import ButtonOrange from "./ButtonOrange";

function CoachingHeader() {
	return (
		<div className="flex flex-col  gap-10">
			<div className="flex flex-col-reverse items-center md:flex-row gap-10">
				<div className="md:basis-1/2 flex justify-center">
					<Image
						src={salle}
						width={"auto"}
						height={"auto"}
						className="max-h-[30rem] w-auto"
						alt="icone de poids à soulever"
					/>
				</div>
				<div className="md:basis-1/2 flex flex-col gap-8 items-left">
					<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker">
						<span className="text-3xl z-10">
							Boostez votre forme en solo ou en duo
						</span>
						<div className="w-[12rem] h-3  bg-darkorange -mt-3 -z-1" />
					</h2>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Image
								src={Dumbbell}
								width={30}
								height={30}
								alt="icone de poids à soulever"
							/>
							<p>Matériel professionnel neuf et haut de gamme</p>
						</div>
						<div className="flex items-center gap-2">
							<Image
								src={Dumbbell}
								width={30}
								height={30}
								alt="icone de poids à soulever"
							/>
							<p>Cours 100% encadré et corrigé du début à la fin</p>
						</div>
						<div className="flex items-center gap-2">
							<Image
								src={Dumbbell}
								width={30}
								height={30}
								alt="icone de poids à soulever"
							/>
							<p>Explications et conseils pour des résultats durables</p>
						</div>
						<div className="flex items-center gap-2">
							<Image
								src={Dumbbell}
								width={30}
								height={30}
								alt="icone de poids à soulever"
							/>
							<p>
								Abonnement mensuel avec engagement ou annuel sans engagement
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Image
								src={Dumbbell}
								width={30}
								height={30}
								alt="icone de poids à soulever"
							/>
							<p>1, 2 ou 3 séances par semaine</p>
						</div>
						<div className="flex items-center gap-2">
							<Image
								src={Dumbbell}
								width={30}
								height={30}
								alt="icone de poids à soulever"
							/>
							<p>Cadre discret et intimiste</p>
						</div>
					</div>
					<div className="flex items-center lg:items-start flex-col gap-2   ">
						<ButtonOrange
							title="RESERVEZ VOTRE SEANCE D'ESSAI A 25€*"
							link="https://calendly.com/henkocoaching/coaching-essai-1h"
							width="w-[17rem] lg:w-[25rem]"
						/>
						<p>* Remboursée pour toute souscription à un abonnement</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CoachingHeader;
