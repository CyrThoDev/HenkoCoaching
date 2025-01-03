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
import { useCart } from "@/context/CartContext";

function Cadeaux() {
	const { addToCart } = useCart();
	const [customizations, setCustomizations] = useState({
		prestation: "",
		from: "",
		to: "",
		email: "", // Adresse email pour l'envoi
		message: "", // Message facultatif
	});

	const SaveCustomization = (formData) => {
		setCustomizations(formData);
	};

	const handleAddToCart = () => {
		if (
			!customizations.prestation ||
			!customizations.from ||
			!customizations.to ||
			!customizations.email
		) {
			alert(
				"Veuillez remplir tous les champs obligatoires avant d'ajouter au panier.",
			);
			return;
		}

		addToCart({
			id: Date.now(),
			type: "Carte Cadeau",
			customizations,
			price: customizations.price,
		});

		// A MODIFIER avec vrai message d'enregistrement et d'ajout au panier, pas une alerte
		alert("Carte cadeau ajoutée au panier !");
	};

	return (
		<div className="flex flex-col ">
			<NavBar logo={logoSableHenko} />
			<div className="flex flex-col gap-10">
				<HeadPages title="CARTES CADEAUX" />
				<WaveSable />
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

				<Image
					src={cartecadeaurecto}
					width={"auto"}
					height={"auto"}
					alt="recto de la carte cadeau de Henko Coaching"
					className="self-center w-1/2 border border-sand rounded"
				/>
			</div>
			<div className="flex flex-row px-10 lg:px-20  ">
				<div className="flex flex-col ">
					<div className="basis-1/2">
						<FormCarteCadeau SaveCustomization={SaveCustomization} />
					</div>
					{/* <CardPreview
						personnaliserCarte={formData.personnaliserCarte}
						prestation={formData.prestation}
						nomDestinataire={formData.nomDestinataire}
						emailExpediteur={formData.emailExpediteur}
					/> */}
					<button
						type="button"
						onClick={handleAddToCart}
						className="bg-darkorange text-white text-center rounded-md py-3 px-4"
					>
						Ajouter au Panier
					</button>
				</div>
				<Image
					src={cartecadeaurecto}
					width={"auto"}
					height={"auto"}
					alt="recto de la carte cadeau de Henko Coaching"
					className="self-center border border-sand rounded"
				/>
			</div>
			<div className="py-20">
				<WaveSable />
			</div>
		</div>
	);
}

export default Cadeaux;
