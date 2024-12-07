import Image from "next/image";
import React from "react";
import Icons from "./Icons";
import Summary from "./Summary";
import GoogleReviews from "./GoogleReviews";
import Wave from "./Wave";
import APropos from "./APropos";

function Main() {
	return (
		<div>
			<Icons />
			<Summary />
			<GoogleReviews />
			<Wave />
			<APropos />
		</div>
	);
}

export default Main;
