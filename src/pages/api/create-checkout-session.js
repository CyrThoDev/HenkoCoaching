import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const { cart } = req.body;
		

			if (!cart || cart.length === 0) {
				return res.status(400).json({ error: "Le panier est vide." });
			}

			const customizationsDetails = cart.map((item) => item.customizations);
	

			const lineItems = cart.map((item) => ({
				price_data: {
					currency: "eur",
					product_data: {
						name: item.customizations.prestation || "KDO",
						metadata: {
							Prestation:
								item.customizations.prestation || "KDO",
							De: item.customizations.from || "Default Sender",
							Pour: item.customizations.to || "Default Recipient",
							email: item.customizations.email || "default@example.com",
							message: item.customizations.message || "No message provided",
						},
					},
					unit_amount: item.price * 100,
				},
				quantity: 1,
			}));

			const session = await stripe.checkout.sessions.create({
				payment_method_types: ["card"],
				line_items: lineItems,
				mode: "payment",
				success_url: `${req.headers.origin}/success`,
				cancel_url: `${req.headers.origin}/panier`,
			});

			res.status(200).json({ id: session.id });
		} catch (error) {
			console.error("Erreur Stripe:", error);
			res
				.status(500)
				.json({ error: "Erreur lors de la création de la session Stripe" });
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
