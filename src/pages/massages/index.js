import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import logoSable from "@images//logoSableHenko.webp";
import WaveSable from "@/components/WaveSable";
import Prestations from "@/components/Prestations";
import HeaderMassages from "@/components/HeaderMassages";
import Image from "next/image";
import basdepagemassage from "@images/basdepagemassage.jpg";
import Massagesbis from "@/components/Massagesbis";

function Massages() {
	return (
		<>
			<NavBar logo={logoSable} />
			<div className="flex flex-col gap-10 mb-10">
				<HeadPages title="MASSAGES ET RECUPERATION" />
				<WaveSable />
				<HeaderMassages />
				<Prestations />
				{/* <Massagesbis /> */}
				<Image
					src={basdepagemassage}
					width={"auto"}
					height={400}
					className="-mt-10 lg:m-auto"
					alt="Photo d'un massage"
				/>
				<WaveSable />
			</div>
		</>
	);
}

export default Massages;
