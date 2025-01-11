import Link from "next/link";

function ButtonBlack({ title, link, width }) {
	return (
		<Link
			href={link}
			className={`bg-black text-white text-center rounded-md py-3 px-4 ${width} block focus:outline-none`}
			target="_blank"
		>
			{title}
		</Link>
	);
}

export default ButtonBlack;
