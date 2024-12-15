const plans = [
	{
		name: "Formule 1",
		sessions: "1 séance / semaine",
		options: [
			{ type: "Sans engagement", price: "200€/mois", perSession: "50€/séance" },
			{
				type: "Avec engagement 4 mois",
				price: "140€/mois",
				perSession: "35€/séance",
			},
			{
				type: "Avec engagement 6 mois",
				price: "120€/mois",
				perSession: "30€/séance",
			},
		],
	},
	{
		name: "Formule 2",
		sessions: "2 séances / semaine",
		options: [
			{ type: "Sans engagement", price: "360€/mois", perSession: "45€/séance" },
			{
				type: "Avec engagement 4 mois",
				price: "240€/mois",
				perSession: "30€/séance",
			},
			{
				type: "Avec engagement 6 mois",
				price: "200€/mois",
				perSession: "25€/séance",
			},
		],
	},
	{
		name: "Formule 3",
		sessions: "3 séances / semaine",
		options: [
			{ type: "Sans engagement", price: "480€/mois", perSession: "40€/séance" },
			{
				type: "Avec engagement 4 mois",
				price: "300€/mois",
				perSession: "25€/séance",
			},
			{
				type: "Avec engagement 6 mois",
				price: "240€/mois",
				perSession: "20€/séance",
			},
		],
	},
];

function Formules() {
	return (
		<div className="flex flex-col  gap-10">
			<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker">
				<span className="text-3xl z-10">LES FORMULES</span>
				<div className="w-[8rem] h-3  bg-darkorange -mt-3 -z-1" />
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{plans.map((plan) => (
					<div
						key={plan.name}
						className="border border-sand rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow"
					>
						<h3 className="text-xl font-semibold text-center mb-4">
							{plan.name}
						</h3>
						<p className="text-center text-gray-600 mb-6">{plan.sessions}</p>
						<ul className="space-y-4">
							{plan.options.map((option) => (
								<li
									key={option.perSession}
									className="flex justify-between items-center"
								>
									<div>
										<p className="font-medium text-gray-800">{option.type}</p>
										<p className="text-sm text-gray-500">{option.perSession}</p>
									</div>
									<p className="text-lg font-bold text-darkorange">
										{option.price}
									</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default Formules;
