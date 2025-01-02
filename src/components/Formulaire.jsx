import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import MapsGoogle from "./MapsGoogle";

function Formulaire({ bgColor, labelColor, borderColor }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [isSended, setIsSended] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const router = useRouter();

	// Détermine si le formulaire est pour la location en fonction de la route
	const isLocationForm = router.pathname === "/locationespacepro";

	const onSubmitHandler = async (data) => {
		if (!isLoading) {
			setIsLoading(true);
			setErrorMessage("");

			try {
				const response = await axios.post("/api/contact", data, {
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (response.status === 200) {
					setIsSended(true);
					reset();
				} else {
					setErrorMessage("Une erreur est survenue, veuillez réessayer.");
				}
			} catch (error) {
				setErrorMessage(
					"Erreur lors de l'envoi. Veuillez vérifier vos informations et réessayer.",
				);
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	return (
		<div className={`${bgColor} px-10 lg:px-20 py-10`} id="contact">
			{/* <h2 className="text-3xl font-tanker text-start text-white pb-4">
				CONTACTEZ-MOI
			</h2> */}
			<div className=" flex flex-col lg:flex-row  items-center gap-10">
				<div className="w-full basis-1/2 h-auto">
					<MapsGoogle />
				</div>

				<div className="flex flex-col lg:basis-1/2 gap-4">
					<form
						onSubmit={handleSubmit(onSubmitHandler)}
						className="flex flex-col gap-2 lg:basis-1/2"
					>
						<div className="grid grid-cols-2 gap-4">
							<label htmlFor="firstname" className={`${labelColor}`}>
								Prénom *
								<input
									className={`border ${borderColor} text-black bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500`}
									placeholder="Votre prénom"
									{...register("firstname", {
										required: "Ce champ est requis.",
									})}
								/>
								{errors.firstname && (
									<span className="text-red-500">
										{errors.firstname.message}
									</span>
								)}
							</label>

							<label htmlFor="name" className={`${labelColor}`}>
								Nom *
								<input
									className={`border ${borderColor} text-black bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500`}
									placeholder="Votre nom"
									{...register("name", { required: "Ce champ est requis." })}
								/>
								{errors.name && (
									<span className="text-red-500">{errors.name.message}</span>
								)}
							</label>
						</div>

						<label htmlFor="phone" className={`${labelColor}`}>
							Téléphone
							<input
								className={`border ${borderColor} text-black bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500`}
								placeholder="06 / 07 ..."
								{...register("phone")}
							/>
						</label>

						<label htmlFor="email" className={`${labelColor}`}>
							Email *
							<input
								className={`border ${borderColor} text-black bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500`}
								placeholder="Votre email"
								{...register("email", {
									required: "Ce champ est requis.",
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Adresse email invalide.",
									},
								})}
							/>
							{errors.email && (
								<span className="text-red-500">{errors.email.message}</span>
							)}
						</label>

						{isLocationForm ? (
							<input
								type="hidden"
								value="Location d'espace professionnel"
								{...register("reason")}
							/>
						) : (
							<label htmlFor="reason" className={`${labelColor}`}>
								Motif de votre demande de contact
								<select
									className="border text-black border-white bg-white rounded-md p-2 w-full outline-none"
									{...register("reason", { required: "Ce champ est requis." })}
								>
									<option value="" className="text-gray-500">
										--Merci de choisir un motif--
									</option>
									<option value="coaching">Coaching</option>
									<option value="massage">Massage</option>
									<option value="acceslibre">Accès libre</option>
									<option value="location">
										Location d&#39;espace professionnel
									</option>
								</select>
								{errors.reason && (
									<span className="text-red-500">{errors.reason.message}</span>
								)}
							</label>
						)}

						<label htmlFor="message" className={`${labelColor}`}>
							Votre message *
							<textarea
								className={`border ${borderColor} text-black bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500`}
								rows="5"
								placeholder="Bonjour..."
								{...register("message", { required: "Ce champ est requis." })}
							/>
							{errors.message && (
								<span className="text-red-500">{errors.message.message}</span>
							)}
						</label>

						<input
							type="submit"
							className={`bg-black rounded-xl py-3 w-full text-white ${
								isLoading
									? "opacity-50 cursor-not-allowed"
									: "hover:bg-lightgreen"
							}`}
							value={isLoading ? "Envoi en cours..." : "Envoyer"}
							disabled={isLoading}
						/>

						{isSended && (
							<p className="text-black mt-2">
								Votre message a bien été envoyé. Nous vous répondrons
								rapidement.
							</p>
						)}
						{errorMessage && (
							<p className="text-red-500 mt-2">{errorMessage}</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Formulaire;
