import Image from "next/image";
import React from "react";
import Icons from "./Icons";
import Summary from "./Summary";
import GoogleReviews from "./GoogleReviews";
import Wave from "./Wave";
import APropos from "./APropos";
import Header from "./Header";
import Formulaire from "./Formulaire";

function HomePage() {
	return (
		<div className="flex flex-col gap-20">
			<Header />
			<Icons />
			<Summary />
			<GoogleReviews />
			<Wave />
			<APropos />
			<Formulaire />
		</div>
	);
}

export default HomePage;
