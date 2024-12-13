import logoSable from "../../../public/images/logoSableHenko.webp";
import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import WaveSable from "@/components/WaveSable";

function LocationEspacePro() {
	return (
		<>
			<NavBar logo={logoSable} />
			<div className="flex flex-col gap-10">
				<HeadPages title="LOCATION ESPACE PRO" />
				<WaveSable />
			</div>
		</>
	);
}

export default LocationEspacePro;
