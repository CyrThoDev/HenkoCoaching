import { useForm } from "react-hook-form";

function FormCarteCadeau({ onSubmit, isLoading, isSended, errorMessage }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const envoyerDestinataire = watch("envoyerDestinataire", false);
	const personnaliserCarte = watch("personnaliserCarte", false);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="p-4 flex flex-col gap-8 rounded basis-1/2"
		>
			<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker">
				<span className="text-3xl z-10">Personnalisez votre carte</span>
				<div className="w-[12rem] h-3  bg-sand -mt-3 -z-1" />
			</h2>
			<div>
				<label htmlFor="prestation" className="text-sm font-medium">
					Choisissez une prestation :
				</label>
				<select
					id="prestation"
					{...register("prestation", { required: "Ce champ est requis." })}
					className="w-full mt-1 p-2 border border-gray-300 rounded"
				>
					<option value="">Sélectionnez une prestation</option>
					<option value="prestation1">Prestation 1</option>
					<option value="prestation2">Prestation 2</option>
				</select>
				{errors.prestation && (
					<span className="text-red-500">{errors.prestation.message}</span>
				)}
			</div>
			{/* Checkbox pour envoyer au destinataire */}
			<div>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						{...register("envoyerDestinataire")}
						className="mr-2"
					/>
					Souhaitez-vous que la carte soit envoyée au destinataire ?
				</label>
			</div>
			{/* Champ Email destinataire */}
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
						id="emailDestinataire"
						className="w-full mt-1 p-2 border border-gray-300 rounded"
						{...register("emailDestinataire", {
							required: "Ce champ est requis.",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Adresse email invalide.",
							},
						})}
					/>
					{errors.emailDestinataire && (
						<span className="text-red-500">
							{errors.emailDestinataire.message}
						</span>
					)}
				</div>
			)}
			{/* Email de l&#39;expéditeur */}
			<div>
				<label htmlFor="emailExpediteur" className="block text-sm font-medium">
					Email de l&#39;expéditeur :
				</label>
				<input
					type="email"
					id="emailExpediteur"
					className="w-full mt-1 p-2 border border-gray-300 rounded"
					{...register("emailExpediteur", {
						required: "Ce champ est requis.",
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: "Adresse email invalide.",
						},
					})}
				/>
				{errors.emailExpediteur && (
					<span className="text-red-500">{errors.emailExpediteur.message}</span>
				)}
			</div>
			{/* Checkbox personnaliser la carte */}
			<div>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						{...register("personnaliserCarte")}
						className="mr-2"
					/>
					Souhaitez-vous personnaliser la carte ?
				</label>
			</div>
			{/* Personnalisation */}
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
							id="nomDestinataire"
							className="w-full mt-1 p-2 border border-gray-300 rounded"
							{...register("nomDestinataire", {
								required: "Ce champ est requis.",
							})}
						/>
						{errors.nomDestinataire && (
							<span className="text-red-500">
								{errors.nomDestinataire.message}
							</span>
						)}
					</div>
					<label htmlFor="message" className="block text-sm font-medium">
						Message personnalisé :
					</label>
					<textarea
						id="message"
						rows="4"
						className="w-full mt-1 p-2 border border-gray-300 rounded"
						{...register("message")}
					/>
				</div>
			)}
			{/* Bouton Submit */}
			<input
				type="submit"
				className={`w-full py-2 px-4 bg-sand text-white rounded ${
					isLoading ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
				}`}
				value={isLoading ? "..." : "Envoyer"}
				disabled={isLoading}
			/>
			{/* {isSended && (
				<p className="text-green-600 mt-2">
					Votre formulaire a été envoyé avec succès.
				</p>
			)} */}
			{errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
		</form>
	);
}

export default FormCarteCadeau;
