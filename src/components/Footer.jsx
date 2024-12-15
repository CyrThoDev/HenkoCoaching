import LOGO from "../../public/images/LOGO-4.png";
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
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
						<p>43 avenue Maurice Martin</p>
						<p>40200 Mimizan</p>
					</div>
				</div>
				<div className="flex flex-col gap-2 items-center">
					<p>Retrouvez-moi sur les réseaux</p>
					<div className="flex flex-row gap-2 ">
						<Link
							href="https://www.instagram.com/henko/"
							alt="lien instagram Henko Coaching"
							target="_blanck"
							aria-label="cliquer pour aller sur la page instagram de Henko coaching"
						>
							<FaInstagramSquare className="text-white text-4xl self-center" />
						</Link>
						<Link
							href="https://www.instagram.com/henko/"
							alt="lien instagram Henko Coaching"
							target="_blanck"
							aria-label="cliquer pour aller sur la page instagram de Henko coaching"
						>
							<FaInstagramSquare className="text-white text-4xl self-center" />
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
