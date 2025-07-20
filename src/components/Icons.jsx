import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";

const iconsTab = [
  {
    slug: "coaching",
    icon: "/images/coaching.svg",
    forward: "/images/orangeArrow.webp",
    link: "/coaching",
    alt: "icone d'une personne en mouvement",
  },
  {
    slug: "massages-et-recuperation",
    icon: "/images/recupsand.svg",
    forward: "/images/arrow-sand.svg",
    link: "/massages",
    alt: "icone batterie pour illustrer la recuperation",
  },
  {
    slug: "acces-libre",
    icon: "/images/libre.svg",
    forward: "/images/orangeArrow.webp",
    link: "/acceslibre",
    alt: "icone avec des poids en libre accès",
  },
  {
    slug: "location-espace-pro",
    icon: "/images/location-sand.svg",
    forward: "/images/arrow-sand.svg",
    link: "/locationespacepro",
    alt: "icone d'une personne donnant les clés",
  },
];



function Icons({iconaccueil}) {

	const mergedIcons = iconsTab.map((icon) => {
  const match = iconaccueil.find((item) => item.slug.current === icon.slug);
  return {
    ...icon,
    name: match?.nom || icon.slug,
    description: match?.description || "",
  };
});


	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 px-10 xl:px-20 gap-16 md:gap-8">
		{mergedIcons.map((icon) => (
  <Link key={icon.link} href={icon.link}>
    <div className="flex flex-col gap-4 h-full justify-between">
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
      <div className="text-left  leading-relaxed">
        {typeof icon.description === "string" ? (
          <p>{icon.description}</p>
        ) : (
          <PortableText value={icon.description} />
        )}
      </div>
      <div className="flex justify-center mt-auto">
        <Image
          src={icon.forward}
          width={40}
          height={40}
          alt="flèche"
        />
      </div>
    </div>
  </Link>
))}

		</div>
	);
}

export default Icons;
