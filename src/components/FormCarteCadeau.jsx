import { useState, useEffect } from "react";

const FormCarteCadeau = ({
	SaveCustomization,
	addedToCart,
	setAddedToCart,
}) => {
	const [formData, setFormData] = useState({
		prestation: "",
		from: "",
		to: "",
		email: "",
		message: "",
		checked: false,
		montantLibre: 0,
	});

	const prestations = [
		{ id: 1, name: "Massage relaxant 30 min", price: 40 },
		{ id: 2, name: "Massage relaxant 1h", price: 65 },
		{ id: 3, name: "Massage relaxant 1h30", price: 95 },
		{ id: 4, name: "Massage sportif 30 min", price: 45 },
		{ id: 5, name: "Massage sportif 1h", price: 70 },
		{ id: 6, name: "Massage sportif 1h30", price: 100 },
		{ id: 7, name: "Séance d'essai coaching 1h", price: 25 },
		{ id: 8, name: "Séance de coaching 1h + massage 1h", price: 95 },
		{ id: 9, name: "Forfait 10 séances de coaching", price: 350 },
		{ id: 10, name: "Accès libre 1 mois", price: 50 },
		{ id: 11, name: "Accès libre 3 mois", price: 135 },
		{ id: 12, name: "Accès libre 6 mois", price: 255 },
		{ id: 13, name: "Accès libre 12 mois", price: 480 },
		{ id: 14, name: "Montant libre", price: null },
	];

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		const updatedFormData = {
			...formData,
			[name]: type === "checkbox" ? checked : value,
		};

		if (name === "prestation") {
			const selectedPrestation = prestations.find((p) => p.name === value);
			console.info(selectedPrestation);
			updatedFormData.price = selectedPrestation
				? selectedPrestation.price
				: null;

			if (selectedPrestation.price === null) {
				updatedFormData.montantLibre = 0;
			} else {
				updatedFormData.montantLibre = null;
			}
		}

		setFormData(updatedFormData);
		console.info("updated", updatedFormData);
		SaveCustomization(updatedFormData);
	};

	useEffect(() => {
		if (addedToCart) {
			setFormData({
				prestation: "",
				from: "",
				to: "",
				email: "",
				message: "",
				checked: false,
				montantLibre: 0,
			});
			setTimeout(() => {
				setAddedToCart(false);
			}, 3000);
		}
	}, [addedToCart, setAddedToCart]);

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
					className="w-full mt-1 p-2 border border-sand text-gray-700 bg-white rounded outline-sand"
					value={formData.prestation}
					onChange={handleChange}
					required
				>
					<option value="">Sélectionnez une prestation</option>
					{prestations.map((prestation) => (
						<option key={prestation.id} value={prestation.name}>
							{prestation.name} -{" "}
							{prestation.price ? `${prestation.price} €` : "Montant libre"}
						</option>
					))}
				</select>

				{formData.price === null && (
					<div className="mt-4">
						<label
							htmlFor="montantLibre"
							className="font-semibold text-gray-700"
						>
							Saisissez le montant :
						</label>
						<input
							type="number"
							id="montantLibre"
							name="montantLibre"
							min="0"
							step="0.01"
							value={formData.montantLibre}
							onChange={handleChange}
							className="w-full mt-1 p-2 border border-sand text-gray-700 bg-white rounded outline-sand"
							placeholder="Entrez un montant"
							required
						/>
					</div>
				)}

				{formData.prestation && formData.price !== null && (
					<p className="text-sand">
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
							checked={formData.checked}
							onChange={handleChange}
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
