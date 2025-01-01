import Image from "next/image";

import ButtonBlack from "./ButtonBlack";
import ButtonSable from "./ButtonSable";
import massage1 from "@images/massage1.jpg";
import massage2 from "@images/massage2.jpg";
import massage3 from "@images/massage3.jpg";
import massage4 from "@images/massage4.jpg";

const HeaderMassages = () => {
	return (
		<div className="px-10 lg:px-20 flex flex-col gap-10 ">
			<div className="lg:px-40 grid grid-cols-2 lg:grid-cols-4 gap-4">
				<Image
					src={massage1}
					width={"auto"}
					height={"auto"}
					className=""
					alt="Photo d'un massage"
				/>
				<Image
					src={massage2}
					width={"auto"}
					height={"auto"}
					className="mt-20"
					alt="Photo d'un massage"
				/>
				<Image
					src={massage3}
					width={"auto"}
					height={"auto"}
					className="hidden lg:block lg:mt-8"
					alt="Photo d'un massage"
				/>
				<Image
					src={massage4}
					width={"auto"}
					height={"auto"}
					className="hidden lg:block"
					alt="Photo d'un massage"
				/>
			</div>
			<div>
				<div className="flex flex-col gap-10 lg:px-40">
					<p>
						Offrez à votre corps et à votre esprit un moment de pure détente !
						Le massage, bien plus qu’une simple relaxation, est une véritable
						parenthèse de bien-être qui aide à évacuer le stress, soulager les
						tensions et revitaliser le corps. Que ce soit pour vous ressourcer
						après une journée intense ou pour offrir à un proche une expérience
						de relaxation profonde, un massage est le cadeau parfait pour
						prendre soin de soi.
					</p>
					<p>
						Laissez-vous envelopper par la douceur d’un instant privilégié, et
						redécouvrez l’harmonie intérieure. Parce que vous méritez de vous
						sentir bien, offrez ou offrez-vous ce moment unique de sérénité ! Il
						permet aussi après une séance de sport de récupérer plus rapidement
						et éviter les courbatures ou les crampes.
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-10 justify-center items-center ">
				<ButtonSable
					title="JE RESERVE UN MASSAGE"
					width="w-[15rem] lg:w-[18rem]"
					link="/massages/#prestations"
				/>
				<ButtonBlack
					title="J'OFFRE UN MASSAGE"
					width="w-[15rem] lg:w-[18rem]"
					link="/cadeaux"
				/>
			</div>
		</div>
	);
};

export default HeaderMassages;
