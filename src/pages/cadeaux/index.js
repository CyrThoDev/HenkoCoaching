import FormulaireCarteCadeau from "@/components/FormCarteCadeau";
import HeadPages from "@/components/HeadPages";
import NavBar from "@/components/NavBar";
import logoOrange from "../../../public/images/logoHenkoOrange.svg";
import WaveOrange from "@/components/WaveOrange";

function Cadeaux() {
	return (
		<>
			<NavBar logo={logoOrange} />
			<div className="flex flex-col gap-10">
				<HeadPages title="CARTES CADEAUX" />
				<WaveOrange />
			</div>
			<FormulaireCarteCadeau />
		</>
	);
}

export default Cadeaux;
