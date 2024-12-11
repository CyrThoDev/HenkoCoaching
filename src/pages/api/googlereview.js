import axios from "axios";

export default async function handler(req, res) {
	try {
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACES}&fields=reviews&key=${process.env.GOOGLE_API}&language=fr`,
		);
		// Envoie les avis en réponse à la requête
		res.status(200).json(response.data.result.reviews);
	} catch (error) {
		console.error("Erreur lors de la récupération des avis Google:", error);
		res.status(500).json({ error: "Erreur lors de la récupération des avis" });
	}
}
