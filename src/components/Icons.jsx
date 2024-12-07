import React from "react";
import Image from "next/image";
import Link from "next/link";

const iconsTab = [
	{
		icon: "/images/coaching.svg",
		name: "COACHING",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa id ipsum fermentum vulputate.",
		forward: "/images/forwardorange.svg",
		link: "/coaching",
	},
	{
		icon: "/images/recup.svg",
		name: "MASSAGES ET RECUPERATION",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa id ipsum fermentum vulputate.",
		forward: "/images/forwardorange.svg",
		link: "/massages",
	},
	{
		icon: "/images/libre.svg",
		name: "ACCES LIBRE",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa id ipsum fermentum vulputate.",
		forward: "/images/forwardorange.svg",
		link: "/acceslibre",
	},
	{
		icon: "/images/location.svg",
		name: "LOCATION ESPACE PRO",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa id ipsum fermentum vulputate.",
		forward: "/images/forwardorange.svg",
		link: "/locationespacepro",
	},
];
function Icons() {
	return (
		<div className="grid lg:grid-cols-4 px-20 py-20 gap-16 md:gap-8">
			{iconsTab.map((icon) => (
				<div className="flex flex-col gap-4" key={icon.name}>
					<Image
						src={icon.icon}
						width="100"
						height="100"
						className="self-center"
					/>
					<h2 className="text-xl font-tanker self-center">{icon.name}</h2>
					<p>{icon.description}</p>
					<Link href={icon.link} className="self-center">
						<Image src={icon.forward} width={40} height={40} />
					</Link>
				</div>
			))}
		</div>
	);
}

export default Icons;
