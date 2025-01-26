import HeadPages from "@/components/HeadPages";
import logoOrange from "@images/logoHenkoOrange.svg";
import NavBar from "@/components/NavBar";
import WaveSable from "@/components/WaveSable";
import WaveOrange from "@/components/WaveOrange";
import Image from "next/image";
import acceslibre from "@images/acceslibre.jpg";
import FormulesLibres from "@/components/FormulesLibres";
import ButtonBlack from "@/components/ButtonBlack";

import Planning from "@/components/Planning";

function AccesLibre() {
	return (
		<div className="mb-20">
			<NavBar logo={logoOrange} bgbutton="bg-darkorange" />
			<div className="flex flex-col gap-20 mb-20  ">
				<div className="flex flex-col gap-10 ">
					<HeadPages title="ACCES LIBRE" />
					<WaveOrange />
				</div>
				<div className="bg-white bg-opacity-75 -inset-10 lg:-inset-20 flex flex-col gap-20 bg-center bg-cover bg-[url('/images/acceslibre.webp')] min-h-[30rem]" />
				<div className=" flex flex-col gap-10 px-10 lg:px-40">
					<h3 className="font-tanker text-center text-2xl">
						DISPO A PARTIR DE FEVRIER 2025
					</h3>
					<p>
						Vous avez besoin d’accéder à une salle de sport à Mimizan plage
						pendant vos vacances ou même toute l’année et vous n’avez pas besoin
						de coach parce que vous avez déjà assez d’expérience pour pratiquer
						en autonomie et surtout en sécurité avec des poids libres, vous avez
						déjà votre programmation ou en souhaitez une en supplément de votre
						accès.
					</p>
					<p>
						Pour un bon déroulement des séances, cet espace d’environ 40 m2 avec
						du matériel limité ne peut pas accueillir un nombre important de
						personnes en même temps. C’est pour cela que l’accès libre est
						limité à 3 personne en même temps par créneau d’environ 1h30.{" "}
					</p>
					<p>
						<strong>10 personnes au total</strong> bénéficieront d’un pass
						permettant d’accéder librement à la salle en dehors des heures de
						coaching et massages. Une réservation de créneau sera nécessaire
						pour filtrer les entrées/sorties et avoir une bonne gestion de
						l’espace et du matériel autant pour vous que pour moi.
					</p>
					<p>
						Pour bénéficier du pass & en fonction de vos objectifs il faudra
						justifier de votre niveau d’autonomie dans ce type de lieu. Ex :
						savoir utiliser une barre de 10/15/20 kgs à charger/décharger avec
						des plates, utilisation des dumbells et kettlebell & rangement du
						rameur. Il n’y a aucune machine guidée.
					</p>
					<p>
						Je vous demande de laisser l’endroit comme vous l’avez trouvé, dans
						son état de propreté et de rangement initial.{" "}
						<strong>Cet espace est sous vidéo surveillance</strong> pour
						vérifier que les accès soient bien respectés et éviter tout
						débordement ou risque d’insécurité.
					</p>
				</div>
				<FormulesLibres />
				<div className="self-center ">
					<ButtonBlack
						title="JE SOUHAITE AVOIR PLUS D'INFOS"
						link="/#contact"
						width="w-[15rem] md:w-[20rem]"
					/>
				</div>
			</div>
			<Planning />
			<WaveOrange />
		</div>
	);
}

export default AccesLibre;
