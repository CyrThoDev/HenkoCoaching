import NavBar from "@/components/NavBar";
import CoachingHeader from "@/components/CoachingHeader";
import Seance from "@/components/Seance";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonBlack from "@/components/ButtonBlack";
import MainCoaching from "@/components/MainCoaching";
import logoOrange from "@images/logoHenkoOrange.svg";
import WaveOrange from "@/components/WaveOrange";
import HeadPages from "@/components/HeadPages";
import FAQ from "@/components/FAQ";
import Formules from "@/components/Formules";

function Coaching() {
	return (
		<>
			<NavBar logo={logoOrange} />
			<div className="px-10 lg:px-20 flex flex-col gap-20">
				<div className="flex flex-col gap-10">
					<HeadPages title="COACHING EN SOLO OU EN DUO" />
					<WaveOrange />
				</div>
				<CoachingHeader />
				<MainCoaching />
				<Seance />
				<WaveOrange />
			</div>
			<Formules />
			<FAQ />
		</>
	);
}

export default Coaching;
