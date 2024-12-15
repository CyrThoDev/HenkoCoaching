import Link from "next/link";

function ButtonBlack({ title, link, width }) {
	return (
		<Link
			href={link}
			className={`bg-black text-white text-center rounded-md p-3 ${width}`}
		>
			{title}
		</Link>
	);
}

export default ButtonBlack;
