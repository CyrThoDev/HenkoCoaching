export default function Massages() {
	const massages = [
		{
			title: "Massage suédois relaxant",
			description: `Le massage suédois relaxant est une technique de massage très populaire, idéale pour détendre en profondeur le corps tout en apaisant l'esprit. Il se compose de mouvements longs et fluides, de pétrissages, de frictions et de tapotements, réalisés à un rythme modéré pour favoriser la relaxation musculaire et améliorer la circulation sanguine. L’objectif principal est de réduire le stress, soulager les tensions musculaires et favoriser un bien-être général.`,
			image: "/images/massage-relaxant.jpg",
		},
		{
			title: "Massage suédois sportif",
			description: `Le massage suédois sportif est une variante du massage suédois classique, spécifiquement conçu pour répondre aux besoins des sportifs, avant ou après l'effort. Ce type de massage vise à préparer les muscles à l’exercice, à améliorer la performance et à accélérer la récupération.`,
			image: "/images/massage-sportif.jpg",
		},
		{
			title: "Massage avec ventouse",
			description: `Le massage ventouse, ou cupping, est une technique de thérapie manuelle ancestrale, utilisée pour stimuler la circulation sanguine, soulager les tensions musculaires et favoriser la détoxification du corps.`,
			image: "/images/massage-ventouse.jpg",
		},
		{
			title: "Bottes de compression/Pressothérapie",
			description: `C’est un dispositif de récupération utilisé principalement dans le domaine sportif, mais également pour améliorer la circulation sanguine et traiter diverses problématiques de santé.`,
			image: "/images/bottes-compression.jpg",
		},
		{
			title: "Massage 100% personnalisé",
			description: `Offrez-vous une expérience de bien-être unique avec un massage personnalisé sur mesure. Conçu spécifiquement en fonction de vos besoins et de vos attentes.`,
			image: "/images/massage-personnalise.jpg",
		},
	];

	return (
		<div className="bg-white text-black py-12 px-6">
			<h1 className="text-4xl font-bold text-center mb-12">
				Découvrez nos Massages
			</h1>
			<div className="space-y-16">
				{massages.map((massage, index) => (
					<div
						key={index}
						className={`flex flex-col md:flex-row items-center ${
							index % 2 === 0 ? "" : "md:flex-row-reverse"
						}`}
					>
						{/* Image Section */}
						<div className="md:w-1/2">
							<img
								src={massage.image}
								alt={massage.title}
								className="object-cover w-full h-64 rounded-lg shadow-lg"
							/>
						</div>

						{/* Text Section */}
						<div className="md:w-1/2 md:pl-8 md:pr-8 mt-6 md:mt-0">
							<h2 className="text-3xl font-bold mb-4">{massage.title}</h2>
							<p className="text-lg leading-relaxed">{massage.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
