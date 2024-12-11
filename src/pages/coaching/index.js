import NavBar from "@/components/NavBar";
import Wave from "@/components/Wave";

import CoachingHeader from "@/components/CoachingHeader";
import Seance from "@/components/Seance";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonBlack from "@/components/ButtonBlack";
import MainCoaching from "@/components/MainCoaching";
import CalendlyModal from "@/components/Calendly";

function Coaching() {
	return (
		<>
			<NavBar />
			<div className="px-10 lg:px-20 flex flex-col gap-20">
				<h1 className="text-center font-tanker text-4xl">
					Coaching en Solo ou en Duo
				</h1>
				<Wave />
				<CoachingHeader />
				<MainCoaching />
				<Seance />
				<ButtonOrange
					title="RESERVEZ VOTRE SEANCE D'ESSAI"
					link="https://calendly.com/henkocoaching/coaching-essai-1h"
					width="w-[20rem]"
				/>
				<ButtonBlack
					title="RESERVEZ VOTRE SEANCE D'ESSAI"
					link="https://calendly.com/henkocoaching/coaching-essai-1h"
					width="w-[20rem]"
				/>
				<CalendlyModal
					url="https://calendly.com/henkocoaching/coaching-essai-1h"
					title="RESERVER MA SEANCE D'ESSAI"
				/>
			</div>
		</>
	);
}

export default Coaching;
