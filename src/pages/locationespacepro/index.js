import logoSable from "@images/logoSableHenko.webp";
import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import WaveSable from "@/components/WaveSable";
import Formulaire from "@/components/Formulaire";
import location from "../../../public/images/location.png";
import espaceprosalle from "@images/espacepro-salle.webp";
import espacepromassage from "@images/massage-espacepro.webp";
import Image from "next/image";

function LocationEspacePro() {
	return (
		<div className="flex flex-col gap-20 ">
			<div className="bg-white bg-opacity-75 flex flex-col gap-20 bg-center bg-cover bg-[url('/images/location.webp')] min-h-[30rem]">
				<NavBar logo={logoSable} />
				<HeadPages title="LOCATION ESPACE PRO" />
				<WaveSable />
			</div>

			<div className="flex flex-col md:flex-row gap-10 px-10 lg:px-20 items-center">
				<div className="flex flex-col gap-10 ">
					<p>
						Le local HENKO COACHING peut être disponible à la location
						ponctuellement sur demande et sur devis pour les professionnels du
						même domaine d’activité sport & bien-être (yoga, pilâtes, massages,
						réflexologie, etc.)
					</p>
					<p>Demi-journée / journée / week-end</p>
					<p>
						Vous pouvez organiser des stages, des cours individuels ou
						collectifs (6 pers max)
					</p>
					<p>N’hésitez pas !</p>
				</div>

				<div className=" grid grid-col-1 lg:grid-cols-2 gap-4">
					<Image
						src={espaceprosalle}
						width={"auto"}
						height={"auto"}
						className=" shadow-persoreverse shadow-sand  rounded-sm "
						alt="Salle de sport"
					/>
					<Image
						src={espacepromassage}
						width={"auto"}
						height={"auto"}
						className=" shadow-perso shadow-sand  rounded-sm mt-18 lg:mt-20 "
						alt="Salle de sport"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-0">
				<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20">
					<span className="text-3xl z-10">
						Je souhaite avoir plus d&#39;informations
					</span>
					<div className="w-[12rem] h-3  bg-sand -mt-3 -z-1" />
				</h2>
				<Formulaire
					bgColor="bg-white"
					labelColor="text-black"
					borderColor="border-gray-400"
				/>
			</div>
			<WaveSable />
			<span className="mb-10" />
		</div>
	);
}

export default LocationEspacePro;
