import { useState } from "react";
import ButtonBlack from "./ButtonBlack";
import ButtonOrange from "./ButtonOrange";

const faqs = [
	{
		question:
			"Qu’est-ce qui différencie HENKO COACHING d’une salle de sport classique ?",
		answer:
			"Le concept HENKO COACHING est différent car c’est une petite salle intimiste qui prône pour la qualité plutôt que la quantité, grâce à une coach sportive présente et disponible pour vous du début à la fin de votre séance. De plus, plusieurs formules vous sont proposées pour que vous ne soyez pas bloqués à payer un abonnement pendant 12 ou 24 mois. Par exemple, si vous anticipez vos vacances, votre abonnement pourra être suspendu pendant cette période. La salle est dotée de matériel professionnel, de bonne qualité et neuf. De nombreuses places de parking gratuites sont disponibles devant le local et un cabinet de kinésithérapie se trouve à côté. Tout simplement, Henko Coaching est une salle de sport à taille humaine, à l’abri des jugements et regards indiscrets qui s’adapte à vos besoins et votre situation. Retrouvez une salle de massage dans ce même espace.",
	},
	{
		question: "Comment puis-je m’inscrire ?",
		answer:
			"Vous pouvez prendre contact avec moi par téléphone, mail ou via le formulaire de contact. Nous pouvons aussi convenir d’un rendez-vous à la salle. Vous avez besoin de vous munir ou de m’envoyer une copie de votre pièce d’identité.",
	},
	{
		question:
			"Puis-je bénéficier d’un délai de rétractation après m’être abonnée sur une formule coaching avec engagement ?",
		answer:
			"Non, il n’y a pas de délai de rétractation après la souscription d’une formule avec engagement. C’est pour cela que je vous propose de faire une séance d’essai avant de vous engager. Cette séance d’essai vous sera remboursée ou offerte si vous souscrivez à l’une des trois formules.",
	},
	{
		question:
			"Est-ce que je peux me faire masser même si je ne fais pas de sport ?",
		answer: "Bien-sûr, l’un n’empêche pas l’autre 😉",
	},
	{
		question:
			"Je ne souhaite pas être coaché, est-ce-que je peux venir quand même pratiquer du sport en accès libre ?",
		answer:
			"Oui c’est possible, une formule accès libre avec plusieurs formules est proposée à partir du 1er février 2025.",
	},
	{
		question: "Existe-t-il des cours en small groupe ?",
		answer: "Pas pour le moment, mais cela sera peut-être envisagé plus tard.",
	},
	{
		question: "Quels sont les moyens de paiement possibles ?",
		answer:
			"Chèque, virement, espèces ou carte bancaire via un lien de paiement personnalisé qui vous sera envoyé.",
	},
];

function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className=" px-10 lg:px-20 flex flex-col gap-20 py-10 ">
			<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker">
				<span className="text-3xl text-black z-10">FAQ</span>
				<div className="w-[2rem] h-3  bg-darkorange -mt-3 -z-1" />
			</h2>
			<div className="space-y-6">
				{faqs.map((faq, index) => (
					<div key={index} className="border-b border-white pb-4">
						<h3
							className="text-black font-semibold mb-2 cursor-pointer flex items-center justify-between"
							onClick={() => toggleFAQ(index)}
						>
							{faq.question}
							<span
								className={`transform transition-transform duration-300 text-black ${
									openIndex === index ? "rotate-180" : "rotate-0"
								}`}
							>
								▼
							</span>
						</h3>
						{openIndex === index && (
							<p className="text-black mt-2">{faq.answer}</p>
						)}
					</div>
				))}
			</div>
			<div className="flex flex-col gap-8 items-center justify-center text-black">
				<p className="text-center">
					Tu n’as pas trouvé réponse à ta question ?
				</p>
				<ButtonOrange
					title="JE SOUHAITE AVOIR PLUS D'INFOS"
					link="/#contact"
					width="w-[18rem] md:w-[20rem]"
				/>
			</div>
		</div>
	);
}

export default FAQ;
