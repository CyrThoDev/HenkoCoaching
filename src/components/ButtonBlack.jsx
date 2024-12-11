import Link from "next/link";

function ButtonBlack({ title, link, width }) {
	return (
		<Link
			href={link}
			className={`bg-black text-white text-center self-start rounded-md p-4 ${width}  `}
		>
			{title}
		</Link>
	);
}

export default ButtonBlack;
