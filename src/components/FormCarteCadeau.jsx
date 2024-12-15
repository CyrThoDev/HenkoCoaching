import { useState } from "react";
import { generatePDF, handlePreviewPDF } from "./pdfCarteCadeau";

function FormulaireCarteCadeau() {
	const [envoyerDestinataire, setEnvoyerDestinataire] = useState(false);
	const [personnaliserCarte, setPersonnaliserCarte] = useState(false);
	const [formData, setFormData] = useState({
		prestation: "",
		emailDestinataire: "",
		emailExpediteur: "",
		nomDestinataire: "",
		message: "",
	});

	const handleCheckboxChange = (e, field) => {
		const isChecked = e.target.checked;
		if (field === "envoyerDestinataire") {
			setEnvoyerDestinataire(isChecked);
			if (!isChecked) setFormData({ ...formData, emailDestinataire: "" });
		}
		if (field === "personnaliserCarte") {
			setPersonnaliserCarte(isChecked);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Appeler la logique pour générer le PDF et envoyer par email via SendGrid
		console.log("Données du formulaire :", formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-4 max-w-lg mx-auto space-y-4 bg-gray-100 rounded shadow"
		>
			<div>
				<label htmlFor="prestation" className="block text-sm font-medium">
					Choisissez une prestation :
				</label>
				<select
					name="prestation"
					id="prestation"
					onChange={handleInputChange}
					value={formData.prestation}
					className="w-full mt-1 p-2 border border-gray-300 rounded"
					required
				>
					<option value="">Sélectionnez une prestation</option>
					<option value="prestation1">Prestation 1</option>
					<option value="prestation2">Prestation 2</option>
				</select>
			</div>

			<div>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked={envoyerDestinataire}
						onChange={(e) => handleCheckboxChange(e, "envoyerDestinataire")}
						className="mr-2"
					/>
					Souhaitez-vous que la carte soit envoyée au destinataire ?
				</label>
			</div>

			{envoyerDestinataire && (
				<div>
					<label
						htmlFor="emailDestinataire"
						className="block text-sm font-medium"
					>
						Email du destinataire :
					</label>
					<input
						type="email"
						name="emailDestinataire"
						id="emailDestinataire"
						value={formData.emailDestinataire}
						onChange={handleInputChange}
						className="w-full mt-1 p-2 border border-gray-300 rounded"
						required
					/>
				</div>
			)}

			<div>
				<label htmlFor="emailExpediteur" className="block text-sm font-medium">
					Email de l&#39;expéditeur :
				</label>
				<input
					type="email"
					name="emailExpediteur"
					id="emailExpediteur"
					value={formData.emailExpediteur}
					onChange={handleInputChange}
					className="w-full mt-1 p-2 border border-gray-300 rounded"
					required
				/>
			</div>

			<div>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked={personnaliserCarte}
						onChange={(e) => handleCheckboxChange(e, "personnaliserCarte")}
						className="mr-2  checked:bg-darkorange focus:ring-2 focus:ring-darkorange"
					/>
					Souhaitez-vous personnaliser la carte ?
				</label>
			</div>

			{personnaliserCarte && (
				<div>
					<div>
						<label
							htmlFor="nomDestinataire"
							className="block text-sm font-medium"
						>
							Prénom et/ou nom du destinataire
						</label>
						<input
							type="text"
							name="nomDestinataire"
							id="nomDestinataire"
							value={formData.nomDestinataire}
							onChange={handleInputChange}
							className="w-full mt-1 p-2 border border-gray-300 rounded"
							required
						/>
					</div>
					<label htmlFor="message" className="block text-sm font-medium">
						Message personnalisé :
					</label>
					<textarea
						name="message"
						id="message"
						rows="4"
						value={formData.message}
						onChange={handleInputChange}
						className="w-full mt-1 p-2 border border-gray-300 rounded"
					/>
				</div>
			)}
			<button
				type="button"
				onClick={() => handlePreviewPDF(formData)}
				className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
			>
				Prévisualiser le PDF
			</button>

			<button
				type="submit"
				className="w-full py-2 px-4 bg-darkorange text-white rounded hover:opacity-80"
			>
				Envoyer
			</button>
		</form>
	);
}

export default FormulaireCarteCadeau;
