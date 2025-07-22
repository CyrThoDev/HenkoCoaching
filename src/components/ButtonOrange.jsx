function ButtonOrange({ title, link, width }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={`bg-darkorange text-white text-center rounded-md py-3 px-4 ${width} block focus:outline-none`}
		>
			{title}
		</a>
	);
}

export default ButtonOrange;
