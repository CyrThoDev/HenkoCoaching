import { useState } from "react";

const FormCarteCadeau = ({ SaveCustomization }) => {
	const [formData, setFormData] = useState({
		prestation: "",
		from: "",
		to: "",
		email: "", // Adresse email pour l'envoi
		message: "", // Message facultatif
	});

	const prestations = [
		{ id: "prestation1", name: "Prestation 1", price: 50 },
		{ id: "prestation2", name: "Prestation 2", price: 80 },
	];

	const handleChange = (e) => {
		const { name, value } = e.target;

		const updatedFormData = { ...formData, [name]: value };

		if (name === "prestation") {
			const selectedPrestation = prestations.find((p) => p.id === value);
			updatedFormData.price = selectedPrestation ? selectedPrestation.price : 0;
		}

		setFormData(updatedFormData);
		SaveCustomization(updatedFormData);
	};

	return (
		<div className="p-4  shadow-md rounded-sm border border-gold mt-10 mb-10">
			<h2 className="text-xl font-semibold mb-4   text-darkolivegreen">
				Personnalisez votre carte cadeau
			</h2>
			<div>
				<label
					htmlFor="prestation"
					className="block text-sm font-medium text-gray-700"
				>
					Prestation *
				</label>
				<select
					id="prestation"
					name="prestation"
					className="w-full mt-1 p-2 border border-gray-300 rounded"
					value={formData.prestation}
					onChange={handleChange}
					required
				>
					<option value="">Sélectionnez une prestation</option>
					<option value="prestation1">Prestation 1</option>
					<option value="prestation2">Prestation 2</option>
				</select>
			</div>
			<div className="mt-4">
				{formData.prestation && (
					<p className="text-sm text-gray-700">
						Prix : <span className="font-semibold">{formData.price} €</span>
					</p>
				)}
			</div>
			<div className="mb-4">
				<label
					htmlFor="from"
					className="block text-sm font-medium  text-gray-700 "
				>
					De la part de : *
				</label>
				<input
					type="text"
					id="from"
					name="from"
					value={formData.from}
					onChange={handleChange}
					className="mt-1 block w-full  bg-transparent rounded-sm  border-b-[0.05rem] border-darkseagreen focus:outline-none"
					placeholder="Votre nom"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="to"
					className="block text-sm   font-medium text-gray-700"
				>
					Pour : *
				</label>
				<input
					type="text"
					id="to"
					name="to"
					value={formData.to}
					onChange={handleChange}
					className="mt-1 block w-full  bg-transparent rounded-sm  border-b-[0.05rem] border-darkseagreen focus:outline-none"
					placeholder="Nom du destinataire"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-sm font-medium   text-gray-700"
				>
					Adresse email : *
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className="mt-1 block w-full  bg-transparent rounded-sm  border-b-[0.05rem] border-darkseagreen focus:outline-none"
					placeholder="Email du destinataire"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="message"
					className="block text-sm font-medium   text-gray-700"
				>
					Message (optionnel) :
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					className="mt-1 block w-full  bg-transparent rounded-sm  border-b-[0.05rem] border-darkseagreen focus:outline-none"
					placeholder="Ajoutez un message personnel"
				/>
			</div>
		</div>
	);
};

export default FormCarteCadeau;
