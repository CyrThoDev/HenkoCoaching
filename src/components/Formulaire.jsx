import { Form, FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
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
			className="px-10 lg:px-20 py-10 flex flex-col lg:flex-row bg-darkorange "
			id="contact"
		>
			<div className="basis-1/2">coucou</div>
			<form
				onSubmit={handleSubmit(onSubmitHandler)}
				className="flex flex-col gap-2 basis-1/2"
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
						className="flex flex-col gap-2 border border-black bg-darkorange rounded-md p-2 w-full outline-none placeholder:text-black"
						placeholder="06 / 07 ..."
						{...register("phone")}
					/>
				</label>

				<label htmlFor="email">
					Email *
					<input
						className="flex flex-col gap-2 border border-black bg-darkorange rounded-md p-2 w-full outline-none placeholder:text-black"
						placeholder="Votre email"
						{...register("email", { required: true })}
					/>
				</label>

				<label htmlFor="raison de la demande">
					Motif de votre demande de contact
					<select
						name="reason"
						id="reason-select"
						className="flex flex-col gap-2 border border-black bg-darkorange rounded-md p-2 w-full outline-none placeholder:text-black"
						{...register("reason")}
					>
						<option value="">--Merci de choisir un motif--</option>
						<option value="dog">Coaching</option>
						<option value="cat">Massage</option>
						<option value="hamster">Accès libre</option>
					</select>
				</label>

				<label htmlFor="message">
					Votre message *
					<textarea
						className="flex flex-col gap-2 border border-black bg-darkorange rounded-md p-2 w-full outline-none placeholder:text-black"
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
	);
}

export default Formulaire;
