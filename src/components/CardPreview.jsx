import Image from "next/image";
import LOGO from "@images/LOGO-4.png";

function CardPreview({
	personnaliserCarte,
	prestation,
	nomDestinataire,
	emailExpediteur,
}) {
	return (
		<div className="flex flex-row shadow-lg basis-1/2">
			<div className="w-full flex flex-col p-8 bg-sand">
				<Image
					src={LOGO}
					width={"auto"}
					height={"auto"}
					className="w-1/4 self-center"
					alt="logo de Henko coaching en blanc"
				/>
				<div className="flex flex-col">
					{/* Personnalisation dynamique de la carte */}
					{personnaliserCarte && (
						<div className="flex flex-col gap-10 text-white">
							<div className="text-center">
								<p className="w-full mt-8 p-2 rounded-md border-none text-white font-tanker text-xxl focus:ring-2 focus:ring-gray-500">
									{prestation}
								</p>
							</div>
							<div className="flex flex-row items-center">
								<p className="text-sm font-medium mb-1 basis-1/4">
									Un cadeau pour :
								</p>
								<p className="w-full basis-3/4 p-2 bg-white rounded-md border-none text-black focus:ring-2 focus:ring-gray-500">
									{nomDestinataire}
								</p>
							</div>
							<div className="flex flex-row items-center">
								<p className="text-sm font-medium mb-1 basis-1/4">
									De la part de :
								</p>
								<p className="w-full basis-3/4 p-2 bg-white rounded-md border-none text-black focus:ring-2 focus:ring-gray-500">
									{emailExpediteur}
								</p>
							</div>
						</div>
					)}
					{/* Footer */}
					<div className="mt-8 text-center text-white text-sm">
						<p>43 av Maurice Martin, 40200 Mimizan</p>
						<p>
							Tél 0640451745 -{" "}
							<a
								href="https://www.henkocoachingmimizan.fr"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								www.henkocoachingmimizan.fr
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardPreview;
