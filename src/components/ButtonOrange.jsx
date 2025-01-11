import Link from "next/link";

function ButtonOrange({ title, link, width }) {
	return (
		<Link
			href={link}
			className={`bg-darkorange text-white text-center rounded-md py-3 px-4 ${width} block focus:outline-none `}
			target="_blank"
			rel="noopener noreferrer"
		>
			{title}
		</Link>
	);
}

export default ButtonOrange;
