import Image from "next/image";
import Link from "next/link";

function Header() {
	return (
		<div className="">
			<div
				className="
    bg-[url('/images/HPopacity.png')] 
    lg:bg-[url('/images/HPopacity.png')] 
    md:bg-[url('/images/HPopacity.png')] 
   bg-no-repeat bg-cover bg-center h-[70vh]
					lg:h-[90vh]
  "
			>
				<div className=" px-10 md:px-20 flex  flex-col  justify-center gap-4 lg:gap-10  h-full">
					<h1 className="flex flex-col gap-2 md:gap-4 lg:gap-4 text-5xl  md:text-[64px] lg:text-[5rem] font-tanker text-black ">
						<span>Sport </span>
						<span>Bien-être </span>
						<span>et récupération</span>
					</h1>
					<p className="font-poppins text-xl">
						Votre studio au coeur de Mimizan-Plage
					</p>
					<div className="flex flex-col md:flex-row gap-4 font-poppins">
						<Link
							href="coaching"
							className="bg-darkorange text-white text-center self-start rounded-md p-4 w-[16rem]  "
						>
							RESERVER UN COACHING
						</Link>
						<Link
							href="/massage"
							className="bg-black text-center text-white rounded-md self-start p-4 w-[16rem]"
						>
							RESERVER UN MASSAGE
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
