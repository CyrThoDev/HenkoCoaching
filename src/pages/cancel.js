// pages/cancel.js
import Link from "next/link";

const Cancel = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<h1 className=" text-red-600 text-4xl font-bold">Commande annulée</h1>
			<p className="text-lg mt-4">
				Votre paiement n&#39;a pas été complété. Vous pouvez réessayer à tout
				moment.
			</p>
			<Link href="/panier" alt="panier">
				<href className="mt-8 text-darkseagreen hover:underline">
					Retourner au panier
				</href>
			</Link>
		</div>
	);
};

export default Cancel;
