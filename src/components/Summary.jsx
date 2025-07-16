import vector from "../../public/images/vector.svg";
import Image from "next/image";
import ButtonBlack from "./ButtonBlack";
import summary from "@images/summary.webp";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/client";


function Summary({ resumeaccueil }) {

	
	return (
		<div className="flex flex-col gap-0">
			<div className="bg-darkorange text-white">
				<div className="px-10 lg:px-20 pb-10 lg:pb-0 pt-10 flex flex-col lg:flex-row gap-10 justify-around items-center">
					<div>
						<Image
						src={urlFor(resumeaccueil.image).width(500).height(400).url()}
							width={500}
							height={400}
							className="rounded-md"
							alt="photo de la salle avec des poids"
						/>
					</div>
					<div className="flex flex-col gap-8 lg:basis-1/2 xl:basis-3/5 justify-between">
						<h2 className="text-2xl md:text-3xl font-semibold">
							{resumeaccueil?.titre}
						</h2>
						<div className="prose prose-sm md:prose-base max-w-none text-white">
							{resumeaccueil?.contenu && (
								<PortableText value={resumeaccueil.contenu} />
							)}
						</div>
						<div className="self-center">
							<ButtonBlack
								title="CONTACTEZ-MOI"
								link="/#contact"
								width="w-[15rem] md:w-[18rem]"
							/>
						</div>
					</div>
				</div>
			</div>
			<Image
				src={vector}
				width={"auto"}
				height={"auto"}
				alt="illustration d'une vague pour séparer les blocs sur la page"
			/>
		</div>
	);
}

export default Summary;