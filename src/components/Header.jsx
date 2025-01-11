import Image from "next/image";
import Link from "next/link";
import ButtonOrange from "./ButtonOrange";
import ButtonBlack from "./ButtonBlack";

function Header() {
	return (
		<div className="">
			<div
				className="
    bg-[url('/images/HPopacity.png')] 
    lg:bg-[url('/images/HPopacity.png')] 
    md:bg-[url('/images/HPopacity.png')] 
   bg-no-repeat bg-cover bg-center h-[80vh]
					lg:h-[90vh]
  "
			>
				<div className=" px-10 md:px-20 flex  flex-col  justify-center gap-4 lg:gap-10  h-full">
					<h1 className="flex flex-col gap-2 md:gap-4 lg:gap-4 text-4xl min-[375px]:text-5xl  md:text-[64px] lg:text-[5rem] font-tanker text-black ">
						<span>Sport </span>
						<span>Bien-être </span>
						<span>et récupération</span>
					</h1>
					<p className="font-poppins text-xl">
						Votre studio au coeur de Mimizan-Plage
					</p>
					<div className="flex flex-col md:flex-row gap-4 font-poppins">
						<ButtonOrange
							title="RESERVER MA PREMIERE SEANCE"
							link="https://calendly.com/henkocoaching/coaching-essai-1h"
							target="_blank"
							width="w-[18rem]"
						/>

						<ButtonBlack
							title="RESERVER UN MASSAGE"
							link="https://calendly.com/henkocoaching/"
							target="_blank"
							width="w-[18rem]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
