import { useState } from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyPopup({ url, title, color, width }) {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* Bouton pour ouvrir la popup */}
			<button
				type="button"
				onClick={togglePopup}
				className={`${color} text-white text-center rounded-md p-3 hover:bg-opacity-80 ${width}`}
			>
				{title}
			</button>

			{isOpen && (
				<div className=" fixed top-48 lg:top-0 inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl ">
						<button
							type="reset"
							onClick={togglePopup}
							className="absolute top-20 lg:top-0 right-4 text-gray-600 hover:text-gray-900 text-3xl  font-bold z-50"
							aria-label="Fermer"
						>
							&times;
						</button>

						<div className="flex flex-col md:flex-row gap-4 ">
							<div className="flex flex-col gap-8 basis-1/2 bg-white p-4 rounded-lg">
								<h2 className="text-xl font-bold mb-4 font-tanker">
									À propos de la réservation
								</h2>
								<p>
									Veuillez sélectionner une date et une heure pour votre
									réservation. Une confirmation vous sera envoyée par e-mail une
									fois la réservation effectuée.
								</p>
								<p className="italic">
									Si vous ne souhaitez pas régler en ligne, merci de me
									contacter pour convenir d&#39;un autre mode de règlement avant
									votre séance.
								</p>
							</div>

							<div className="flex justify-center items-center h-full w-full">
								<InlineWidget
									url={url}
									styles={{
										height: "500px",
										width: "100%",
									}}
									pageSettings={{
										primaryColor: "#B6573B",
										textColor: "#1E1E1E",
										backgroundColor: "#F2F0EC",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
