import Link from "next/link";

function ButtonOrange({ title, link, width }) {
	return (
		<Link
			href={link}
			className={`bg-darkorange text-white text-center self-start  rounded-md p-2 ${width}  `}
		>
			{title}
		</Link>
	);
}

export default ButtonOrange;
