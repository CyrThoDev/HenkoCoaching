import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Success = () => {
	const { clearCart } = useCart();
	useEffect(() => {
		console.log("clear cart dans sucess");
		clearCart();
	}, [clearCart]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<h1 className=" text-sand text-4xl font-bold">
				Merci pour votre achat !
			</h1>
			<p className="text-lg mt-4">
				Votre commande a été traitée avec succès. Vous recevrez bientôt un email
				de confirmation.
			</p>
			<Link href="/">
				<href className="mt-8 text-sand hover:underline">
					Retourner à l&#39;accueil
				</href>
			</Link>
		</div>
	);
};

export default Success;
