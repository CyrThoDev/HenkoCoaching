import salle from "../../public/images/salle3.jpg";
import Image from "next/image";

function MainCoaching() {
	return (
		<div className="flex ">
			<div className="basis-1/2 flex justify-center">
				<Image src={salle} width={300} height={200} className="" />
			</div>
			<div className="basis-1/2">
				<h2 className="relative flex flex-col  text-lg md:text-2xl font-tanker">
					<span className=" z-10">Boostez votre forme en solo ou en duo</span>
					<div className="w-[12rem] h-2 md:h-3 bg-darkorange -mt-3 -z-1" />
				</h2>
			</div>
		</div>
	);
}

export default MainCoaching;
