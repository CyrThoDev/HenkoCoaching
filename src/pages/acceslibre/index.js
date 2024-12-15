import HeadPages from "@/components/HeadPages";
import logoOrange from "@images/logoHenkoOrange.svg";
import NavBar from "@/components/NavBar";
import WaveSable from "@/components/WaveSable";
import WaveOrange from "@/components/WaveOrange";
function AccesLibre() {
	return (
		<div>
			<NavBar logo={logoOrange} />
			<div className="flex flex-col gap-10">
				<HeadPages title="ACCES LIBRE" />
				<WaveOrange />
			</div>
		</div>
	);
}

export default AccesLibre;
