import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import logoSable from "../../../public/images/logoSableHenko.webp";
import WaveSable from "@/components/WaveSable";

function Massages() {
	return (
		<>
			<NavBar logo={logoSable} />
			<div className="flex flex-col gap-10">
				<HeadPages title="MASSAGES ET RECUPERATION" />
				<WaveSable />
			</div>
		</>
	);
}

export default Massages;
