import { useCart } from "@/context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import logoHenkoOrange from "@images/logoHenkoOrange.svg";
import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
// import WaveOrange from "@/components/WaveOrange";
// import logoOrange from "@images/logoHenkoOrange.svg";
import logoSableHenko from "@images/logoSableHenko.webp";
import WaveSable from "@/components/WaveSable";
import cartecadeaurecto from "@images/cartecadeaurecto.png";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

function Cart() {
	const { cart, removeFromCart } = useCart();
	const [isCGVChecked, setIsCGVChecked] = useState(false);

	const handleCheckout = async () => {
		const stripe = await stripePromise;
		try {
			const response = await axios.post("/api/create-checkout-session", {
				cart,
			});
			const sessionId = response.data.id;
			await stripe.redirectToCheckout({ sessionId });
		} catch (error) {
			console.error("Erreur lors de la redirection vers Stripe:", error);
		}
	};

	return (
		<div>
			<NavBar logo={logoSableHenko} bgbutton="bg-sand" />
			<div className="px-10 md:px-72 flex flex-col gap-10 mb-10">
				<div className="flex flex-col gap-4">
					<HeadPages title="VOTRE PANIER" />
					<WaveSable />
				</div>

				{/* Panier */}
				<div className="bg-white  rounded-lg">
					{cart.length === 0 ? (
						<p className="text-center text-gray-500 text-lg">
							Votre panier est vide.
						</p>
					) : (
						<div className="space-y-6 0">
							{cart.map((item) => (
								<div
									key={item.id}
									className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 border border-gray-200 rounded-lg"
								>
									<div className="flex flex-col items-center md:flex-row  gap-4">
										{/* Image placeholder */}
										<div className="flex items-center justify-center rounded-lg">
											<Image
												src={cartecadeaurecto}
												alt="Produit"
												width={200}
												height={200}
												className="object-cover"
											/>
										</div>
										<div className="flex flex-col gap-4">
											<h3 className="text-lg font-tanker font-semibold text-darkolivegreen">
												{item.customizations?.prestation}
											</h3>
											<p className="text-gray-600 text-sm">
												De : {item.customizations?.from} | À :{" "}
												{item.customizations?.to}
											</p>
											<p className="text-gray-600 text-sm">
												Message : {item.customizations?.message}
											</p>
											<p className="text-sand font-bold">
												Prix : {item.price} €
											</p>
										</div>
									</div>
									<div>
										<button
											type="button"
											onClick={() => removeFromCart(item.id)}
											className="bg-sand text-white px-4 py-2 rounded-md  hover:bg-black"
										>
											Supprimer
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				{/* CGV */}
				<div className="flex items-center gap-2 mt-6">
					<input
						type="checkbox"
						id="cgv"
						checked={isCGVChecked}
						onChange={(e) => setIsCGVChecked(e.target.checked)}
						className="w-5 h-5 text-gold focus:ring-darkolivegreen border-gray-300 rounded"
					/>
					<label htmlFor="cgv" className="text-gray-700 text-sm">
						Veuillez accepter les{" "}
						<Link href="/cgv" passHref>
							<span className="text-gold underline cursor-pointer">
								Conditions Générales de Vente
							</span>
						</Link>{" "}
						avant de procéder au paiement
					</label>
				</div>

				{/* Bouton de paiement */}
				<button
					type="button"
					onClick={handleCheckout}
					className={`mt-6 w-full font-semibold text-white py-3 rounded-lg  ${
						isCGVChecked
							? "bg-darkorange hover:bg-black"
							: "bg-gray-400 cursor-not-allowed"
					}`}
					disabled={!isCGVChecked}
				>
					Passer au paiement
				</button>
			</div>
		</div>
	);
}

export default Cart;
