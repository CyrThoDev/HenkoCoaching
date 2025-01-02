import { useCart } from "@/context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import logoHenkoOrange from "@images/logoHenkoOrange.svg";
import NavBar from "@/components/NavBar";
import HeadPages from "@/components/HeadPages";
import WaveOrange from "@/components/WaveOrange";
import logoOrange from "@images/logoHenkoOrange.svg";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

// A METTRE DANS LE PANIER
// const handleCheckout = async () => {
// 	const stripe = await stripePromise;
// 	try {
// 		const response = await axios.post("/api/create-checkout-session", {
// 			cart,
// 			customizations,
// 		});
// 		const sessionId = response.data.id;
// 		await stripe.redirectToCheckout({ sessionId });
// 	} catch (error) {
// 		console.error("Erreur lors de la redirection vers Stripe:", error);
// 	}
// };
function Cart() {
	const { cart, removeFromCart } = useCart();
	const [isCGVChecked, setIsCGVChecked] = useState(false);
	return (
		<div>
			<NavBar logo={logoOrange} />
			<div className="px-10 lg:px-20 flex flex-col gap-20">
				<div className="flex flex-col gap-10">
					<HeadPages title="VOTRE PANIER" />
					<WaveOrange />
				</div>
			</div>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						<p>Type : {item.type}</p>
						<p>De : {item.customizations?.from}</p>
						<p>À : {item.customizations?.to}</p>
						<p>Message : {item.customizations?.message}</p>
						<button type="button" onClick={() => removeFromCart(item.id)}>
							Supprimer
						</button>
					</li>
				))}
			</ul>
			<div className="flex items-center gap-2">
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
		</div>
	);
}

export default Cart;
