import Link from "next/link";
import { useRef, useState } from "react";
import Calendly from "../components/Calendly";
import Image from "next/image";
import massage4 from "@images/massage4.jpg";

import ButtonBlack from "./ButtonBlack";
import { PortableText } from "@portabletext/react";

const getPreviewText = (blocks, maxLength = 500) => {
	if (!blocks || !Array.isArray(blocks)) return "";
	const plainText = blocks
		.map((block) => block.children?.map((child) => child.text).join("") || "")
		.join(" ");
	return `${plainText.slice(0, maxLength)}...`;
};

const Prestations = ({ prestations }) => {
	const [expandedId, setExpandedId] = useState(null);

	const toggleExpand = (order) => {
		setExpandedId(expandedId === order ? null : order);
	};

	return (
		<section id="prestations">
			<div className="mx-auto">
				<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px- py-10">
					<span className="text-3xl z-10">LES PRESTATIONS ET TARIFS</span>
					<div className="w-[12rem] h-3 bg-sand -mt-3 -z-1" />
				</h2>
				<div className="flex flex-col gap-4 bg-sand lg:px-20">
					{prestations.map((prestation) => (
						<div
							key={prestation.id}
							className="flex flex-col lg:flex-row gap-10 p-10 border-b border-b-black last:border-b-0"
						>
							{/* Titre, prix et bouton (en dessous pour lg et plus) */}
							<div className="lg:flex lg:flex-col justify-between lg:gap-4  basis-1/3">
								<h3 className="text-xl font-tanker bg-sand text-black">
									{prestation.title}
								</h3>
								<div className="flex flex-col gap-2">
									{/* Prix visible uniquement en lg et plus */}
									<div className="hidden lg:block">
										<p className="text-black text-sm ">{prestation.prix1}</p>
										{prestation.prix2 && (
											<p className="text-black text-sm ">{prestation.prix2}</p>
										)}
									</div>
									{/* Bouton visible uniquement en lg et plus */}
									{prestation.button === "RESERVER" ? (
										<div className="hidden lg:block">
											<ButtonBlack
												link={prestation.calendlyUrl}
												title={prestation.button}
												width="w-[14rem]"
											/>
										</div>
									) : (
										<div className="hidden lg:block">
											<Link
												href="/#contact"
												className="bg-black text-white text-center rounded-md p-3 hover:bg-opacity-80 w-[14rem] block"
											>
												{prestation.button}
											</Link>
										</div>
									)}
								</div>
							</div>

							{/* Description */}
							<div className="flex flex-col gap-6 flex-grow order-2 lg:order-none basis-2/4">
								<div className="flex flex-col gap-2">
									{expandedId === prestation.order ? (
										<div className="prose prose-pink text-black text-base leading-relaxed min-w-full">
											<PortableText value={prestation.description} />
											{prestation.detailsList && (
												<ul className="list-disc not-prose pl-5 mt-2 text-black">
													{prestation.detailsList.map((item, index) => (
														<li key={index}>
															<strong>{item.title}: </strong>
															{item.description}
														</li>
													))}
												</ul>
											)}
											<button
												type="button"
												onClick={() => toggleExpand(prestation.order)}
												className="self-start font-semibold text-sm text-black underline mt-3"
											>
												Lire moins
											</button>
										</div>
									) : (
										<div>
											<p className="prose text-black text-base leading-relaxed min-w-full">
												{getPreviewText(prestation.description)}
											</p>
											<button
												type="button"
												onClick={() => toggleExpand(prestation.order)}
												className="self-start font-semibold text-sm text-black underline"
											>
												Lire plus
											</button>
										</div>
									)}
								</div>
							</div>

							{/* Prix et bouton pour les tailles inférieures à lg */}
							<div className="mt-auto flex flex-col gap-4 order-3 basis-1/4 lg:hidden">
								{/* Prix visible uniquement en tailles inférieures à lg */}
								<div className="flex flex-col gap-1">
									<p className="text-black text-sm font-semibold">
										{prestation.prix1}
									</p>
									{prestation.prix2 && (
										<p className="text-black text-sm font-semibold">
											{prestation.prix2}
										</p>
									)}
								</div>
								{/* Bouton visible uniquement en tailles inférieures à lg */}
								{prestation.button === "RESERVER" ? (
									<ButtonBlack
										link={prestation.calendlyUrl}
										title={prestation.button}
										width="w-[14rem]"
									/>
								) : (
									<Link
										href="/#contact"
										className=" bg-black text-white text-center rounded-md p-3 hover:bg-opacity-80 w-[14rem]"
									>
										{prestation.button}
									</Link>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Prestations;
