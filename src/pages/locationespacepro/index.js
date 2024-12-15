import logoSable from "@images/logoSableHenko.webp";
import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import WaveSable from "@/components/WaveSable";
import Formulaire from "@/components/Formulaire";
import location from "../../../public/images/location.png";

function LocationEspacePro() {
	return (
		<div className="flex flex-col gap-20 ">
			<div className="bg-white bg-opacity-75 flex flex-col gap-20 bg-center bg-cover bg-[url('/images/location.png')] min-h-[30rem]">
				<NavBar logo={logoSable} />
				<HeadPages title="LOCATION ESPACE PRO" />
				<WaveSable />
			</div>

			<div className="flex flex-col gap-10 px-10 lg:px-20">
				<p>
					Le local HENKO COACHING peut être disponible à la location
					ponctuellement sur demande et sur devis pour les professionnels du
					même domaine d’activité sport & bien-être (yoga, pilâtes, massages,
					réflexologie, etc.)
				</p>
				<p>Demi-journée / journée / week-end</p>
				<p>
					Vous pouvez organiser des stages, des cours individuels ou collectifs
					(6 pers max)
				</p>
				<p>N’hésitez pas !</p>
			</div>
			<Formulaire bgColor="bg-sand" />
		</div>
	);
}

export default LocationEspacePro;
