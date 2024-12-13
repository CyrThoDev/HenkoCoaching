import jsPDF from "jspdf";

const generatePDF = (formData) => {
	const doc = new jsPDF({
		orientation: "landscape", // "portrait" ou "landscape"
		unit: "mm", // Unités : "mm", "cm", "in", "pt"
		format: "a5", // Formats : "a3", "a4", "a5", "letter", "legal" ou personnalisé
	});

	// Couleur de fond
	doc.setFillColor(181, 122, 80); // Couleur marron (approximation)
	doc.rect(0, 0, 85, 55, "F");

	// Titre
	doc.setFont("helvetica", "bold");
	doc.setFontSize(24);
	doc.setTextColor(0, 102, 204); // Bleu
	doc.text("Carte Cadeau", 105, 30, { align: "center" });
	// Ajouter une image (par exemple, un logo)
	const logoURL = "/images/orangeArrow.webp"; // URL de l'image
	doc.addImage(logoURL, "WEBP", 150, 10, 40, 40); // Position et taille de l'image

	// Ligne noire
	doc.setDrawColor(0, 0, 0); // Noir
	doc.setLineWidth(1);
	doc.line(10, 30, 75, 30);

	// Texte : "Un cadeau pour :"
	doc.setFont("helvetica", "normal");
	doc.setFontSize(10);
	doc.setTextColor(255, 255, 255); // Blanc
	doc.text("Un cadeau pour :", 15, 37);

	// Champ 1 : Nom du destinataire
	doc.setDrawColor(255, 255, 255);
	doc.rect(50, 33, 25, 5); // Champ rectangulaire

	doc.setFont("helvetica", "normal");
	doc.setFontSize(10);
	doc.setTextColor(255, 255, 255);
	const baseText = "De la part de :";
	doc.text(baseText, 15, 45);

	// Calcul de la position dynamique pour le texte suivant
	const textWidth = doc.getTextWidth(baseText); // Largeur du texte "De la part de :"

	// Texte dynamique : Nom de l'expéditeur
	doc.setFont("helvetica", "bold"); // Changer de style pour le contenu dynamique
	doc.text(formData.nomExpediteur || "Non spécifié", 15 + textWidth + 2, 45); // Ajouter avec un petit espace (2mm)
	// Champ 2 : Nom de l'expéditeur
	doc.rect(50, 41, 25, 5);

	// Texte : Coordonnées en bas
	doc.setFontSize(8);
	doc.setTextColor(255, 255, 255); // Blanc
	doc.text(
		"43 av Maurice Martin, 40200 Mimizan\nTél 0640451745 - www.henkocoachingmimizan.fr",
		10,
		52,
	);
	return doc.output("blob");
};
export const handlePreviewPDF = (formData) => {
	const pdfBlob = generatePDF(formData); // Générer le PDF
	const pdfUrl = URL.createObjectURL(pdfBlob); // Créer une URL temporaire

	// Ouvrir le PDF dans une nouvelle fenêtre ou onglet
	window.open(pdfUrl);

	// Facultatif : Libérer l'URL après usage pour éviter les fuites mémoire
	setTimeout(() => URL.revokeObjectURL(pdfUrl), 10000);
};
