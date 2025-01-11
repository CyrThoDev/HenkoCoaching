import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonOrange from "./ButtonOrange";

const Actualites = ({ news, urlFor }) => {
	const dialogRef = useRef(null);
	const [hasScrolled, setHasScrolled] = useState(false);

	const closeDialog = () => {
		if (dialogRef.current) {
			dialogRef.current.close(); // Ferme la boîte de dialogue
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 500 && !hasScrolled) {
				setHasScrolled(true);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [hasScrolled]);

	useEffect(() => {
		if (hasScrolled && dialogRef.current) {
			dialogRef.current.showModal();
		}
	}, [hasScrolled]);

	return (
		<div className="flex flex-col ">
			<dialog
				ref={dialogRef}
				className=" rounded-lg py-20 shadow-lg max-w-screen-xs  md:max-w-screen-md w-full  text-white bg-black opacity-95 "
			>
				<div className=" flex flex-col items-center gap-14">
					<h2 className=" relative flex-col text-2xl lg:text-3xl font-qwigley px-10 text-center inline-flex">
						Bénéficiez de -10% sur votre première séance de coaching
					</h2>
					<ButtonOrange
						title="RESERVER MA PREMIERE SEANCE"
						link="https://calendly.com/henkocoaching/coaching-essai-1h"
						width=" w-[15rem] md:w-[18rem]"
					/>
				</div>
				<button
					type="button"
					onClick={closeDialog}
					className="absolute top-2 right-2 bg-transparent text-black p-2 rounded-full transition hover:bg-gray-200"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="white"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</dialog>
		</div>
	);
};

export default Actualites;
