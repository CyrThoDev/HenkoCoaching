import Image from "next/image";
import wave from "../../public/images/wave.svg";

function Wave() {
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

export default Wave;
