import Image from "next/image";
import wave from "../../public/images/wave.webp";

function WaveOrange() {
	return (
		<div className="flex items-center justify-center w-full">
			<Image
				src={wave}
				width={"auto"}
				height={"auto"}
				alt="Wave"
				className="w-1/2 md:w-auto"
			/>
		</div>
	);
}

export default WaveOrange;
