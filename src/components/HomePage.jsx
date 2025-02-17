import Image from "next/image";
import React from "react";
import Icons from "./Icons";
import Summary from "./Summary";
import GoogleReviews from "./GoogleReviews";
import WaveOrange from "./WaveOrange";
import APropos from "./APropos";
import Header from "./Header";
import Formulaire from "./Formulaire";
import Actualites from "./Actualites";

function HomePage() {
	return (
		<div className="flex flex-col gap-20">
			<Header />
			<Icons />
			<Summary />
			<GoogleReviews />
			<WaveOrange />
			<APropos />
			<Formulaire
				bgColor="bg-darkorange"
				labelColor="text-white"
				borderColor="border-white"
			/>
			{/* <Actualites /> */}
		</div>
	);
}

export default HomePage;
