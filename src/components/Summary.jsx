import vector from "../../public/images/vector.svg";
import Image from "next/image";
import salle3 from "../../public/images/salle3.jpg";
import Link from "next/link";
import ButtonBlack from "./ButtonBlack";

function Summary() {
	return (
		<div className="flex-flex-col gap-0">
			<div className="bg-darkorange text-white">
				<div className=" px-10 lg:px-20 pt-10 flex flex-col md:flex-row gap-10 justify-around items-center">
					<Image
						src={salle3}
						width={300}
						height={""}
						className=""
						alt="photo de la salle avec des poids"
					/>
					<div className="flex flex-col gap-8 lg:basis-1/2 ">
						<h2 className="text-2xl md:text-3xl ">
							Des services sur-mesure pour tous les âges!
						</h2>
						<p>
							Mes services s&#39;adaptent à tous les âges et répondent à une
							variété de besoins en fonction de vos spécificités (pathologies,
							métiers, quotidien).
						</p>
						<p>
							Allant de la reprise d&#39;activité à la remise en forme
							(bien-être), au développement des qualités physiques ou à la
							préparation physique spécifique (force, prise de masse, volume,
							puissance, vitesse) et même au maintien de l&#39;autonomie de la
							personne (motricité, renforcement, amélioration de la santé par le
							sport).
						</p>
						<div className="self-center lg:self-start pb-8">
							<ButtonBlack
								title="JE SOUHAITE AVOIR PLUS D'INFOS"
								link="/#contact"
								width="w-[15rem] md:w-[20rem]"
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
