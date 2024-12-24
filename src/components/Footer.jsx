import LOGO from "../../public/images/LOGO-4.png";
import Image from "next/image";
import { FaInstagramSquare, FaGoogle } from "react-icons/fa";
import Link from "next/link";

function Footer() {
	return (
		<div className="bg-black px-10 lg:px-20  text-white text-xs py-4 flex flex-col gap-4">
			<div className=" grid md:grid-cols-1 lg:grid-cols-3 items-center justify-between  font-poppins gap-8 ">
				<div className=" flex flex-col gap-2 items-center lg:items-start">
					<Image
						src={LOGO}
						width={"auto"}
						className="w-1/4"
						alt="logo de Henko coaching en blanc"
					/>
					<div className="text-center lg:text-start">
						<a
							href="https://www.google.com/maps/search/?api=1&query=43+avenue+Maurice+Martin,+40200+Mimizan"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:underline visited:text-white"
						>
							<p>43 avenue Maurice Martin</p>
							<p>40200 Mimizan</p>
						</a>
						<a
							href="tel:0640451745"
							className="text-white hover:underline visited:text-white"
						>
							<p>06 40 45 17 45</p>
						</a>
					</div>
				</div>
				<div className="flex flex-col gap-2 items-center">
					<p>Retrouvez-moi sur les réseaux</p>
					<div className="flex flex-row gap-2 items-center ">
						<Link
							href="https://www.instagram.com/henkocoaching_mimizan/"
							alt="lien instagram Henko Coaching"
							target="_blanck"
							aria-label="cliquer pour aller sur la page instagram de Henko coaching"
						>
							<FaInstagramSquare className="text-white text-4xl self-center" />
						</Link>
						<Link
							href="https://www.instagram.com/henko/"
							alt="lien Google My business Henko Coaching"
							target="_blanck"
							aria-label="cliquer pour aller sur la page google My business de Henko coaching"
						>
							<FaGoogle className="text-white text-3xl self-center" />
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-2 text-white text-center">
					<p>Mentions légales</p>
					<p>Politique de confidentialité</p>
					<p>CGV</p>
				</div>
			</div>
			<div className="text-center">2024-Henko Coaching</div>
		</div>
	);
}

export default Footer;
