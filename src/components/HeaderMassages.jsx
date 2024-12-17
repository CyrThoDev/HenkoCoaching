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
			<div className="lg:px-40 grid grid-cols-4 gap-4">
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
					className="mt-32"
					alt="Photo d'un massage"
				/>
				<Image
					src={massage3}
					width={"auto"}
					height={"auto"}
					className="mt-8"
					alt="Photo d'un massage"
				/>
				<Image
					src={massage4}
					width={"auto"}
					height={"auto"}
					className=""
					alt="Photo d'un massage"
				/>
			</div>
			<div>
				<div className="flex flex-col gap-10 lg:px-40">
					<p>
						Le massage représente une solution à explorer. En effet, le massage
						vous offre de nombreux bienfaits pour votre corps, votre organisme
						et votre équilibre émotionnel. Si les bienfaits du massage sur le
						corps sont souvent ceux qui nous viennent en premier à l’esprit, les
						bienfaits du massage sur notre état de bien-être ne sont pas à
						négliger.
					</p>
					<p>
						Le massage a en effet de nombreuses vertus. Il agit sur notre état
						physiologique, psychologique et émotionnel. Le massage s’avère donc
						bénéfique pour réduire le stress, améliorer le sommeil et favoriser
						la connexion à soi-même. Il permet aussi après une séance de sport
						de récupérer plus rapidement et éviter les courbatures ou les
						crampes.
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
