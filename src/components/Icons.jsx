import React from "react";
import Image from "next/image";
import Link from "next/link";

const iconsTab = [
	{
		icon: "/images/coaching.svg",
		name: "COACHING",
		description:
			"Seul ou à plusieurs, je vous accompagne personnellement à améliorer vos mouvements et à révéler tout votre potentiel sportif dans le but d'atteindre vos objectifs sans vous blesser. Découvrez les options qui s’offrent à vous !",
		forward: "/images/orangeArrow.webp",
		link: "https://calendly.com/henkocoaching/coaching-essai-1h",
		alt: "icone d'une personne en mouvement",
	},
	{
		icon: "/images/recupsand.svg",
		name: "MASSAGES ET RECUPERATION",
		description:
			"En complément de vos séances de sport ou tout simplement pour vous faire du bien et vous relaxer, offrez-vous la possibilité de vous faire masser au même endroit. Découvrez les différents types de massages et de récupération proposés!",
		forward: "/images/arrow-sand.svg",
		link: "/massages",
		alt: "icone batterie pour illustrer la recuperation",
	},
	{
		icon: "/images/libre.svg",
		name: "ACCES LIBRE",
		description:
			"Pour que vous puissiez adapter vos séances à votre emploi du temps Henko Coaching vous propose à partir de février un accès libre sur réservation avec un badge. Profitez d’un espace moderne, bien équipé et conçu pour tous les niveaux. ",
		forward: "/images/orangeArrow.webp",
		link: "/acceslibre",
		alt: "icone avec des poids qui seraient en libre accès",
	},
	{
		icon: "/images/location-sand.svg",
		name: "LOCATION ESPACE PRO",
		description:
			"Vous avez un projet ou un événement à organiser ? Cet espace sportif et bien-être est disponible à la location ponctuelle ! Que ce soit pour des cours particuliers, des ateliers, des séminaires ou des événements privés, notre lieu modulable s’adapte à vos besoins.",
		forward: "/images/arrow-sand.svg",
		link: "/locationespacepro",
		alt: "icone d'un personne qui donne les clés à une autre pour imager la location d'un espace",
	},
];
function Icons() {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 px-10 xl:px-20 gap-16 md:gap-8">
			{iconsTab.map((icon) => (
				<Link key={icon.link} href={icon.link}>
					<div
						className="flex flex-col gap-4 h-full justify-between"
						key={icon.name}
					>
						<div className="flex flex-col gap-2">
							<Image
								src={icon.icon}
								width={100}
								height={100}
								className="self-center"
								alt={icon.alt}
							/>
							<h2 className="text-xl font-tanker self-center">{icon.name}</h2>
						</div>
						<p className="text-left">{icon.description}</p>
						<div className="flex justify-center mt-auto">
							<Image
								src={icon.forward}
								width={40}
								height={40}
								alt="flèche indiquant de se déplacer vers la page correspondante au bloc mentionné au dessus"
							/>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default Icons;
