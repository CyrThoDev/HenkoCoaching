import { useState } from "react";
import FormCarteCadeau from "@/components/FormCarteCadeau";
import CardPreview from "@/components/CardPreview";
import HeadPages from "@/components/HeadPages";
import NavBar from "@/components/NavBar";
import logoOrange from "@images/logoHenkoOrange.svg";
import Image from "next/image";
import cartecadeaurecto from "@images/cartecadeaurecto.png";
import logoSableHenko from "@images/logoSableHenko.webp";
import WaveSable from "@/components/WaveSable";

function Cadeaux() {
	// const [isSended, setIsSended] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [formData, setFormData] = useState({
		prestation: "",
		nomDestinataire: "",
		emailExpediteur: "",
		personnaliserCarte: false,
	});

	const onSubmitHandler = async (data) => {
		if (!isLoading) {
			setIsLoading(true);
			setErrorMessage("");

			try {
				setFormData(data);
				// setIsSended(true);
			} catch (error) {
				setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
			} finally {
				setIsLoading(false);
			}
		}
	};
	return (
		<div className="flex flex-col ">
			<NavBar logo={logoSableHenko} />
			<div className="flex flex-col gap-10">
				<HeadPages title="CARTES CADEAUX" />
				<WaveSable />
			</div>
			<div className="flex flex-row gap-20 px-10 lg:px-20 items-center ">
				<div>
					<FormCarteCadeau
						onSubmit={onSubmitHandler}
						isLoading={isLoading}
						// isSended={isSended}
						errorMessage={errorMessage}
					/>
					<button
						type="button"
						className="bg-darkorange text-gray py-3 w-56 text-center rounded-xl text-base font-lora hover:bg-darkseagreen"
					>
						Ajouter au panier
					</button>
				</div>
				<div className="flex flex-col gap-10 mt-10 ">
					<p className="">
						Il n’y a pas de plus beau cadeau que de prendre soin des gens qu’on
						aime. Que ce soit grâce à un massage ou un coaching privé, voire les
						deux combinés.
					</p>

					<p>
						Choisissez la prestation de votre choix et si vous souhaitez ajouter
						un message personnalisé pour rendre ce cadeau unique.
					</p>
					<CardPreview
						personnaliserCarte={formData.personnaliserCarte}
						prestation={formData.prestation}
						nomDestinataire={formData.nomDestinataire}
						emailExpediteur={formData.emailExpediteur}
					/>
					{/* <Image
						src={cartecadeaurecto}
						width={"auto"}
						height={"auto"}
						alt="recto de la carte cadeau de Henko Coaching"
						className="self-center w-1/2 border border-sand rounded"
					/> */}
				</div>
			</div>
			<div className="py-20">
				<WaveSable />
			</div>
		</div>
	);
}

export default Cadeaux;
