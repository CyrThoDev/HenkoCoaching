import { useState } from "react";
import FormCarteCadeau from "@/components/FormCarteCadeau";
import CardPreview from "@/components/CardPreview";
import HeadPages from "@/components/HeadPages";
import NavBar from "@/components/NavBar";
import logoOrange from "@images/logoHenkoOrange.svg";
import Image from "next/image";
import cartecadeaurecto from "@images/cartecadeaurecto.webp";
import logoSableHenko from "@images/logoSableHenko.webp";
import WaveSable from "@/components/WaveSable";
import { useCart } from "@/context/CartContext";

function Cadeaux() {
	const { addToCart } = useCart();
	const [customizations, setCustomizations] = useState({
		prestation: "",
		from: "",
		to: "",
		email: "",
		message: "",
		checked: false,
	});
	const [addedToCart, setAddedToCart] = useState(false);

	const SaveCustomization = (formData) => {
		setCustomizations(formData);
	};

	const handleAddToCart = () => {
		console.info("add to cart", customizations);
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

		if (customizations.price === null && customizations.montantLibre) {
			customizations.price = Number(customizations.montantLibre);
		}

		if (customizations.checked) {
			customizations.price += 1;
		}
		addToCart({
			id: Date.now(),
			type: "Carte Cadeau",
			customizations,
			price: Number(customizations.price),
		});

		// A MODIFIER avec vrai message d'enregistrement et d'ajout au panier, pas une alerte
		setAddedToCart(true);
	};

	return (
		<div className="flex flex-col gap-10">
			<NavBar logo={logoSableHenko} bgbutton="bg-sand" />
			<div className="flex flex-col gap-10">
				<HeadPages title="CARTES CADEAUX" />
				<WaveSable />
			</div>
			<div className="flex flex-col md:flex-row  ">
				<div className="flex flex-col gap-10 px-10 lg:px-20 md:basis-1/2 justify-around mt-10 items-center ">
					<div className="flex flex-col gap-8">
						<p>
							Il n’y a pas de plus beau cadeau que de prendre soin des gens
							qu’on aime. Que ce soit grâce à un massage ou un coaching privé,
							voire les deux combinés.
						</p>
						<p>
							Choisissez la prestation de votre choix , et si vous le souhaitez,
							ajoutez un message personnalisé pour rendre ce cadeau unique.
						</p>
					</div>

					<Image
						src={cartecadeaurecto}
						width={"auto"}
						height={"auto"}
						alt="recto de la carte cadeau de Henko Coaching"
						className="self-center border border-sand rounded-sm"
					/>
				</div>

				<div className="flex flex-col px-10 lg:px-20 md:basis-1/2 ">
					<FormCarteCadeau
						SaveCustomization={SaveCustomization}
						addedToCart={addedToCart}
						setAddedToCart={setAddedToCart}
					/>
					<button
						type="button"
						onClick={handleAddToCart}
						className="bg-sand text-white text-center rounded-md py-3"
					>
						Ajouter au Panier
					</button>
					{addedToCart && (
						<p className="text-sand font-semibold pt-2 text-center">
							Votre carte cadeau a été ajoutée au panier!
						</p>
					)}
				</div>
			</div>

			<div className="py-20">
				<WaveSable />
			</div>
		</div>
	);
}

export default Cadeaux;
