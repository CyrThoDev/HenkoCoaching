import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import logoSable from "@images//logoSableHenko.webp";
import WaveSable from "@/components/WaveSable";
import Prestations from "@/components/Prestations";

function Massages() {
	return (
		<>
			<NavBar logo={logoSable} />
			<div className="flex flex-col gap-10">
				<HeadPages title="MASSAGES ET RECUPERATION" />
				<WaveSable />
				<Prestations />
			</div>
		</>
	);
}

export default Massages;
