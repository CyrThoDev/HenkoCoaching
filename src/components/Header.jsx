import Image from "next/image";
import Link from "next/link";

function Header() {
	return (
		<div className="">
			<div
				className="
    bg-[url('/images/imagebg480.webp')] 
    lg:bg-[url('/images/imagebg1280.webp')] 
    md:bg-[url('/images/imagebg768.webp')] 
   bg-no-repeat bg-cover bg-center h-[70vh]
					lg:h-[90vh]
  "
			>
				<div className="px-10 flex  flex-col items-let justify-center py-10  gap-20 xl:ml-48 h-full">
					<h1 className="flex flex-col gap-2 lg:gap-8 text-4xl lg:text-[64px] font-tanker text-black ">
						<span>Sport </span>
						<span>Bien-être </span>
						<span>et récupération</span>
					</h1>
					<p className="font-poppins text-xl">
						Votre studio au coeur de Mimizan-Plage
					</p>
					<div className="flex flex-col md:flex-row gap-4">
						<Link
							href="coaching"
							className="bg-darkorange text-center self-start rounded-md p-4 w-[16rem] "
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
