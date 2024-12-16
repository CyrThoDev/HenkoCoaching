import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const { cart } = req.body;

			const lineItems = cart.map((item) => ({
				price_data: {
					currency: "eur",
					product_data: {
						name: item.name,
					},
					unit_amount: item.prix * 100,
				},
				quantity: item.quantity,
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
