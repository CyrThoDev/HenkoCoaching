import Link from "next/link";

function ButtonOrange({ title, link, width }) {
	return (
		<Link
			href={link}
			className={`bg-darkorange text-white text-center rounded-md p-3 ${width}  `}
		>
			{title}
		</Link>
	);
}

export default ButtonOrange;
