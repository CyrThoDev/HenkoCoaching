import Image from "next/image";
import Dumbbell from "../../public/images/Dumbbell.webp";
import coachingsolo from "@images/coachingsolo.webp";
import ButtonOrange from "./ButtonOrange";

const coachingFeatures = [
	"Matériel professionnel neuf et haut de gamme",
	"Cours 100% encadré et corrigé du début à la fin",
	"Explications et conseils pour des résultats durables",
	"1, 2 ou 3 séances par semaine",
	"Cadre discret et intimiste",
];

function CoachingHeader({coachingpresentation}) {

if (!coachingpresentation) return null;

const { titre, imageUrl, features, cta } = coachingpresentation;
	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col-reverse items-center md:flex-row gap-10">
				<div className="md:basis-1/2 flex justify-center">
					<Image
						src={imageUrl}
						width={400}
						height={400}
						className="w-auto h-auto max-h-[500px] rounded-sm shadow-persoreverse shadow-darkorange"
						alt="icone de poids à soulever"
					/>
				</div>
				<div className="md:basis-1/2 flex flex-col gap-12 items-left">
					<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
						<span className="text-3xl z-10">
							{titre}
						</span>
						<div className="w-[12rem] h-3 bg-darkorange -mt-3 -z-1" />
					</h2>
					<div className="flex flex-col gap-4">
						{features?.map((feature, index) => (
							<div key={index} className="flex items-center gap-2">
								<Image
									src={Dumbbell}
									width={30}
									height={30}
									alt="icone de poids à soulever"
								/>
								<p>{feature}</p>
							</div>
						))}
					</div>
					{cta?.text && (
					<div className="flex items-center lg:items-start flex-col gap-2 z-10 w-fit">
						<ButtonOrange
							title={cta.text}
							link={cta.url}
							width="w-fit lg:w-[25rem]"
						/>
						
						{cta.note && <p>{cta.note}</p>}
					</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default CoachingHeader;
