import vector from "../../public/images/vector.svg";
import Image from "next/image";
import salle3 from "../../public/images/salle3.jpg";
import Link from "next/link";
import ButtonBlack from "./ButtonBlack";
import summary from "@images/summary.webp";

function Summary() {
	return (
		<div className="flex flex-col gap-0">
			<div className="bg-darkorange text-white">
				<div className=" px-10 lg:px-20 pb-10 lg:pb-0 pt-10 flex flex-col lg:flex-row gap-10 justify-around items-center">
					<div>
						<Image
							src={summary}
							width={"500"}
							height={"auto"}
							className="rounded-md  "
							alt="photo de la salle avec des poids"
						/>
					</div>
					<div className="flex flex-col gap-8  lg:basis-1/2 xl:basis-3/5 justify-between">
						<h2 className="text-2xl md:text-3xl font-semibold ">
							Des services sur-mesure pour tous les âges!
						</h2>
						<p>
							Bienvenue dans un lieu où le bien-être de votre corps et de votre
							esprit est au cœur de toute mon attention. Ici, chaque geste,
							chaque espace, est conçu pour vous offrir une expérience unique de
							relaxation et de dynamisme.
						</p>
						<p>
							Que vous veniez pour un entraînement physique stimulant ou pour un
							moment de détente absolue, chaque détail est pensé pour vous
							permettre de vous ressourcer pleinement. Venez découvrir
							l’équilibre parfait entre performance et relaxation, pour une
							harmonie totale. Vous méritez ce moment, et je suis là pour vous y
							conduire.
						</p>
						<div className="self-center ">
							<ButtonBlack
								title="CONTACTEZ-MOI"
								link="/#contact"
								width="w-[15rem] md:w-[18rem]"
							/>
						</div>
					</div>
				</div>
			</div>
			<Image
				src={vector}
				width={"auto"}
				height={"auto"}
				alt="illustraton d'une vague pour séparer les blocs sur la page"
			/>
		</div>
	);
}

export default Summary;
