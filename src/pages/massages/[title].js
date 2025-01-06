import { useRouter } from "next/router";
import { prestations } from "@/data/data";
import logoSable from "@images//logoSableHenko.webp";
import NavBar from "@/components/NavBar";
import Image from "next/image";

const PrestationCard = () => {
	const router = useRouter();
	const { title } = router.query;

	const prestationDetail = prestations.find((p) => p.title === title);

	if (!prestationDetail) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<NavBar logo={logoSable} />
			<div className="p-4 shadow-md px-10 lg:px-20">
				{prestationDetail.image && (
					<Image
						src={prestationDetail.image}
						width={"250"}
						height={"250"}
						className="rounded-md"
						alt="Photo d'un massage"
					/>
				)}
				<h3 className="text-xl font-bold mb-2">{prestationDetail.title}</h3>
				<p className="mb-4">{prestationDetail.description}</p>
				{prestationDetail.details && (
					<p className="mb-4">{prestationDetail.details}</p>
				)}
				{prestationDetail.details2 && (
					<p className="mb-4">{prestationDetail.details2}</p>
				)}
				<div className="mb-4">
					<p>{prestationDetail.prix1}</p>
					{prestationDetail.prix2 && <p>{prestationDetail.prix2}</p>}
				</div>
				<a
					href={prestationDetail.calendlyUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
				>
					{prestationDetail.button}
				</a>
			</div>
		</>
	);
};

export default PrestationCard;
