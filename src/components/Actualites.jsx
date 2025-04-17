import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonOrange from "./ButtonOrange";
import ButtonSable from "./ButtonSable";
import inaugurationDesktop from "@images/inaugurationHenkoDesktop.png";
import inaugurationMobile from "@images/inaugurationHenkoMobile.png";

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
			if (window.scrollY >= 500 && !hasScrolled && window.scrollY < 1000) {
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
		<div className="flex flex-col -mt-20 ">
			<dialog
				ref={dialogRef}
				className=" rounded-lg py-20 shadow-lg max-w-screen-sm  md:max-w-screen-lg  w-full  text-white bg-black opacity-99 "
			>
				<div className=" flex flex-col items-center gap-10">
					<div className="flex flex-col gap-4">
						<Image
							src={inaugurationDesktop}
							width={800}
							height={"auto"}
							className="hidden md:block w-auto shadow-perso shadow-darkorange rounded-sm"
							alt="inauguration Henko Coaching version desktop"
						/>
						<Image
							src={inaugurationMobile}
							width={"auto"}
							height={"auto"}
							className="block md:hidden w-auto p-4 shadow-perso shadow-darkorange rounded-sm"
							alt="inauguration Henko Coaching version mobile"
						/>
					</div>
					<div className="flex flex-col md:flex-row gap-4">
						<ButtonOrange
							title="JE RESERVE UN COACHING"
							link="https://calendly.com/henkocoaching/jpo-henkocoachingmimizan"
							width=" w-[15rem] md:w-[18rem]"
						/>
						<ButtonSable
							title="JE RESERVE UN MASSAGE"
							link="https://calendly.com/henkocoaching/inauguration-henko-coaching-10-mai-2025-massage"
							width=" w-[15rem] md:w-[18rem]"
						/>
					</div>
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
