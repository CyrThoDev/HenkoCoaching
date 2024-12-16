import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Image from "next/image";
import logoHenkoOrange from "@images/logoHenkoOrange.svg";
import { useState } from "react";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

const Cart = () => {
	// const { cart, clearCart } = useCart();
	// const [isCGVChecked, setIsCGVChecked] = useState(false);
	// const handleCheckout = async () => {
	// 	const stripe = await stripePromise;
	// 	try {
	// 		const response = await axios.post("/api/create-checkout-session", {
	// 			cart,
	// 		});
	// 		const sessionId = response.data.id;
	// 		await stripe.redirectToCheckout({ sessionId });
	// 	} catch (error) {
	// 		console.error("Erreur lors de la redirection vers Stripe:", error);
	// 	}
	// };
	// return (
	// 	<div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
	// 		<div className="flex justify-center items-center flex-col pt-14">
	// 			<h1 className=" text-darkolivegreen text-5xl font-qwigley mb-1 text-center">
	// 				Votre Panier
	// 			</h1>
	// 			<div className="align-center w-[10rem] lg:w-[20rem] rounded-md  bg-gold h-[0.25rem] mb-6" />
	// 		</div>
	// 		{cart.length > 0 ? (
	// 			<div className="max-w-4xl mx-auto  p-6 rounded-lg shadow-md">
	// 				{cart.map((item) => (
	// 					<div
	// 						key={`${item.id}`}
	// 						className="flex flex-col md:flex-row gap-4 lg:gap-0 items-center justify-between py-4 border-b border-gray-200"
	// 					>
	// 						<div className="w-full flex flex-row justify-start  items-center lg:basis-2/4">
	// 							<div className=" bg-gray-200 rounded-lg">
	// 								<Image
	// 									src={logoHenkoOrange}
	// 									alt="Logo"
	// 									height={80}
	// 									width={80}
	// 								/>
	// 							</div>
	// 							<div className=" ml-4">
	// 								<h2 className="text-lg font-semibold">{item.name}</h2>
	// 								<p className="text-gray-600">
	// 									{item.prix} € - {item.prestation}
	// 								</p>
	// 							</div>
	// 						</div>
	// 						<div className="flex items-center basis-1/4">
	// 							<button
	// 								type="button"
	// 								onClick={() => decreaseQuantity(item.id, item.prestation)}
	// 								className="text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center"
	// 							>
	// 								-
	// 							</button>
	// 							<span className="px-2 text-lg bg-bgend rounded-full font-semibold">
	// 								{item.quantity}
	// 							</span>
	// 							<button
	// 								type="button"
	// 								onClick={() => increaseQuantity(item.id, item.prestation)}
	// 								className="text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center"
	// 							>
	// 								+
	// 							</button>
	// 						</div>
	// 						<button
	// 							type="button"
	// 							onClick={() => removeFromCart(item.id, item.prestation)}
	// 							className=" text-red-500 hover:text-red-700 font-semibold text-sm"
	// 						>
	// 							Supprimer
	// 						</button>
	// 					</div>
	// 				))}
	// 				<div className="mt-6 flex flex-col md:flex-row gap-4 justify-between items-center">
	// 					<button
	// 						type="button"
	// 						onClick={clearCart}
	// 						className="text-black bg-gold px-4 py-2 rounded-md shadow-sm"
	// 					>
	// 						Vider le panier
	// 					</button>
	// 					<div className="text-xl font-bold text-gray-800">
	// 						Total :{" "}
	// 						{cart
	// 							.reduce((total, item) => total + item.prix * item.quantity, 0)
	// 							.toFixed(2)}{" "}
	// 						€
	// 					</div>
	// 				</div>
	// 				<div className="mt-6 flex flex-col items-start">
	// 					<div className="flex items-center gap-2">
	// 						<input
	// 							type="checkbox"
	// 							id="cgv"
	// 							checked={isCGVChecked}
	// 							onChange={(e) => setIsCGVChecked(e.target.checked)}
	// 							className="w-5 h-5 text-gold focus:ring-darkolivegreen border-gray-300 rounded"
	// 						/>
	// 						<label htmlFor="cgv" className="text-gray-700 text-sm">
	// 							Veuillez accepter les{" "}
	// 							<Link href="/cgv" passHref>
	// 								<span className="text-gold underline cursor-pointer">
	// 									Conditions Générales de Vente
	// 								</span>
	// 							</Link>{" "}
	// 							avant de procéder au paiement
	// 						</label>
	// 					</div>
	// 					<button
	// 						type="button"
	// 						onClick={handleCheckout}
	// 						className={`mt-6 w-full font-semibold text-gray bg-darkolivegreen py-3 rounded-lg shadow-md ${
	// 							isCGVChecked
	// 								? "bg-darkolivegreen hover:bg-lightgreen"
	// 								: "bg-gray-400 cursor-not-allowed"
	// 						}`}
	// 						disabled={!isCGVChecked}
	// 					>
	// 						Passer au paiement
	// 					</button>
	// 				</div>
	// 			</div>
	// 		) : (
	// 			<p className="text-center text-gray-500 text-lg">
	// 				Votre panier est vide.
	// 			</p>
	// 		)}
	// 	</div>
	// );
};

export default Cart;
