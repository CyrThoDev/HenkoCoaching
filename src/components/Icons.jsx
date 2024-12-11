import React from "react";
import Image from "next/image";
import Link from "next/link";

const iconsTab = [
	{
		icon: "/images/coaching.svg",
		name: "COACHING",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa id ipsum fermentum vulputate.",
		forward: "/images/orangeArrow.webp",
		link: "/coaching",
	},
	{
		icon: "/images/recup.svg",
		name: "MASSAGES ET RECUPERATION",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa id ipsum fermentum vulputate.",
		forward: "/images/orangeArrow.webp",
		link: "/massages",
	},
	{
		icon: "/images/libre.svg",
		name: "ACCES LIBRE",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa id ipsum fermentum vulputate.",
		forward: "/images/orangeArrow.webp",
		link: "/acceslibre",
	},
	{
		icon: "/images/location.svg",
		name: "LOCATION ESPACE PRO",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa id ipsum fermentum vulputate.",
		forward: "/images/orangeArrow.webp",
		link: "/locationespacepro",
	},
];
function Icons() {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 px-20 py-20 gap-16 md:gap-8">
			{iconsTab.map((icon) => (
				<div className="flex flex-col gap-4" key={icon.name}>
					<div className="flex flex-col gap-2">
						<Image
							src={icon.icon}
							width="100"
							height="100"
							className="self-center"
						/>
						<h2 className="text-xl font-tanker self-center">{icon.name}</h2>
					</div>
					<p className="text-center md:text-left">{icon.description}</p>
					<Link href={icon.link} className="self-center">
						<Image src={icon.forward} width={40} height={40} />
					</Link>
				</div>
			))}
		</div>
	);
}

export default Icons;
