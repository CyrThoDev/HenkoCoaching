import WaveOrange from "./WaveOrange";

const HeadPages = ({ title }) => {
	return (
		<div className="px-10 lg:px-20 flex flex-col gap-20 mt-10">
			<h1 className="text-center font-tanker text-4xl">{title}</h1>
		</div>
	);
};

export default HeadPages;
