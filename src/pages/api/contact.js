import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Méthode non autorisée" });
	}

	const { firstname, name, phone, email, reason, message } = req.body;

	if (!name || !email || !message) {
		return res
			.status(400)
			.json({ message: "Les champs name, email ou message sont requis" });
	}

	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: `"Henko Coaching" <${process.env.EMAIL_USER}>`, // Utilisez une adresse de domaine propre
			replyTo: `${email}`, // Adresse de l'utilisateur
			to: process.env.EMAIL_TO,
			subject: `${reason} - ${firstname} ${name} demande des informations`,
			text: `
        Nouvelle demande de contact :
        Nom : ${firstname} ${name}
        Email : ${email}
        Téléphone : ${phone || "Non renseigné"}
        Motif : ${reason}
        Message : ${message}
      `,
			html: `
        <h3 style="color: #B6573B;">Nouvelle demande de contact depuis le site</h3>
        <p><strong>Nom :</strong> ${firstname} ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Motif :</strong> ${reason}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr />
        <p style="font-size: 0.9em; color: #B6573B;">
          Cet email a été envoyé depuis le formulaire de contact.
        </p>
      `,
		};

		await transporter.sendMail(mailOptions);

		res.status(200).json({ message: "Email envoyé avec succès !" });
	} catch (error) {
		console.error("Erreur lors de l'envoi de l'email :", error);
		res
			.status(500)
			.json({ message: "Erreur serveur. Veuillez réessayer plus tard." });
	}
}
