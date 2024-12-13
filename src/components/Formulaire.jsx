import { Form, FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import MapsGoogle from "./MapsGoogle";
function Formulaire() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [isSended, setIsSended] = useState(false);

	const onSubmitHandler = async (data) => {
		if (!isLoading) {
			setIsLoading(true);
			const datatosend = JSON.stringify(data);
			const response = await axios.post("/api/contact", datatosend, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
			// const result = await response.json();
			setIsLoading(false);

			if (response.status !== 200) {
				console.log("error");
			} else {
				console.log("ok");
				reset();
				setIsSended(true);
			}
		}
	};
	return (
		<div
			className="px-10 lg:px-20 py-10 flex flex-col lg:flex-row bg-darkorange items-center gap-10 "
			id="contact"
		>
			<div className="w-full basis-1/2 flex-1">
				<MapsGoogle />
			</div>

			<div className="flex flex-col lg:basis-1/2 gap-4 ">
				<form
					onSubmit={handleSubmit(onSubmitHandler)}
					className="flex flex-col gap-2 lg:basis-1/2"
				>
					<div className="grid grid-cols-2 gap-4 ">
						<label htmlFor="firstname">
							Prénom *
							<input
								className="flex flex-col gap-2 border border-white bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500"
								placeholder="Votre prénom"
								{...register("firstname", { required: true })}
							/>
						</label>

						<label htmlFor="name">
							Nom *
							<input
								className="flex flex-col gap-2 border border-white bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500 "
								placeholder="Votre nom"
								{...register("name", { required: true })}
							/>
						</label>
					</div>

					<label htmlFor="téléphone">
						Téléphone
						<input
							className="flex flex-col gap-2 border border-white bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500"
							placeholder="06 / 07 ..."
							{...register("phone")}
						/>
					</label>

					<label htmlFor="email">
						Email *
						<input
							className="flex flex-col gap-2 border border-white bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500"
							placeholder="Votre email"
							{...register("email", { required: true })}
						/>
					</label>

					<label htmlFor="raison de la demande">
						Motif de votre demande de contact
						<select
							name="reason"
							id="reason-select"
							className="flex flex-col gap-2 border border-white bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500"
							{...register("reason")}
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
					</label>

					<label htmlFor="message">
						Votre message *
						<textarea
							className="flex flex-col gap-2 border border-white bg-white rounded-md p-2 w-full outline-none placeholder:text-gray-500"
							rows="5"
							placeholder="Bonjour..."
							{...register("message", { required: true })}
						/>
					</label>

					<input
						type="submit"
						className="bg-black rounded-xl  py-3 w-full hover:bg-lightgreen text-white"
					/>
					{isSended && (
						<p className="text-white">
							Votre message a bien été envoyé avec succès nous vous répondrons
							rapidement.
						</p>
					)}
				</form>
			</div>
		</div>
	);
}

export default Formulaire;
