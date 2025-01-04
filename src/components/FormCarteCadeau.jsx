import { useState } from "react";

const FormCarteCadeau = ({ SaveCustomization }) => {
	const [formData, setFormData] = useState({
		prestation: "",
		from: "",
		to: "",
		email: "",
		message: "",
		checked: false,
	});

	const prestations = [
		{ id: "prestation1", name: "Prestation 1", price: 50 },
		{ id: "prestation2", name: "Prestation 2", price: 80 },
	];

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		const updatedFormData = {
			...formData,
			[name]: type === "checkbox" ? checked : value,
		};

		if (name === "prestation") {
			const selectedPrestation = prestations.find((p) => p.id === value);
			updatedFormData.price = selectedPrestation ? selectedPrestation.price : 0;
		}

		setFormData(updatedFormData);
		SaveCustomization(updatedFormData);
	};

	return (
		<div className=" p-4 shadow-sm rounded-sm my-10 flex flex-col gap-10 border">
			<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker">
				<span className="text-3xl z-10">Personnalisez votre cadeau</span>
				<div className="w-[12rem] h-3  bg-sand -mt-3 -z-1" />
			</h2>
			<div className="flex flex-col gap-4">
				<label htmlFor="prestation" className=" font-semibold text-gray-700">
					Prestation *
				</label>
				<select
					id="prestation"
					name="prestation"
					className="w-full mt-1 p-2 border border-gray-300 rounded outline-sand"
					value={formData.prestation}
					onChange={handleChange}
					required
				>
					<option value="">Sélectionnez une prestation</option>
					<option value="prestation1">Prestation 1</option>
					<option value="prestation2">Prestation 2</option>
				</select>

				{formData.prestation && (
					<p className=" text-sand">
						Prix : <span className="font-semibold">{formData.price} €</span>
					</p>
				)}

				<label htmlFor="from" className="font-semibold text-gray-700 ">
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

				<label htmlFor="to" className="font-semibold text-gray-700">
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

				<label htmlFor="email" className="font-semibold text-gray-700">
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

				<label htmlFor="message" className="font-semibold text-gray-700">
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
				<fieldset>
					<legend className="font-semibold">Version papier</legend>

					<div className="flex flex-row gap-2">
						<input
							type="checkbox"
							id="checked"
							name="checked"
							checked={formData.checked} // La valeur correcte
							onChange={handleChange} // Appel au gestionnaire d'événements
						/>
						<label htmlFor="checked">
							Je choisis la version papier pour 1 € de plus
						</label>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default FormCarteCadeau;
