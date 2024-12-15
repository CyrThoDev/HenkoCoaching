import Link from "next/link";

function ButtonSable({ title, link, width }) {
	return (
		<Link
			href={link}
			className={`bg-sand text-white text-center rounded-md p-3 ${width}  `}
		>
			{title}
		</Link>
	);
}

export default ButtonSable;
