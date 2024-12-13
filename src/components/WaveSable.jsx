import Image from "next/image";
import waveSable from "../../public/images/waveSable.webp";

function WaveSable() {
	return (
		<div className="flex items-center justify-center w-full">
			<Image
				src={waveSable}
				width={"auto"}
				height={"auto"}
				alt="Wave sable"
				className="w-1/2 md:w-auto"
			/>
		</div>
	);
}

export default WaveSable;
